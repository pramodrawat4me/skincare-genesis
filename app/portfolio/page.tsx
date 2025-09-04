import React from "react";

import { Metadata } from "next";
import PortfolioPage from "./PortfolioPage";
export const metadata: Metadata = {
  title: "Portfolio - Genesis Skin Care",
  description:
    "Learn more Portfolio Genesis Skin Care, our team, and our journey in providing expert treatments.",
};
export default function page() {
  return <PortfolioPage />;
}
