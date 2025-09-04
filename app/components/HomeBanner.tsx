import { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Link from "next/link";
import Image from "next/image";

interface BannerItem {
  bnr_image: string;
  bnr_icon?: string;
  bnr_title?: string;
  bnr_button?: { url: string; title: string };
}

interface HomeBannerProps {
  bnr_onoff: boolean;
  banner_item: BannerItem[];
}

export default function HomeBanner({
  bnr_onoff,
  banner_item,
}: HomeBannerProps) {
  const splideRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (bnr_onoff && banner_item?.length > 0 && splideRef.current) {
      const splide = new Splide(splideRef.current, {
        type: "loop",
        perPage: 1,
        autoplay: true,
      });
      splide.mount();
      return () => splide.destroy(true);
    }
  }, [bnr_onoff, banner_item]);

  if (!bnr_onoff) return null;

  return (
    <div
      ref={splideRef}
      className="splide banner-slider"
      role="group"
      aria-label="Banner Slider"
    >
      <div className="splide__track">
        <div className="splide__list">
          {banner_item.map((item, index) => {
            const cleanText =
              item.bnr_title?.replace(/<br\s*\/?>/gi, " ") || "";
            return (
              <div
                key={index}
                className="splide__slide bnr-item"
                style={{ backgroundImage: `url(${item.bnr_image})` }}
              >
                <div className="container">
                  <div className="bnr-cont-group">
                    {item?.bnr_icon && (
                      <span className="bnr-icon">
                        <Image
                          src={item.bnr_icon}
                          width={50}
                          height={42}
                          alt={cleanText}
                        />
                      </span>
                    )}
                    {item?.bnr_title && (
                      <h2
                        dangerouslySetInnerHTML={{ __html: item.bnr_title }}
                      />
                    )}
                    {item?.bnr_button && (
                      <Link href={item.bnr_button.url} className="cmn-bdr-btn">
                        {item.bnr_button.title}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
