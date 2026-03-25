import MainHeading from "./MainHeading";

export default function Ingredients() {
  return (
    <div className="border-b-1 border-zinc-200 pb-6">
      <MainHeading text="Ingredients" />
      <ul className="list-disc list-inside space-y-2 pl-2">
        <li className="text-zinc-600">2-3 large eggs</li>
        <li className="text-zinc-600">Salt, to taste</li>
        <li className="text-zinc-600">Pepper, to taste</li>
        <li className="text-zinc-600">1 tablespoon of butter or oil</li>
        <li className="text-zinc-600">Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
      </ul>
    </div>
  )
}
