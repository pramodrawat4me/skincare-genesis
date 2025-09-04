import { Metadata } from "next";
import AboutPage from "./AboutPage";

export const metadata: Metadata = {
  title: "About Us - Genesis Skin Care",
  description:
    "Learn more about Genesis Skin Care, our team, and our journey in providing expert treatments.",
};

export default function Page() {
  return <AboutPage />;
}
