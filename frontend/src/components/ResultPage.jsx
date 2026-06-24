function ResultPage({ formData, setPage }) {
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

5) ONE-DAY SAMPLE MEAL PLAN

For EACH meal, use this table format:

| Meal | Main Foods | Alternatives | Approx Calories | Protein |

In the Alternatives column:
- Give 2–3 realistic Indian alternatives.
- Keep calories and protein similar.
- Respect preferred and acceptable foods.
- Do NOT suggest foods marked as avoid.

Example:
Chicken curry + rice → fish curry + rice OR soya chunks + rice OR paneer curry + roti  
Oats + milk → poha + eggs OR idli + sambar OR upma + curd  
Paneer curry → soya chunks OR eggs OR chicken curry

6) SUPPLEMENT USE

Only include supplements if whey, creatine, or multivitamins are preferred or acceptable.

7) FLEXIBILITY NOTES

Explain food swaps clearly.

Must include examples like:
- Chicken ↔ fish ↔ eggs ↔ paneer ↔ soya chunks
- Paneer ↔ eggs ↔ dal ↔ chana ↔ soy
- Rice ↔ roti ↔ oats ↔ poha ↔ idli ↔ dosa
- Milk ↔ curd ↔ buttermilk
- Nuts ↔ seeds ↔ groundnuts

Also explain:
- What to do if a meal is missed
- What to eat while eating outside
- What to do on low appetite days
- How to replace expensive foods with cheaper foods

8) HABIT & LIFESTYLE TIPS

9) MINDSET REMINDER

10) FINAL REMINDER

End with:
“This is only a sample plan. Individual needs vary, and adjustments may be required over time.”

----------------------------------

USER PROFILE:
- Age: ${formData.age || "Not specified"}
- Gender: ${formData.gender || "Not specified"}
- Height: ${formData.height || "Not specified"} cm
- Current body weight: ${formData.weight || "Not specified"} kg
- Activity level: ${formData.activityLevel || "Not specified"}
- Primary training type: ${formData.trainingType || "Not specified"}
- Preferred meals per day: ${formData.mealsPerDay || "Not specified"}
- Daily food budget: ${formData.budget || "Not specified"}

BODY GOAL:
- ${formData.goal || "Not specified"}

FOOD PREFERENCES:
- Preferred foods: ${getFoodsByStatus("Preferred")}
- Acceptable foods: ${getFoodsByStatus("Acceptable")}
- Foods to avoid completely: ${getFoodsByStatus("Avoid")}

LIFESTYLE & HABITS:
- Smoking status: ${formData.smoking || "Not specified"}
- Alcohol consumption: ${formData.alcohol || "Not specified"}
- Sleep duration: ${formData.sleep || "Not specified"}
- Stress level: ${formData.stress || "Not specified"}
- Cooking time tolerance: ${formData.cookingTime || "Not specified"}
- Spice tolerance: ${formData.spiceTolerance || "Not specified"}

CONSTRAINTS:
- Use commonly available Indian foods
- Keep meals affordable and realistic
- Prefer whole foods first
- Supplements only if listed in user foods
- No extreme calorie deficits or surpluses
- No medical or clinical claims.
`;

  function copyPrompt() {
    navigator.clipboard.writeText(prompt);
    alert("Prompt copied successfully!");
  }

  return (
    <div className="card result-card">
      <h2>Generated Prompt</h2>

      <textarea className="prompt-box" value={prompt} readOnly />

      <div className="result-buttons">
        <button onClick={copyPrompt} className="dark-btn">
          📋 Copy Prompt
        </button>

        <a href="https://chatgpt.com" target="_blank" rel="noreferrer">
          <button className="green-btn">🤖 Open ChatGPT</button>
        </a>

        <button onClick={() => setPage(1)} className="reset-btn">
          Reset
        </button>
      </div>
    </div>
  );
}

export default ResultPage;