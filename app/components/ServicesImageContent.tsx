import React from "react";
interface ServicesImageContentProps {
  sic_onoff?: boolean;
  sic_image_right?: boolean;
  sic_image?: string;
  sic_title?: string;
  sic_description?: string;
  sic_button?: string;
}
export default function ServicesImageContent({
  sic_onoff,
  sic_image_right,
  sic_image,
  sic_title,
  sic_description,
  sic_button,
}: ServicesImageContentProps) {
  return (
    <>
      {sic_onoff && (
        <div
          className={
            sic_image_right
              ? "service-list d-flex service-image-right"
              : "service-list d-flex"
          }
        >
          <div className="service-item">
            <div className="service-left">
              <div className="service-img">
                <img src={sic_image} width="612" height="408" alt={sic_title} />
              </div>
            </div>
            <div className="service-right">
              <div className="service-cont">
                <h3 dangerouslySetInnerHTML={{ __html: sic_title || "" }} />
                <p
                  dangerouslySetInnerHTML={{ __html: sic_description || "" }}
                />
                <a className="cmn-btn" href={sic_button.url}>
                  {sic_button.title}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
