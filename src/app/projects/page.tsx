import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import ProjectsView from "@/components/pages/ProjectsView";
export const metadata: Metadata = siteConfig.metadata["/projects"];
export default function Page() {
  return <ProjectsView />;
}
