import { Metadata } from "next";
import BlogPage from "./BlogPage";

export const metadata: Metadata = {
  title: "Blog - Genesis Skin Care",
  description:
    "Blog Genesis Skin Care, our team, and our journey in providing expert treatments.",
};

export default function Page() {
  return <BlogPage />;
}
