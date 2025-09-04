import React from "react";

import { Metadata } from "next";
import ServicesPage from "./ServicesPage";

export const metadata: Metadata = {
  title: "Our Services - Genesis Skin Care",
  description:
    "Learn more Our Services for  Genesis Skin Care, our team, and our journey in providing expert treatments.",
};
export default function page() {
  return <ServicesPage />;
}
