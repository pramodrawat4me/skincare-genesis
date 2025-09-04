import { Metadata } from "next";
import HairRemovalPage from "./HairRemovalPage";

export const metadata: Metadata = {
  title: "Hair Removal - Genesis Skin Care",
  description:
    "Hair Removal Genesis Skin Care, our team, and our journey in providing expert treatments.",
};

export default function Page() {
  return <HairRemovalPage />;
}
