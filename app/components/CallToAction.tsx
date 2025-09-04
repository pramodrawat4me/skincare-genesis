import React from "react";
interface CallToActionProps {
  ca_onoff?: boolean;
  ca_title?: string;
  ca_button?: string;
}
export default function CallToAction({
  ca_onoff,
  ca_title,
  ca_button,
}: CallToActionProps) {
  return (
    <>
      {ca_onoff && (
        <section className="letsconnect-scn">
          <div className="container">
            <div className="letsconnect-inner d-flex jc-space-between">
              <div className="letsconnect-txt">
                {ca_title && <h3>{ca_title}</h3>}
              </div>
              {ca_button && (
                <a href={ca_button?.url} className="cmn-btn">
                  {ca_button?.title}
                </a>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
