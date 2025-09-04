import React from "react";
interface AboutImageContentProps {
  aic_onoff?: boolean;
  aic_image?: string;
  aic_title?: string;
  aic_description?: string;
}
export default function AboutImageContent({
  aic_onoff,
  aic_image,
  aic_title,
  aic_description,
}: AboutImageContentProps) {
  return (
    <>
      {aic_onoff && (
        <section className="relaxation-scn aboutus-scn">
          <div className="container">
            <div className="d-flex jc-space-between relaxation-info f-center">
              <div className="relaxation-left">
                {aic_image && (
                  <div className="relaxation-img">
                    <img
                      src={aic_image}
                      width="701"
                      height="644"
                      alt="Our spa is a sanctuary where relaxation meets rejuvenation."
                    />
                  </div>
                )}
              </div>
              <div className="relaxation-right">
                <div className="relaxation-cont">
                  {aic_title && (
                    <h2 dangerouslySetInnerHTML={{ __html: aic_title || "" }} />
                  )}
                  {aic_description && (
                    <p
                      dangerouslySetInnerHTML={{
                        __html: aic_description || "",
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </section>
      )}
    </>
  );
}
