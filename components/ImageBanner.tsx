import Image from "next/image";
import omelette from "@/public/image-omelette.jpeg"

export default function ImageBanner() {
  return (
    <div className="rounded-xl">
      <Image src={omelette} className="rounded-lg" alt="omelette" />
    </div>
  )
}
