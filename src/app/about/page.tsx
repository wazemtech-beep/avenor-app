import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import AboutView from "@/components/pages/AboutView";
export const metadata: Metadata = siteConfig.metadata["/about"];
export default function Page() {
  return <AboutView />;
}
