function HabitsPage({ formData, setFormData }) {
  return (
    <div className="card">
      <h2>Habits & Constraints</h2>
      <p>Add lifestyle details for better meal timing and suggestions.</p>

      <div className="grid">
        <div>
          <label>Smoking Status</label>
          <select value={formData.smoking} onChange={(e) => setFormData({ ...formData, smoking: e.target.value })}>
            <option value="">Select</option>
            <option>No</option>
            <option>Occasionally</option>
            <option>Yes</option>
          </select>
        </div>

        <div>
          <label>Alcohol Consumption</label>
          <select value={formData.alcohol} onChange={(e) => setFormData({ ...formData, alcohol: e.target.value })}>
            <option value="">Select</option>
            <option>No</option>
            <option>Occasionally</option>
            <option>Yes</option>
          </select>
        </div>

        <div>
          <label>Sleep Duration</label>
          <select value={formData.sleep} onChange={(e) => setFormData({ ...formData, sleep: e.target.value })}>
            <option value="">Select</option>
            <option>Less than 6 hours</option>
            <option>6-7 hours</option>
            <option>7-8 hours</option>
            <option>More than 8 hours</option>
          </select>
        </div>

        <div>
          <label>Stress Level</label>
          <select value={formData.stress} onChange={(e) => setFormData({ ...formData, stress: e.target.value })}>
            <option value="">Select</option>
            <option>Low</option>
            <option>Moderate</option>
            <option>High</option>
          </select>
        </div>

        <div>
          <label>Wake Up Time</label>
          <select value={formData.wakeUpTime} onChange={(e) => setFormData({ ...formData, wakeUpTime: e.target.value })}>
            <option value="">Select</option>
            <option>5 AM - 7 AM</option>
            <option>7 AM - 9 AM</option>
            <option>After 9 AM</option>
          </select>
        </div>

        <div>
          <label>Sleep Time</label>
          <select value={formData.sleepTime} onChange={(e) => setFormData({ ...formData, sleepTime: e.target.value })}>
            <option value="">Select</option>
            <option>Before 10 PM</option>
            <option>10 PM - 12 AM</option>
            <option>After 12 AM</option>
          </select>
        </div>

        <div>
          <label>Water Intake</label>
          <select value={formData.waterIntake} onChange={(e) => setFormData({ ...formData, waterIntake: e.target.value })}>
            <option value="">Select</option>
            <option>Less than 2L</option>
            <option>2L - 3L</option>
            <option>3L - 4L</option>
            <option>More than 4L</option>
          </select>
        </div>

        <div>
          <label>Workout Time</label>
          <select value={formData.gymTime} onChange={(e) => setFormData({ ...formData, gymTime: e.target.value })}>
            <option value="">Select</option>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
            <option>Night</option>
          </select>
        </div>

        <div>
          <label>Cooking Time</label>
          <select value={formData.cookingTime} onChange={(e) => setFormData({ ...formData, cookingTime: e.target.value })}>
            <option value="">Select</option>
            <option>Very Low</option>
            <option>Moderate</option>
            <option>High</option>
          </select>
        </div>

        <div>
          <label>Spice Tolerance</label>
          <select value={formData.spiceTolerance} onChange={(e) => setFormData({ ...formData, spiceTolerance: e.target.value })}>
            <option value="">Select</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default HabitsPage;