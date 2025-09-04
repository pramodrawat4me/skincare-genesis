import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="ftr-scn">
      <div className="container">
        <div className="ftr-inner">
          <div className="ftr-left">
            <div className="ftr-logo">
              <Link href={"/"}>
                <Image
                  src={"/images/footer-logo.png"}
                  width={261}
                  height={115}
                  alt={"Genesis Skin Care "}
                />
              </Link>
            </div>
            <p>
              Genesis Skin Care has 30 years of experience offering the best and
              latest treatments for our guests in all aspects of beauty &
              wellness.
            </p>
            <div className="opening-hours-cont">
              <div className="ftr-text">Opening hours</div>
              <div className="ftr-info">
                <div className="day-time">
                  Tuesday To Saturday <span> 9am—6pm</span>
                </div>
                <div className="close-time">
                  <span>Close</span> - Sunday &amp; Monday
                </div>
              </div>
            </div>
          </div>
          <div className="ftr-right">
            <div className="ftr-list">
              <div className="ftr-item">
                <span className="ftr-title">Contact</span>
                <div className="tel-email">
                  <a href="tel:(281) 265-6001">(281) 265-6001</a>
                  <a href="meilto:spagenesis@yahoo.com">spagenesis@yahoo.com</a>
                </div>
                <div className="ftr-address">
                  GENESIS SKIN CARE 4502 RIVERSTONE BLVD, STE #302 MISSOURI
                  CITY, TX 77459
                </div>
              </div>
              <div className="ftr-item">
                <span className="ftr-title">Follow us</span>
                <div className="socia-media">
                  <a href="#" target="_blank" className="whatsapp-icon"></a>
                  <a href="#" target="_blank" className="instagram-icon"></a>
                  <a href="#" target="_blank" className="telegram-icon"></a>
                </div>
              </div>
            </div>

            <div className="copy-right">
              © <span id="d_year">{new Date().getFullYear()}</span> — Copyright
              Genesis Skin-Cares
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
