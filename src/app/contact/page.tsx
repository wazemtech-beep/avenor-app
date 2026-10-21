import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import ContactView from "@/components/pages/ContactView";
export const metadata: Metadata = siteConfig.metadata["/contact"];
export default function Page() {
  return <ContactView />;
}
