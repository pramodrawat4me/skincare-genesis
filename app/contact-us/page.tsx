import React from "react";
import ContactUsPage from "./ContactUsPage";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Us - Genesis Skin Care",
  description:
    "Learn more Contact Us Genesis Skin Care, our team, and our journey in providing expert treatments.",
};
export default function page() {
  return <ContactUsPage />;
}
