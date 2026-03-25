import HeadingText from "@/components/HeadingText"
import ImageBanner from "@/components/ImageBanner"
import Ingredients from "@/components/Ingredients"
import Instructions from "@/components/Instructions"
import Nutrition from "@/components/Nutrition"
import PreparationTime from "@/components/PreparationTime"

export default function Page() {
  return (
    <section className="bg-stone-100 flex place-content-center">
      <div className="w-3xl bg-white p-6 my-5 rounded-xl">
        <ImageBanner />
        <HeadingText />
        <PreparationTime />
        <Ingredients />
        <Instructions />
        <Nutrition />
      </div>
    </section>
  )
}
