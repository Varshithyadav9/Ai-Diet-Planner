function FoodPreferences({ formData, setFormData }) {
  const groups = [
    {
      title: "Meat & Eggs",
      items: [
        ["chicken", "Chicken"],
        ["mutton", "Mutton"],
        ["fish", "Fish"],
        ["eggs", "Eggs"],
      ],
    },
    {
      title: "Dairy",
      items: [
        ["milk", "Milk"],
        ["curd", "Curd"],
        ["paneer", "Paneer"],
      ],
    },
    {
      title: "Plant Protein",
      items: [
        ["dal", "Dal"],
        ["chana", "Chana"],
        ["soy", "Soy"],
      ],
    },
    {
      title: "Carbohydrates",
      items: [
        ["rice", "Rice"],
        ["roti", "Roti"],
        ["oats", "Oats"],
      ],
    },
    {
      title: "Fats",
      items: [
        ["ghee", "Ghee"],
        ["butter", "Butter"],
        ["nuts", "Nuts"],
        ["seeds", "Seeds"],
      ],
    },
    {
      title: "Supplements",
      items: [
        ["whey", "Whey Protein"],
        ["creatine", "Creatine"],
        ["multivitamins", "Multi Vitamins"],
      ],
    },
  ];

  const options = ["Preferred", "Acceptable", "Avoid"];

  const updateFood = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <div className="card">
      <h2>Food Preferences</h2>
      <p>Mark foods as preferred, acceptable, or to be avoided.</p>

      {groups.map((group) => (
        <div className="food-group" key={group.title}>
          <h3>{group.title}</h3>

          {group.items.map(([key, label]) => (
            <div className="food-row" key={key}>
              <span>{label}</span>

              <div className="food-buttons">
                {options.map((option) => (
                  <button
                    type="button"
                    key={option}
                    className={
                      formData[key] === option
                        ? `food-btn active ${option.toLowerCase()}`
                        : `food-btn ${option.toLowerCase()}`
                    }
                    onClick={() => updateFood(key, option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default FoodPreferences;