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
      <p className="text-gray-500">The table below shows nutritional values per serving without the additional fillings.</p>

      <table className="w-full">
        <tbody>
          {nutritionData.map(data => (
            <tr key={data.label}>
              <td>
                {data.label}
              </td>
              <td>
                {data.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
