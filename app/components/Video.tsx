"use client";
import React, { useState } from "react";

interface VideoProps {
  video_onoff?: boolean;
  video_title?: string;
  video_button?: string;
  video_description?: string;
  video_image?: string;
  video_url?: string;
}
export default function Video({
  video_onoff,
  video_title,
  video_button,
  video_description,
  video_image,
  video_url,
}: VideoProps) {
  const [videoShow, setVideoShow] = useState(false);
  const videoToggle = () => {
    setVideoShow((prev) => !prev);
  };

  return (
    <>
      {video_onoff && (
        <section className="video-cont-scn">
          <div className="container">
            <div className="d-flex f-center video-cont-inner">
              <div
                onClick={videoToggle}
                className="video-cont-left m-videoplay"
                data-video={video_url}
              >
                <img
                  src={video_image}
                  width="1035"
                  height="841"
                  alt={video_title}
                />
                <span className="play-btn"></span>
              </div>
              <div className="video-cont-right">
                <div className="video-cont-cont">
                  <h2 dangerouslySetInnerHTML={{ __html: video_title || "" }} />

                  <p
                    dangerouslySetInnerHTML={{
                      __html: video_description || "",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          {videoShow && (
            <div
              className={
                videoShow
                  ? "videomodel-main videomodel-open"
                  : "videomodel-main"
              }
            >
              <span className="bg-overlay"></span>
              <div className="videomodel">
                <button className="vm-close" onClick={videoToggle}>
                  ✖
                </button>
                <div className="vm-model">
                  <video width="1000" height="500" controls autoPlay>
                    <source src={video_url} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          )}
        </section>
      )}
    </>
  );
}
