import { useState } from "react";

function ResultPage({ formData, setPage }) {
  const [copied, setCopied] = useState(false);

  const getFoodsByStatus = (status) => {
    const foods = {
      Chicken: formData.chicken,
      Mutton: formData.mutton,
      Fish: formData.fish,
      Eggs: formData.eggs,
      Milk: formData.milk,
      Curd: formData.curd,
      Paneer: formData.paneer,
      Dal: formData.dal,
      Chana: formData.chana,
      Soy: formData.soy,
      Rice: formData.rice,
      Roti: formData.roti,
      Oats: formData.oats,
      Ghee: formData.ghee,
      Butter: formData.butter,
      Nuts: formData.nuts,
      Seeds: formData.seeds,
      Whey: formData.whey,
      Creatine: formData.creatine,
      Multivitamins: formData.multivitamins,
    };

    const selected = Object.entries(foods)
      .filter(([_, value]) => value === status)
      .map(([food]) => food);

    return selected.length ? selected.join(", ") : "None specified";
  };

  const prompt = `
You are a professional Indian dietician and fitness-focused nutrition coach.

Create a personalized diet and/or workout plan based on the user profile below.

USER PROFILE:
- Age: ${formData.age || "Not specified"}
- Gender: ${formData.gender || "Not specified"}
- Height: ${formData.height || "Not specified"} cm
- Current body weight: ${formData.weight || "Not specified"} kg
- Target body weight: ${formData.targetWeight || "Not specified"} kg
- Activity level: ${formData.activityLevel || "Not specified"}
- Training type: ${formData.trainingType || "Not specified"}
- Meals per day: ${formData.mealsPerDay || "Not specified"}
- Budget: ${formData.budget || "Not specified"}
- Plan type: ${formData.planType || "Not specified"}

BODY GOAL:
- ${formData.goal || "Not specified"}

FOOD PREFERENCES:
- Preferred foods: ${getFoodsByStatus("Preferred")}
- Acceptable foods: ${getFoodsByStatus("Acceptable")}
- Avoid foods: ${getFoodsByStatus("Avoid")}

LIFESTYLE:
- Smoking: ${formData.smoking || "Not specified"}
- Alcohol: ${formData.alcohol || "Not specified"}
- Sleep: ${formData.sleep || "Not specified"}
- Stress: ${formData.stress || "Not specified"}
- Water intake: ${formData.waterIntake || "Not specified"}
- Workout time: ${formData.gymTime || "Not specified"}
- Cooking time: ${formData.cookingTime || "Not specified"}
- Spice tolerance: ${formData.spiceTolerance || "Not specified"}

RESPONSE FORMAT:
1. Short disclaimer
2. Person snapshot
3. Goal strategy
4. Daily calories and macros
5. One-day meal plan with this table:

| Meal | Main Foods | Alternatives | Approx Calories | Protein |

Alternative rules:
- Give 2 to 3 alternatives for every meal.
- Keep calories and protein similar.
- Use affordable Indian foods.
- Do not suggest foods marked as Avoid.

6. Supplement use if applicable
7. Flexibility notes
8. Workout recommendations if selected
9. Lifestyle tips
10. Mindset reminder
11. Final reminder

End with:
“This is only a sample plan. Individual needs vary, and adjustments may be required over time.”
`;

  function copyPrompt() {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
  }

  return (
    <div className="card result-card">
      <h2>Generated Prompt</h2>
      <p>Your prompt is ready. Copy it and paste it into ChatGPT.</p>

      <div className="summary-box">
        <h3>Profile Summary</h3>
        <p><strong>Goal:</strong> {formData.goal || "Not specified"}</p>
        <p><strong>Plan Type:</strong> {formData.planType || "Not specified"}</p>
        <p><strong>Preferred Foods:</strong> {getFoodsByStatus("Preferred")}</p>
        <p><strong>Avoid Foods:</strong> {getFoodsByStatus("Avoid")}</p>
      </div>

      <textarea className="prompt-box" value={prompt} readOnly />

      {copied && <p className="success-msg">Prompt copied successfully.</p>}

      <div className="result-buttons">
        <button onClick={copyPrompt} className="dark-btn">
          Copy Prompt
        </button>

        <a href="https://chatgpt.com" target="_blank" rel="noreferrer">
          <button className="green-btn">Open ChatGPT</button>
        </a>

        <button onClick={() => setPage(1)} className="reset-btn">
          Edit Answers
        </button>
      </div>

      <div className="paid-plan-box">
        <h3>Need a Professional Plan?</h3>
        <p>
          If you want a personally customized plan, choose one option below,
          scan and pay, then send the payment screenshot on Instagram.
        </p>

        <div className="price-grid">
          <div className="price-card">
            <h4>Diet Plan</h4>
            <p>Personalized calories, macros, Indian meals and alternatives.</p>
            <strong>₹199</strong>
          </div>

          <div className="price-card">
            <h4>Workout Plan</h4>
            <p>Weekly workout split, exercises, sets, reps and cardio guidance.</p>
            <strong>₹199</strong>
          </div>

          <div className="price-card highlight">
            <h4>Diet + Workout</h4>
            <p>Complete diet and workout plan with food swaps and guidance.</p>
            <strong>₹349</strong>
          </div>
        </div>

        <img src="/scanner.jpg" alt="Payment QR Scanner" className="scanner-img" />

        <p className="payment-note">
          After payment, DM screenshot to <strong>@lean_varshith</strong>
        </p>
      </div>

      <div className="next-steps">
        <h3>What to do next?</h3>
        <ol>
          <li>Copy the prompt.</li>
          <li>Open ChatGPT.</li>
          <li>Paste the prompt.</li>
          <li>Get your personalized plan.</li>
        </ol>
      </div>
    </div>
  );
}

export default ResultPage;