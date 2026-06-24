import { useState } from "react";
import "./App.css";

import BasicProfile from "./components/BasicProfile";
import GoalPage from "./components/GoalPage";
import FoodPreferences from "./components/FoodPreferences";
import HabitsPage from "./components/HabitsPage";
import ResultPage from "./components/ResultPage";

function App() {
  const [page, setPage] = useState(1);

  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    height: "",
    weight: "",
    trainingType: "",
    activityLevel: "",
    mealsPerDay: "",
    budget: "",
    goal: "",

    chicken: "",
    mutton: "",
    fish: "",
    eggs: "",
    milk: "",
    curd: "",
    paneer: "",
    dal: "",
    chana: "",
    soy: "",
    rice: "",
    roti: "",
    oats: "",
    ghee: "",
    butter: "",
    nuts: "",
    seeds: "",
    whey: "",
    creatine: "",
    multivitamins: "",

    smoking: "",
    alcohol: "",
    sleep: "",
    stress: "",
    cookingTime: "",
    spiceTolerance: "",
  });

  return (
    <div className="app">
      <div className="header">
        <h1>Diet Prompt Generator</h1>
        <p>Generate a clear, detailed diet prompt you can paste into any AI.</p>
      </div>

      <div className="progress">
        <div className="bar" style={{ width: `${(page / 5) * 100}%` }} />
      </div>

      {page === 1 && <BasicProfile formData={formData} setFormData={setFormData} />}
      {page === 2 && <GoalPage formData={formData} setFormData={setFormData} />}
      {page === 3 && <FoodPreferences formData={formData} setFormData={setFormData} />}
      {page === 4 && <HabitsPage formData={formData} setFormData={setFormData} />}
      {page === 5 && <ResultPage formData={formData} />}

      <div className="navigation">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Back
        </button>

        {page < 5 && (
          <button onClick={() => setPage(page + 1)}>
            Next
          </button>
        )}
      </div>

      <div className="instagram-footer">
        <a href="https://instagram.com/lean_varshith" target="_blank" rel="noreferrer">
          📷 @lean_varshith
        </a>
      </div>
    </div>
  );
}

export default App;