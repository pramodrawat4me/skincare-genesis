"use client";

import React from "react";

// Button type for ci_button
interface Button {
  url: string;
  title: string;
}

// Props for ContentImage component
interface ContentImageProps {
  ci_onoff?: boolean;
  ci_top_title?: string;
  ci_image?: string;
  ci_top_description?: string;
  ci_title?: string;
  ci_description?: string;
  ci_button?: Button; // now properly typed
}

export default function ContentImage({
  ci_onoff = false,
  ci_top_title,
  ci_image,
  ci_top_description,
  ci_title,
  ci_description,
  ci_button,
}: ContentImageProps) {
  return (
    <>
      {ci_onoff && (
        <section className="relaxation-scn">
          <div className="container">
            <div className="title-topbar text-center">
              {ci_top_title && (
                <h2 dangerouslySetInnerHTML={{ __html: ci_top_title }} />
              )}
              {ci_top_description && (
                <p dangerouslySetInnerHTML={{ __html: ci_top_description }} />
              )}
            </div>

            <div className="d-flex jc-space-between relaxation-info f-center">
              <div className="relaxation-left">
                <div className="relaxation-cont">
                  {ci_title && (
                    <h2 dangerouslySetInnerHTML={{ __html: ci_title }} />
                  )}
                  {ci_description && (
                    <p dangerouslySetInnerHTML={{ __html: ci_description }} />
                  )}
                  {ci_button && (
                    <a href={ci_button.url} className="cmn-btn">
                      {ci_button.title}
                    </a>
                  )}
                </div>
              </div>

              <div className="relaxation-right">
                {ci_image && (
                  <div className="relaxation-img">
                    <img
                      src={ci_image}
                      width={701}
                      height={644}
                      alt="Our spa is a sanctuary where relaxation meets rejuvenation."
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
