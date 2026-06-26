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
        <h1>LeanFit</h1>
        <p>Personalized Nutrition & Fitness Platform</p>
      </header>

      {page === 0 ? (
        <div className="welcome-wrapper">
          <section className="hero-card">
            <p className="brand-label">LeanFit by Varshith</p>
            <h2>Transform Your Body. One Plan at a Time.</h2>
            <p className="hero-text">
              Get personalized nutrition, workout guidance and progress support
              designed around your body, lifestyle and fitness goals.
            </p>

            <div className="welcome-form">
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

            <button className="start-btn" onClick={() => setPage(1)}>
              Start Your Journey
            </button>
          </section>

          <section className="stats-grid">
            <div>
              <strong>Personalized</strong>
              <span>Diet Plans</span>
            </div>
            <div>
              <strong>Custom</strong>
              <span>Workout Programs</span>
            </div>
            <div>
              <strong>Progress</strong>
              <span>Tracking Support</span>
            </div>
          </section>

          <section className="features-grid">
            <div className="feature-card">
              <h3>Personalized Nutrition</h3>
              <p>Indian meal plans, calories, macros and food alternatives.</p>
            </div>

            <div className="feature-card">
              <h3>Workout Programs</h3>
              <p>Gym and home workout plans based on your fitness goal.</p>
            </div>

            <div className="feature-card">
              <h3>Progress Tracking</h3>
              <p>Track calories, water, weight and weekly fitness progress.</p>
            </div>

            <div className="feature-card">
              <h3>Lean Pro Membership</h3>
              <p>Monthly support, plan updates and progress dashboard access.</p>
            </div>
          </section>

          <section className="trust-box">
            <h3>Why Choose LeanFit?</h3>
            <div className="trust-list">
              <span>Personalized plans</span>
              <span>Affordable pricing</span>
              <span>Indian food options</span>
              <span>Easy to follow</span>
              <span>WhatsApp support</span>
            </div>
          </section>
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

          {page === 5 && <ResultPage formData={formData} setPage={setPage} />}

          <div className="bottom-nav">
            <button disabled={page === 1} onClick={() => setPage(page - 1)}>
              Previous
            </button>

            <a
              href="https://instagram.com/lean_varshith"
              target="_blank"
              rel="noreferrer"
            >
              @lean_varshith
            </a>

            {page < 5 ? (
              <button onClick={() => setPage(page + 1)}>Continue</button>
            ) : (
              <button disabled>Continue</button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;