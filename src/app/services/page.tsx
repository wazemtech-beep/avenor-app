import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import ServicesView from "@/components/pages/ServicesView";
export const metadata: Metadata = siteConfig.metadata["/services"];
export default function Page() {
  return <ServicesView />;
}
