import Image from "next/image";
import React from "react";
interface ServicesListProps {
  serviceslist_onoff?: boolean;
  sl_title?: string;
  sl_description?: string;
  services_list?: Service[];
}
interface Service {
  icon: string;
  title: string;
  description: string;
}
export default function ServicesList({
  serviceslist_onoff,
  sl_title,
  sl_description,
  services_list,
}: ServicesListProps) {
  return (
    <>
      {serviceslist_onoff && (
        <section className="we-believe-scn section-p-no text-center">
          <div className="container">
            <div className="title-topbar we-believe-inner d-flex ">
              {sl_title && (
                <h2 dangerouslySetInnerHTML={{ __html: sl_title || "" }} />
              )}
              {sl_description && (
                <p dangerouslySetInnerHTML={{ __html: sl_description || "" }} />
              )}
            </div>
            <div className="we-believe-list">
              {services_list.map((item, index) => (
                <div key={index} className="we-believe-item">
                  <div className="we-believe-item-inner">
                    {item.icon && (
                      <div className="we-believe-img">
                        <Image
                          src={item.icon}
                          width={74}
                          height={76}
                          alt={item.title}
                        />
                      </div>
                    )}
                    {item.title && <h4>{item.title}</h4>}
                    {item.description && (
                      <p
                        dangerouslySetInnerHTML={{
                          __html: item.description || "",
                        }}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
