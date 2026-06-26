import { useState } from "react";

function ResultPage({ formData, setPage }) {
  const [selectedPlan, setSelectedPlan] = useState("");

  const plans = [
    {
      name: "Diet Plan",
      price: "₹199",
      desc: "Calories, macros, Indian meals and food alternatives.",
    },
    {
      name: "Workout Plan",
      price: "₹199",
      desc: "Workout split, exercises, sets, reps and cardio.",
    },
    {
      name: "Diet + Workout",
      price: "₹349",
      desc: "Complete diet and workout plan in PDF format.",
    },
  ];

  return (
    <div className="card result-card">
      <h2>Get Your Professional Plan</h2>
      <p>Choose your plan, pay using QR, and send screenshot on Instagram.</p>

      <div className="summary-box">
        <h3>Your Details</h3>
        <p><strong>Goal:</strong> {formData.goal || "Not specified"}</p>
        <p><strong>Plan Type:</strong> {formData.planType || "Not specified"}</p>
        <p><strong>Current Weight:</strong> {formData.weight || "Not specified"} kg</p>
        <p><strong>Target Weight:</strong> {formData.targetWeight || "Not specified"} kg</p>
      </div>

      <div className="paid-plan-box">
        <h3>Choose Your Plan</h3>

        <div className="price-grid">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={
                selectedPlan === plan.name
                  ? "price-card selected-plan"
                  : "price-card"
              }
              onClick={() => setSelectedPlan(plan.name)}
            >
              <h4>{plan.name}</h4>
              <p>{plan.desc}</p>
              <strong>{plan.price}</strong>
            </div>
          ))}
        </div>

        {selectedPlan && (
          <p className="selected-text">
            Selected Plan: <strong>{selectedPlan}</strong>
          </p>
        )}

        <h3>Scan & Pay</h3>

        <a href="/scanner.png" target="_blank" rel="noreferrer">
          <img
            src="/scanner.png"
            alt="Payment QR Scanner"
            className="scanner-img"
          />
        </a>

        <p className="scanner-click-text">
          Click the QR code to open it clearly.
        </p>

        <p className="payment-note">
          After payment, DM screenshot to <strong>@lean_varshith</strong>
        </p>
      </div>

      <div className="next-steps">
        <h3>How You Will Get Your PDF</h3>
        <ol>
          <li>Select a plan.</li>
          <li>Pay using the QR scanner.</li>
          <li>Send payment screenshot to @lean_varshith.</li>
          <li>Your PDF plan will be sent after verification.</li>
        </ol>
      </div>

      <div className="result-buttons">
        <a
          href="https://instagram.com/lean_varshith"
          target="_blank"
          rel="noreferrer"
        >
          <button className="green-btn">Message on Instagram</button>
        </a>

        <button onClick={() => setPage(1)} className="reset-btn">
          Edit Details
        </button>
      </div>
    </div>
  );
}

export default ResultPage;