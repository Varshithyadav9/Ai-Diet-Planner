function HabitsPage({ formData, setFormData }) {
  return (
    <div className="card">
      <h2>Habits & Constraints</h2>

      <div className="grid">
        <div>
          <label>Smoking Status</label>
          <select
            value={formData.smoking}
            onChange={(e) =>
              setFormData({ ...formData, smoking: e.target.value })
            }
          >
            <option value="">Select</option>
            <option>No</option>
            <option>Occasionally</option>
            <option>Yes</option>
          </select>
        </div>

        <div>
          <label>Alcohol Consumption</label>
          <select
            value={formData.alcohol}
            onChange={(e) =>
              setFormData({ ...formData, alcohol: e.target.value })
            }
          >
            <option value="">Select</option>
            <option>No</option>
            <option>Occasionally</option>
            <option>Yes</option>
          </select>
        </div>

        <div>
          <label>Sleep Duration</label>
          <select
            value={formData.sleep}
            onChange={(e) =>
              setFormData({ ...formData, sleep: e.target.value })
            }
          >
            <option value="">Select</option>
            <option>Less than 6 hours</option>
            <option>6-7 hours</option>
            <option>7-8 hours</option>
            <option>More than 8 hours</option>
          </select>
        </div>

        <div>
          <label>Stress Level</label>
          <select
            value={formData.stress}
            onChange={(e) =>
              setFormData({ ...formData, stress: e.target.value })
            }
          >
            <option value="">Select</option>
            <option>Low</option>
            <option>Moderate</option>
            <option>High</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default HabitsPage;