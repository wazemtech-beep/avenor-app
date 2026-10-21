import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import Page404View from "@/components/pages/Page404View";
export const metadata: Metadata = siteConfig.metadata["/404"];
export default function Page() {
  return <Page404View />;
}
