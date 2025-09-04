"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header/page";
import Footer from "../components/Footer/page";
import HomeBanner from "../components/HomeBanner";
import ContentImage from "../components/ContentImage";
import ServicesList from "../components/ServicesList";
import Video from "../components/Video";
import BookAppointment from "../components/BookAppointment";
import TeamSection from "../components/TeamSection";
import CallToAction from "../components/CallToAction";
import InnerBanner from "../components/InnerBanner";
import CustomersSay from "../components/CustomersSay";
import ServicesImageContent from "../components/ServicesImageContent";
import PortfoliaList from "../components/PortfoliaList";
import CommonContent from "../components/CommonContent";
import MapSection from "../components/MapSection";
import ContactInfoForm from "../components/ContactInfoForm";
import ImageGallery from "../components/ImageGallery";

type PageBlock =
  | {
      acf_fc_layout: "banner_section";
      bnr_onoff?: boolean;
      banner_item?: unknown;
    }
  | { acf_fc_layout: "inner_banner"; [key: string]: unknown }
  | { acf_fc_layout: "content_image"; [key: string]: unknown }
  | { acf_fc_layout: "services_list"; [key: string]: unknown }
  | { acf_fc_layout: "video_section"; [key: string]: unknown }
  | { acf_fc_layout: "services_image_and_content"; [key: string]: unknown }
  | { acf_fc_layout: "portfolia_list"; [key: string]: unknown }
  | { acf_fc_layout: "common_content"; [key: string]: unknown }
  | { acf_fc_layout: "contact_info_and_form"; [key: string]: unknown }
  | { acf_fc_layout: "map"; [key: string]: unknown }
  | { acf_fc_layout: "image_gallery"; [key: string]: unknown }
  | { acf_fc_layout: "customers_say"; [key: string]: unknown }
  | { acf_fc_layout: "team"; [key: string]: unknown }
  | { acf_fc_layout: "book_appointment"; [key: string]: unknown }
  | { acf_fc_layout: "call_to_action"; [key: string]: unknown };

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export default function ServicesPage() {
  const [servicespage, setServicespage] = useState<PageBlock[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${baseURL}/wp-json/wp/v2/pages/349`)
      .then((res) => res.json())
      .then((data) => {
        const blocks: PageBlock[] =
          (data?.acf?.page_blocks as PageBlock[]) || [];
        setServicespage(blocks);
        setLoading(false);
      });
  }, []);

  const renderBlock = (block: PageBlock, index: number) => {
    switch (block.acf_fc_layout) {
      case "inner_banner":
        return <InnerBanner key={index} {...block} />;

      case "content_image":
        return <ContentImage key={index} {...block} />;

      case "services_list":
        return <ServicesList key={index} {...block} />;

      case "video_section":
        return <Video key={index} {...block} />;

      case "services_image_and_content":
        return <ServicesImageContent key={index} {...block} />;

      case "portfolia_list":
        return <PortfoliaList key={index} {...block} />;

      case "common_content":
        return <CommonContent key={index} {...block} />;

      case "contact_info_and_form":
        return <ContactInfoForm key={index} {...block} />;

      case "map":
        return <MapSection key={index} {...block} />;

      case "image_gallery":
        return <ImageGallery key={index} {...block} />;

      case "customers_say":
        return <CustomersSay key={index} {...block} />;

      case "team":
        return <TeamSection key={index} {...block} />;

      case "book_appointment":
        return <BookAppointment key={index} {...block} />;

      case "call_to_action":
        return <CallToAction key={index} {...block} />;

      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <main>
        {loading ? (
          <div className="loader">
            <span>Loading...</span>
          </div>
        ) : (
          servicespage.map((block, index) => renderBlock(block, index))
        )}
      </main>
      <Footer />
    </>
  );
}
