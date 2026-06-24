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

  const steps = ["Profile", "Goal", "Food", "Habits", "Prompt"];

  return (
    <div className="app">
      <header className="top-header">
        <h1>Diet Prompt Generator</h1>
        <p>Generate a clear, detailed diet prompt you can paste into any AI.</p>
      </header>

      <div className="stepper">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          return (
            <div className="step-item" key={step}>
              <div className={page >= stepNumber ? "step-circle active" : "step-circle"}>
                {stepNumber}
              </div>
              <span>{step}</span>
            </div>
          );
        })}
      </div>

      {page === 1 && <BasicProfile formData={formData} setFormData={setFormData} />}
      {page === 2 && <GoalPage formData={formData} setFormData={setFormData} />}
      {page === 3 && <FoodPreferences formData={formData} setFormData={setFormData} />}
      {page === 4 && <HabitsPage formData={formData} setFormData={setFormData} />}
      {page === 5 && <ResultPage formData={formData} setPage={setPage} />}

      <div className="bottom-nav">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Back
        </button>

        <a href="https://instagram.com/lean_varshith" target="_blank" rel="noreferrer">
          📷 @lean_varshith
        </a>

        {page < 5 ? (
          <button onClick={() => setPage(page + 1)}>Next</button>
        ) : (
          <button disabled>Next</button>
        )}
      </div>
    </div>
  );
}

export default App;