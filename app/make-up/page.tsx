import { Metadata } from "next";

import MakeUpPage from "./MakeUpPage";

export const metadata: Metadata = {
  title: "Skin Care - Genesis Skin Care",
  description:
    "Skin Care Genesis Skin Care, our team, and our journey in providing expert treatments.",
};

export default function Page() {
  return <MakeUpPage />;
}
