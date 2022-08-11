import Image from "next/image";
import herobg from "/public/herobg.png";

export default function LandingPage() {
  return (
    <div>
      <Image
        src={herobg}
        layout="responsive"
        alt="Blockchain Technology background"
        placeholder="blur"
      />
    </div>
  );
}
