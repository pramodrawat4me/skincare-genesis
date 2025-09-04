"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const menuItems = [
    { name: "About Us", link: "/about-us" },
    {
      name: "Services",
      link: "/services",
      submenu: [
        {
          name: "Skin Care",
          link: "/skin-care",
        },
        {
          name: "Hair Removal",
          link: "/hair-removal",
        },
        {
          name: "Make-Up",
          link: "/make-up",
        },
        {
          name: "Lash And Brow Tinting",
          link: "/lash-and-brow-tinting",
        },
      ],
    },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Bridal", link: "/bridal" },
    { name: "Blog", link: "/blog" },
    { name: "Contact Us", link: "/contact-us" },
  ];
  const pathname = usePathname();
  return (
    <header className="header-scn">
      <div className="container">
        <div className="header-inner d-flex jc-space-between f-center">
          <h1 className="hdr-logo">
            <Link href={"/"}>
              <Image
                src={"/images/logo.png"}
                width={205}
                height={94}
                alt="Genesis Skin Care"
              />
            </Link>
          </h1>
          <div className="hdr-right d-flex f-center">
            <span className="mobile-toggle">
              <i></i>
              <i></i>
              <i></i>
            </span>
            <div className="menu-btn d-flex f-center">
              <nav className="menu">
                <ul>
                  {menuItems.map((item, index) => (
                    <li
                      key={index}
                      className={pathname === item.link ? "active" : ""}
                    >
                      <Link href={item.link}>{item.name}</Link>
                      <ul className="sub-menu">
                        {item.submenu?.map((item, index) => (
                          <li key={index}>
                            <Link href={item.link}>{item.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="hdr-btn">
                <Link href={"/contact-us"} className="cmn-bdr-btn">
                  Book An Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
