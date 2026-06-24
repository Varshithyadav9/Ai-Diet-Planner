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
You are a professional Indian dietician and fitness-focused nutrition coach who designs realistic meal plans for normal people, not athletes or influencers.

Your task is to create a highly personalized ONE-DAY sample diet and/or workout plan based on the user profile below.

This is NOT medical advice. Do not diagnose conditions or make medical claims. Avoid extreme or unsafe recommendations.

Your priorities, in order:
1. Suit the person's body goal.
2. Match their lifestyle and constraints.
3. Keep it simple, affordable, and repeatable.
4. Encourage consistency over perfection.

TONE:
- Supportive, practical, and non-judgmental.
- Avoid fear-based or overly strict language.
- Do NOT sound like a textbook or generic article.

STRUCTURE YOUR RESPONSE EXACTLY AS FOLLOWS:

1) SHORT DISCLAIMER

State clearly that this is only a sample guideline and not medical advice.

2) PERSON SNAPSHOT

Briefly summarize the person in plain language.

3) GOAL STRATEGY

Explain:
- Why this approach suits their selected goal.
- What kind of results are realistic.
- Why sustainability matters more than speed.

4) DAILY CALORIE & MACRO TARGET

Provide an estimated daily target:
- Calories
- Protein
- Carbs
- Fats

Explain briefly why protein is set at this level.

5) ONE-DAY SAMPLE MEAL PLAN WITH ALTERNATIVES

Design meals based on:
- Preferred meals per day
- Budget
- Cooking tolerance
- Food preferences
- Indian household food availability
- Workout timing

Use this exact table format:

| Meal | Main Foods | Alternatives | Approx Calories | Protein |

For EACH meal:
- Show realistic Indian food preparation styles.
- Include 2 to 3 alternative food options.
- Keep alternatives affordable and commonly available in India.
- Keep calories and protein roughly similar.
- Respect preferred and acceptable foods.
- Do NOT suggest foods marked as Avoid.

Examples:
Chicken curry + rice can be replaced with fish curry + rice OR soya chunks + rice OR paneer curry + roti.
Oats + milk can be replaced with poha + eggs OR idli + sambar OR upma + curd.
Paneer curry can be replaced with soya chunks OR eggs OR chicken curry.
Rice can be replaced with roti OR dosa OR idli OR potato.
Milk can be replaced with curd OR buttermilk OR soy milk.

6) SUPPLEMENT USE

Only include whey protein, creatine, or multivitamins if they are listed as Preferred or Acceptable.
Do not make supplements mandatory.
Do not replace whole foods with supplements.
Mention supplements only as optional support.

7) FLEXIBILITY NOTES

Explain how the user can swap foods.

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

8) WORKOUT RECOMMENDATIONS

If the user selected Diet + Workout Plan or Workout Plan Only:
- Give a weekly workout split
- Mention exercises, sets, reps
- Mention cardio recommendation
- Match the plan to the training type and goal

If the user selected Diet Plan Only:
- Keep workout advice very short and optional.

9) HABIT & LIFESTYLE TIPS

Base this on:
- Sleep
- Stress
- Smoking/alcohol
- Cooking time
- Spice tolerance
- Water intake
- Workout time

Give only practical, non-medical advice.

10) MINDSET REMINDER

Encourage consistency and not quitting after one bad day.

11) FINAL REMINDER

End with:
“This is only a sample plan. Individual needs vary, and adjustments may be required over time.”

----------------------------------

USER PROFILE:
- Age: ${formData.age || "Not specified"}
- Gender: ${formData.gender || "Not specified"}
- Height: ${formData.height || "Not specified"} cm
- Current body weight: ${formData.weight || "Not specified"} kg
- Target body weight: ${formData.targetWeight || "Not specified"} kg
- Activity level: ${formData.activityLevel || "Not specified"}
- Primary training type: ${formData.trainingType || "Not specified"}
- Preferred meals per day: ${formData.mealsPerDay || "Not specified"}
- Daily food budget: ${formData.budget || "Not specified"}

BODY GOAL:
- ${formData.goal || "Not specified"}

PLAN TYPE:
- ${formData.planType || "Not specified"}

FOOD PREFERENCES:
- Preferred foods: ${getFoodsByStatus("Preferred")}
- Acceptable foods: ${getFoodsByStatus("Acceptable")}
- Foods to avoid completely: ${getFoodsByStatus("Avoid")}

LIFESTYLE & HABITS:
- Smoking status: ${formData.smoking || "Not specified"}
- Alcohol consumption: ${formData.alcohol || "Not specified"}
- Sleep duration: ${formData.sleep || "Not specified"}
- Sleep time: ${formData.sleepTime || "Not specified"}
- Wake up time: ${formData.wakeUpTime || "Not specified"}
- Stress level: ${formData.stress || "Not specified"}
- Water intake: ${formData.waterIntake || "Not specified"}
- Workout time: ${formData.gymTime || "Not specified"}
- Cooking time tolerance: ${formData.cookingTime || "Not specified"}
- Spice tolerance: ${formData.spiceTolerance || "Not specified"}

CONSTRAINTS:
- Use commonly available Indian foods.
- Keep meals affordable and realistic.
- Prefer whole foods first.
- Supplements only if listed in user foods.
- Do not suggest foods marked as Avoid.
- No extreme calorie deficits or surpluses.
- No medical or clinical claims.
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
        <p><strong>Target Weight:</strong> {formData.targetWeight || "Not specified"} kg</p>
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