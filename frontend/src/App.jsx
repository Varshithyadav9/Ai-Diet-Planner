import { useState } from "react";
import "./App.css";

import BasicProfile from "./components/BasicProfile";
import GoalPage from "./components/GoalPage";
import FoodPreferences from "./components/FoodPreferences";
import HabitsPage from "./components/HabitsPage";
import ResultPage from "./components/ResultPage";

function App() {
  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",

    age: "",
    gender: "",
    height: "",
    weight: "",
    targetWeight: "",
    trainingType: "",
    activityLevel: "",
    mealsPerDay: "",
    budget: "",
    planType: "",
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
    wakeUpTime: "",
    sleepTime: "",
    waterIntake: "",
    gymTime: "",
  });

  const steps = ["Profile", "Goal", "Food", "Habits", "Plans"];

  return (
    <div className="app">
      <header className="top-header">
        <h1>LeanFit AI</h1>
        <p>Personalized diet, workout and fitness tracking by Lean Varshith.</p>
      </header>

      {page === 0 ? (
        <div className="card welcome-card">
          <h2>Welcome</h2>
          <p>Enter your details to start your fitness plan.</p>

          <div className="grid">
            <div>
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div>
              <label>Email ID</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div>
              <label>Mobile Number</label>
              <input
                type="tel"
                placeholder="Enter mobile number"
                value={formData.mobile}
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
              />
            </div>
          </div>

          <button
            className="start-btn"
            onClick={() => setPage(1)}
          >
            Start My Plan
          </button>
        </div>
      ) : (
        <>
          <div className="stepper">
            {steps.map((step, index) => {
              const stepNumber = index + 1;
              return (
                <div className="step-item" key={step}>
                  <div
                    className={
                      page >= stepNumber ? "step-circle active" : "step-circle"
                    }
                  >
                    {stepNumber}
                  </div>
                  <span>{step}</span>
                </div>
              );
            })}
          </div>

          {page === 1 && (
            <BasicProfile formData={formData} setFormData={setFormData} />
          )}

          {page === 2 && (
            <GoalPage formData={formData} setFormData={setFormData} />
          )}

          {page === 3 && (
            <FoodPreferences formData={formData} setFormData={setFormData} />
          )}

          {page === 4 && (
            <HabitsPage formData={formData} setFormData={setFormData} />
          )}

          {page === 5 && (
            <ResultPage formData={formData} setPage={setPage} />
          )}

          <div className="bottom-nav">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              Back
            </button>

            <a
              href="https://instagram.com/lean_varshith"
              target="_blank"
              rel="noreferrer"
            >
              @lean_varshith
            </a>

            {page < 5 ? (
              <button onClick={() => setPage(page + 1)}>Next</button>
            ) : (
              <button disabled>Next</button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;