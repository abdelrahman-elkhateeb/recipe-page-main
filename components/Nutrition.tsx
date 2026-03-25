import MainHeading from "./MainHeading"

const nutritionData = [
  { label: "Calories", value: "277kcal" },
  { label: "Carbs", value: "0g" },
  { label: "Protein", value: "20g" },
  { label: "Fat", value: "22g" }
];

export default function Nutrition() {
  return (
    <div>
      <MainHeading text="Nutrition" />
      <p className="text-zinc-500">The table below shows nutritional values per serving without the additional fillings.</p>

      <table className="w-full">
        <tbody>
          {nutritionData.map(data => (
            <tr key={data.label} className="border-b-1 last:border-none">
              <td className="text-zinc-500 py-2 pl-10 pt-4">
                {data.label}
              </td>
              <td className="text-brown-800 font-bold">
                {data.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
