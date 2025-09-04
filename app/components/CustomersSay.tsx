"use client";
import React, { useEffect } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
interface CustomersSayProps {
  cs_onoff?: boolean;
  cs_title?: string;
  cs_button?: string;
  customer_list?: CustomerList[];
}
interface CustomerList {
  content?: string;
  name?: string;
  info?: string;
}
export default function CustomersSay({
  cs_onoff,
  cs_title,
  cs_button,
  customer_list,
}: CustomersSayProps) {
  useEffect(() => {
    if (cs_onoff && customer_list?.length > 0) {
      const splide = new Splide(".customers-slider", {
        type: "loop",
        perPage: 1,
        autoplay: true,
        arrows: false,
      });
      splide.mount();
      return () => splide.destroy(true);
    }
  });
  return (
    <>
      {cs_onoff && (
        <section className="customers-scn about-customers-scn">
          <div className="container">
            <div className="d-flex jc-space-between customers-group">
              <div className="c-title-btn-group">
                {cs_title && (
                  <h2 dangerouslySetInnerHTML={{ __html: cs_title || "" }} />
                )}
                {cs_button && (
                  <a href={cs_button.url} className="cmn-bdr-btn">
                    {cs_button.title}
                  </a>
                )}
              </div>

              <div className="customers-slider splide">
                <div className="splide__track">
                  <div className="splide__list">
                    {customer_list?.map((item, index) => (
                      <div key={index} className="customers-item splide__slide">
                        <div className="customers-cont">
                          <div className="quote-icon"></div>
                          <h3
                            dangerouslySetInnerHTML={{ __html: item?.content }}
                          />

                          <div className="customers-name">{item?.name}</div>
                          <div className="customers-des">{item?.info}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
