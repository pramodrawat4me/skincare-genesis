import React from "react";
interface ImageGalleryProps {
  ig_onoff?: boolean;
  ig_title?: string;
  ig_description?: string;
  gallery_list?: GallaryList[];
}
interface GallaryList {
  title?: string;
  image?: string;
}
export default function ImageGallery({
  ig_onoff,
  ig_title,
  ig_description,
  gallery_list,
}: ImageGalleryProps) {
  return (
    <>
      {ig_onoff && (
        <section className="gallery-scn">
          <div className="container">
            <div className="title-topbar  top-g-title-desc">
              <h2 dangerouslySetInnerHTML={{ __html: ig_title || "" }} />
              <p dangerouslySetInnerHTML={{ __html: ig_description || "" }} />
            </div>

            <div className="gallary-grid">
              {gallery_list?.map((item, index) => (
                <div key={index} className={`g-item${index + 1}`}>
                  <img src={item.image} alt={item.title} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
