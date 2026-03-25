import Image from "next/image";
import omelette from "@/public/image-omelette.jpeg"

export default function ImageBanner() {
  return (
    <div className="">
      <Image src={omelette} alt="omelette" />
    </div>
  )
}
