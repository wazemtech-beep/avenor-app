import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";

export default function BrandLogo({ light = false }: { light?: boolean }) {
  return (
    <span className={`avenor-brand${light ? " avenor-brand--light" : ""}`}>
      <Image src={siteConfig.brand.logo} alt="" width={40} height={40} sizes="40px" className="avenor-brand__mark" />
      <span className="avenor-brand__name">{siteConfig.name}</span>
    </span>
  );
}
