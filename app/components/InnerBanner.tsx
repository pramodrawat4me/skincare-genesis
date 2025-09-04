import React from "react";
interface InnerBannerProps {
  inner_bnr_onoff?: boolean;
  inner_banner_image?: string;
  inner_bnr_title?: string;
  breadcrumb?: string;
}
export default function InnerBanner({
  inner_bnr_onoff,
  inner_banner_image,
  inner_bnr_title,
  breadcrumb,
}: InnerBannerProps) {
  return (
    <>
      {inner_bnr_title && (
        <section
          className="banner-scn section-p-no bnr-inner "
          style={{ backgroundImage: `url('${inner_banner_image}')` }}
        >
          <div className="container">
            <div className="bnr-inner-cont d-flex f-center">
              <h2 dangerouslySetInnerHTML={{ __html: inner_bnr_title || "" }} />
              <div
                className="breadcrumb"
                dangerouslySetInnerHTML={{ __html: breadcrumb || "" }}
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
