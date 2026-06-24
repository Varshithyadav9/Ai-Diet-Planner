function BasicProfile({ formData, setFormData }) {
  return (
    <div className="card">
      <h2>Basic Profile</h2>
      <p>Tell us about yourself.</p>

      <div className="grid">
        <div>
          <label>Age</label>
          <input type="number" value={formData.age} onChange={(e) => setFormData({ ...formData, age: e.target.value })} />
        </div>

        <div>
          <label>Gender</label>
          <select value={formData.gender} onChange={(e) => setFormData({ ...formData, gender: e.target.value })}>
            <option value="">Select gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div>
          <label>Height (cm)</label>
          <input type="number" value={formData.height} onChange={(e) => setFormData({ ...formData, height: e.target.value })} />
        </div>

        <div>
          <label>Current Weight (kg)</label>
          <input type="number" value={formData.weight} onChange={(e) => setFormData({ ...formData, weight: e.target.value })} />
        </div>

        <div>
          <label>Target Weight (kg)</label>
          <input type="number" value={formData.targetWeight} onChange={(e) => setFormData({ ...formData, targetWeight: e.target.value })} />
        </div>

        <div>
          <label>Plan Type</label>
          <select value={formData.planType} onChange={(e) => setFormData({ ...formData, planType: e.target.value })}>
            <option value="">Select plan type</option>
            <option>Diet Plan Only</option>
            <option>Workout Plan Only</option>
            <option>Diet + Workout Plan</option>
          </select>
        </div>

        <div>
          <label>Training Type</label>
          <select value={formData.trainingType} onChange={(e) => setFormData({ ...formData, trainingType: e.target.value })}>
            <option value="">Select training</option>
            <option>Gym / Strength Training</option>
            <option>Home Workout</option>
            <option>Cardio</option>
            <option>Sports</option>
            <option>No Training</option>
          </select>
        </div>

        <div>
          <label>Activity Level</label>
          <select value={formData.activityLevel} onChange={(e) => setFormData({ ...formData, activityLevel: e.target.value })}>
            <option value="">Select activity</option>
            <option>Sedentary</option>
            <option>Lightly Active</option>
            <option>Moderately Active</option>
            <option>Very Active</option>
          </select>
        </div>

        <div>
          <label>Meals Per Day</label>
          <select value={formData.mealsPerDay} onChange={(e) => setFormData({ ...formData, mealsPerDay: e.target.value })}>
            <option value="">Select meals</option>
            <option>3 Meals</option>
            <option>4 Meals</option>
            <option>5 Meals</option>
            <option>6 Meals</option>
          </select>
        </div>

        <div>
          <label>Daily Food Budget</label>
          <select value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })}>
            <option value="">Select budget</option>
            <option>₹100-₹200/day</option>
            <option>₹200-₹300/day</option>
            <option>₹300-₹500/day</option>
            <option>₹500+/day</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default BasicProfile;