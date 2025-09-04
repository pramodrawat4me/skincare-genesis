import { Metadata } from "next";
import SkinCarePage from "./SkinCarePage";

export const metadata: Metadata = {
  title: "Skin Care - Genesis Skin Care",
  description:
    "Skin Care Genesis Skin Care, our team, and our journey in providing expert treatments.",
};

export default function Page() {
  return <SkinCarePage />;
}
