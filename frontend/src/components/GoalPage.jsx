function GoalPage({ formData, setFormData }) {
  const goals = [
    {
      title: "Fat Loss (Cutting)",
      text: "Focuses on reducing body fat while preserving muscle.",
    },
    {
      title: "Muscle Gain (Bulking)",
      text: "Focuses on gaining muscle with controlled weight gain.",
    },
    {
      title: "Recomposition",
      text: "Fat loss and muscle gain together. Best for beginners.",
    },
    {
      title: "Maintenance",
      text: "Maintain body composition and improve consistency.",
    },
  ];

  return (
    <div className="card">
      <h2>Body Goal</h2>
      <p>Select one goal that best matches your current focus.</p>

      <div className="goal-grid">
        {goals.map((goal) => (
          <div
            key={goal.title}
            className={
              formData.goal === goal.title ? "goal selected" : "goal"
            }
            onClick={() =>
              setFormData({ ...formData, goal: goal.title })
            }
          >
            <h3>{goal.title}</h3>
            <p>{goal.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GoalPage;