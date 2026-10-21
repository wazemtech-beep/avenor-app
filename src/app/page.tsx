import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import HomeView from "@/components/pages/HomeView";
export const metadata: Metadata = siteConfig.metadata["/"];
export default function Page() {
  return <HomeView />;
}
