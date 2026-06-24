function FoodPreferences({ formData, setFormData }) {
  const foods = [
    "chicken",
    "fish",
    "eggs",
    "milk",
    "paneer",
    "rice",
    "roti",
    "oats",
  ];

  const setPreference = (food, value) => {
    setFormData({ ...formData, [food]: value });
  };

  return (
    <div className="card">
      <h2>Food Preferences</h2>
      <p>Mark foods as preferred, acceptable, or to be avoided.</p>

      {foods.map((food) => (
        <div className="food-row" key={food}>
          <span>{food.charAt(0).toUpperCase() + food.slice(1)}</span>

          <div className="food-buttons">
            {["Preferred", "Acceptable", "Avoid"].map((option) => (
              <button
                key={option}
                className={
                  formData[food] === option
                    ? "food-btn active"
                    : "food-btn"
                }
                onClick={() => setPreference(food, option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default FoodPreferences;