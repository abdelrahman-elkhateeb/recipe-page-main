import MainHeading from "./MainHeading";

export default function Ingredients() {
  return (
    <div className="border-b-1">
      <MainHeading text="Ingredients" />
      <ul className="list-disc list-inside">
        <li> 2-3 large eggs</li>
        <li>Salt, to taste</li>
        <li>Pepper, to taste</li>
        <li>1 tablespoon of butter or oil</li>
        <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
      </ul>
    </div>
  )
}
