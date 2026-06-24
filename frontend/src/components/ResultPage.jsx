function ResultPage({ formData, setPage }) {
  const prompt = `
You are a professional Indian dietician and fitness-focused nutrition coach who designs realistic meal plans for normal people (not athletes, not influencers).

Your task is to create a highly personalized ONE-DAY sample diet plan based on the user profile below.

This is NOT medical advice. Do not diagnose conditions or make medical claims. Avoid extreme or unsafe recommendations.

Your priorities (in order):
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
2) PERSON SNAPSHOT
3) GOAL STRATEGY
4) DAILY CALORIE & MACRO TARGET
5) ONE-DAY SAMPLE MEAL PLAN
6) SUPPLEMENT USE
7) FLEXIBILITY NOTES
8) HABIT & LIFESTYLE TIPS
9) MINDSET REMINDER
10) FINAL REMINDER

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
Chicken: ${formData.chicken || "Not specified"}
Mutton: ${formData.mutton || "Not specified"}
Fish: ${formData.fish || "Not specified"}
Eggs: ${formData.eggs || "Not specified"}
Milk: ${formData.milk || "Not specified"}
Curd: ${formData.curd || "Not specified"}
Paneer: ${formData.paneer || "Not specified"}
Dal: ${formData.dal || "Not specified"}
Chana: ${formData.chana || "Not specified"}
Soy: ${formData.soy || "Not specified"}
Rice: ${formData.rice || "Not specified"}
Roti: ${formData.roti || "Not specified"}
Oats: ${formData.oats || "Not specified"}
Ghee: ${formData.ghee || "Not specified"}
Butter: ${formData.butter || "Not specified"}
Nuts: ${formData.nuts || "Not specified"}
Seeds: ${formData.seeds || "Not specified"}
Whey Protein: ${formData.whey || "Not specified"}
Creatine: ${formData.creatine || "Not specified"}
Multivitamins: ${formData.multivitamins || "Not specified"}

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
    alert("Prompt copied!");
  }

  return (
    <div className="card result-card">
      <div className="section-title">
        <div className="icon-box">📋</div>
        <div>
          <h2>Generated Prompt</h2>
          <p>Your diet prompt is ready to copy.</p>
        </div>
      </div>

      <div className="warning">
        ⚠️ This generates a sample diet prompt only. This is NOT medical advice. Do not blindly follow it.
      </div>

      <textarea className="prompt-box" value={prompt} readOnly />

      <label className="check-row">
        <input type="checkbox" />
        I understand that this is only a sample prompt and not medical advice
      </label>

      <div className="result-buttons">
        <button onClick={copyPrompt} className="dark-btn">
          📋 Copy Prompt
        </button>

        <a href="https://chatgpt.com" target="_blank" rel="noreferrer">
          <button className="green-btn">🤖 Open in ChatGPT</button>
        </a>

        <button onClick={() => setPage(1)} className="reset-btn">
          Reset
        </button>
      </div>
    </div>
  );
}

export default ResultPage;