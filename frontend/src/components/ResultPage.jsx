function ResultPage({ formData }) {
  const prompt = `
You are a professional Indian dietician and fitness-focused nutrition coach.

USER PROFILE:
- Age: ${formData.age || "Not specified"}
- Gender: ${formData.gender || "Not specified"}
- Height: ${formData.height || "Not specified"} cm
- Weight: ${formData.weight || "Not specified"} kg

BODY GOAL:
- ${formData.goal || "Not specified"}

FOOD PREFERENCES:
- Chicken: ${formData.chicken || "Not specified"}
- Fish: ${formData.fish || "Not specified"}
- Eggs: ${formData.eggs || "Not specified"}
- Milk: ${formData.milk || "Not specified"}
- Paneer: ${formData.paneer || "Not specified"}
- Rice: ${formData.rice || "Not specified"}
- Roti: ${formData.roti || "Not specified"}
- Oats: ${formData.oats || "Not specified"}

LIFESTYLE & HABITS:
- Smoking: ${formData.smoking || "Not specified"}
- Alcohol: ${formData.alcohol || "Not specified"}
- Sleep: ${formData.sleep || "Not specified"}
- Stress: ${formData.stress || "Not specified"}

Create a detailed Indian diet and workout plan in table format.
`;

  return (
    <div className="card">
      <h2>Generated Prompt</h2>

      <textarea rows="22" value={prompt} readOnly />

      <button
        className="copy-btn"
        onClick={() => navigator.clipboard.writeText(prompt)}
      >
        Copy Prompt
      </button>
    </div>
  );
}

export default ResultPage;