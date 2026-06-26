import { useState } from "react";

function ResultPage({ formData, setPage }) {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [paymentDone, setPaymentDone] = useState(false);

  const upiId = "varshith0409@axl";
  const payeeName = "Lean Varshith";
  const whatsappNumber = "916302993318";

  const plans = [
    {
      name: "Diet Plan",
      price: 199,
      desc: "Calories, macros, Indian meals and food alternatives.",
    },
    {
      name: "Workout Plan",
      price: 199,
      desc: "Workout split, exercises, sets, reps and cardio.",
    },
    {
      name: "Diet + Workout",
      price: 349,
      desc: "Complete diet and workout plan in PDF format.",
    },
  ];

  const selectedPlanData = plans.find((plan) => plan.name === selectedPlan);

  const paymentLink = selectedPlanData
    ? `upi://pay?pa=${upiId}&pn=${encodeURIComponent(
        payeeName
      )}&am=${selectedPlanData.price}&cu=INR&tn=${encodeURIComponent(
        selectedPlanData.name
      )}`
    : "#";

  const whatsappMessage = selectedPlanData
    ? `Hello Lean Varshith,

I have completed the payment.

Plan: ${selectedPlanData.name}
Amount: ₹${selectedPlanData.price}
UPI ID: ${upiId}

My Details:
Goal: ${formData.goal || "Not specified"}
Plan Type: ${formData.planType || "Not specified"}
Current Weight: ${formData.weight || "Not specified"} kg
Target Weight: ${formData.targetWeight || "Not specified"} kg
Age: ${formData.age || "Not specified"}
Gender: ${formData.gender || "Not specified"}
Height: ${formData.height || "Not specified"} cm

I am attaching my payment screenshot.`
    : "Hello Lean Varshith, I want a professional diet/workout plan.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="card result-card">
      <h2>Get Your Professional Plan</h2>
      <p>
        Choose your plan, pay using UPI, then send your payment screenshot on
        WhatsApp for verification.
      </p>

      <div className="summary-box">
        <h3>Your Details</h3>
        <p>
          <strong>Goal:</strong> {formData.goal || "Not specified"}
        </p>
        <p>
          <strong>Plan Type:</strong> {formData.planType || "Not specified"}
        </p>
        <p>
          <strong>Current Weight:</strong>{" "}
          {formData.weight || "Not specified"} kg
        </p>
        <p>
          <strong>Target Weight:</strong>{" "}
          {formData.targetWeight || "Not specified"} kg
        </p>
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
              onClick={() => {
                setSelectedPlan(plan.name);
                setPaymentDone(false);
              }}
            >
              <h4>{plan.name}</h4>
              <p>{plan.desc}</p>
              <strong>₹{plan.price}</strong>
            </div>
          ))}
        </div>

        {selectedPlanData ? (
          <div className="payment-action-box">
            <p className="selected-text">
              Selected Plan: <strong>{selectedPlanData.name}</strong>
            </p>
            <p className="selected-text">
              Amount: <strong>₹{selectedPlanData.price}</strong>
            </p>

            <a href={paymentLink}>
              <button className="green-btn">
                Pay ₹{selectedPlanData.price} Now
              </button>
            </a>

            <button className="dark-btn" onClick={() => setPaymentDone(true)}>
              I Have Completed Payment
            </button>
          </div>
        ) : (
          <p className="payment-note">Please select a plan first.</p>
        )}
      </div>

      {paymentDone && (
        <div className="payment-proof-box">
          <h3>Payment Proof</h3>
          <p>
            After payment, send your screenshot on WhatsApp. Your PDF plan will
            be sent after verification.
          </p>

          <div className="order-summary">
            <p>
              <strong>Plan:</strong> {selectedPlanData?.name}
            </p>
            <p>
              <strong>Amount:</strong> ₹{selectedPlanData?.price}
            </p>
            <p>
              <strong>UPI ID:</strong> {upiId}
            </p>
          </div>

          <a href={whatsappLink} target="_blank" rel="noreferrer">
            <button className="green-btn">Send Screenshot on WhatsApp</button>
          </a>
        </div>
      )}

      <div className="next-steps">
        <h3>How You Will Get Your PDF</h3>
        <ol>
          <li>Select a plan.</li>
          <li>Click Pay Now and complete payment in PhonePe or any UPI app.</li>
          <li>Click I Have Completed Payment.</li>
          <li>Send payment screenshot on WhatsApp.</li>
          <li>Your PDF plan will be sent after verification.</li>
        </ol>
      </div>

      <div className="result-buttons">
        <button onClick={() => setPage(1)} className="reset-btn">
          Edit Details
        </button>
      </div>
    </div>
  );
}

export default ResultPage;