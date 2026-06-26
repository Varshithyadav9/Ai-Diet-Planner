function ResultPage({ formData, setPage }) {
  return (
    <div className="card result-card">
      <h2>Get Your Professional Plan</h2>
      <p>
        Your details are saved. Choose a plan, complete payment, and send the
        screenshot to receive your PDF plan.
      </p>

      <div className="summary-box">
        <h3>Your Details</h3>
        <p><strong>Goal:</strong> {formData.goal || "Not specified"}</p>
        <p><strong>Plan Type:</strong> {formData.planType || "Not specified"}</p>
        <p><strong>Current Weight:</strong> {formData.weight || "Not specified"} kg</p>
        <p><strong>Target Weight:</strong> {formData.targetWeight || "Not specified"} kg</p>
        <p><strong>Budget:</strong> {formData.budget || "Not specified"}</p>
      </div>

      <div className="paid-plan-box">
        <h3>Choose Your Plan</h3>

        <div className="price-grid">
          <div className="price-card">
            <h4>Diet Plan</h4>
            <p>Calories, macros, Indian meals, food alternatives.</p>
            <strong>₹199</strong>
          </div>

          <div className="price-card">
            <h4>Workout Plan</h4>
            <p>Workout split, exercises, sets, reps and cardio.</p>
            <strong>₹199</strong>
          </div>

          <div className="price-card highlight">
            <h4>Diet + Workout</h4>
            <p>Complete diet and workout plan in PDF format.</p>
            <strong>₹349</strong>
          </div>
        </div>

        <h3>Scan & Pay</h3>

        <a href="/scanner.jpg" target="_blank" rel="noreferrer">
          <img
            src="/scanner.jpg"
            alt="Payment QR Scanner"
            className="scanner-img"
          />
        </a>

        <p className="scanner-click-text">
          Click the QR code to open it clearly.
        </p>

        <p className="payment-note">
          After payment, send screenshot on Instagram:
          <strong> @lean_varshith</strong>
        </p>
      </div>

      <div className="next-steps">
        <h3>How You Will Get Your PDF</h3>
        <ol>
          <li>Select a plan.</li>
          <li>Pay using the QR scanner.</li>
          <li>Send payment screenshot to @lean_varshith.</li>
          <li>Your PDF plan will be sent after payment verification.</li>
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