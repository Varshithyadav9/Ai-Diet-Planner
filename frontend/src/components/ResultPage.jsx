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
You are a professional Indian dietician and fitness-focused nutrition coach who designs realistic meal plans for normal people.

Your task is to create a highly personalized ONE-DAY sample diet plan based on the user profile below.

This is NOT medical advice. Do not diagnose conditions or make medical claims.

STRUCTURE YOUR RESPONSE EXACTLY AS FOLLOWS:

1) SHORT DISCLAIMER
2) PERSON SNAPSHOT
3) GOAL STRATEGY
4) DAILY CALORIE & MACRO TARGET
5) ONE-DAY SAMPLE MEAL PLAN WITH ALTERNATIVES
6) SUPPLEMENT USE
7) FLEXIBILITY NOTES
8) HABIT & LIFESTYLE TIPS
9) MINDSET REMINDER
10) FINAL REMINDER

USER PROFILE:
- Age: ${formData.age || "Not specified"}
- Gender: ${formData.gender || "Not specified"}
- Height: ${formData.height || "Not specified"} cm
- Weight: ${formData.weight || "Not specified"} kg
- Activity level: ${formData.activityLevel || "Not specified"}
- Training type: ${formData.trainingType || "Not specified"}
- Meals per day: ${formData.mealsPerDay || "Not specified"}
- Budget: ${formData.budget || "Not specified"}

BODY GOAL:
- ${formData.goal || "Not specified"}

FOOD PREFERENCES:
- Preferred foods: ${getFoodsByStatus("Preferred")}
- Acceptable foods: ${getFoodsByStatus("Acceptable")}
- Foods to avoid: ${getFoodsByStatus("Avoid")}

LIFESTYLE:
- Smoking: ${formData.smoking || "Not specified"}
- Alcohol: ${formData.alcohol || "Not specified"}
- Sleep: ${formData.sleep || "Not specified"}
- Stress: ${formData.stress || "Not specified"}
- Cooking time: ${formData.cookingTime || "Not specified"}
- Spice tolerance: ${formData.spiceTolerance || "Not specified"}

MEAL TABLE FORMAT:
| Meal | Main Foods | Alternatives | Approx Calories | Protein |

For alternatives:
- Give 2 to 3 options for every meal.
- Keep calories and protein similar.
- Use affordable Indian foods.
- Do not suggest foods marked as Avoid.

Flexibility examples:
Chicken ↔ fish ↔ eggs ↔ paneer ↔ soya chunks
Rice ↔ roti ↔ oats ↔ poha ↔ idli ↔ dosa
Milk ↔ curd ↔ buttermilk
Nuts ↔ seeds ↔ groundnuts

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
      <p>Your diet prompt is ready. Copy it and paste it into ChatGPT.</p>

      <div className="summary-box">
        <h3>Profile Summary</h3>
        <p><strong>Age:</strong> {formData.age || "Not specified"}</p>
        <p><strong>Gender:</strong> {formData.gender || "Not specified"}</p>
        <p><strong>Height:</strong> {formData.height || "Not specified"} cm</p>
        <p><strong>Weight:</strong> {formData.weight || "Not specified"} kg</p>
        <p><strong>Goal:</strong> {formData.goal || "Not specified"}</p>
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

      <div className="next-steps">
        <h3>What to do next?</h3>
        <ol>
          <li>Copy the prompt.</li>
          <li>Open ChatGPT.</li>
          <li>Paste the prompt.</li>
          <li>Get your personalized diet plan.</li>
        </ol>
      </div>
    </div>
  );
}

export default ResultPage;