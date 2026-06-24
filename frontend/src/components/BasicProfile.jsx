function BasicProfile({ formData, setFormData }) {
  return (
    <div className="card">
      <h2>Basic Profile</h2>
      <p>Tell us about yourself</p>

      <div className="grid">
        <div>
          <label>Age (years)</label>
          <input
            type="number"
            placeholder="Enter age (10-80)"
            value={formData.age}
            onChange={(e) =>
              setFormData({ ...formData, age: e.target.value })
            }
          />
        </div>

        <div>
          <label>Gender</label>
          <select
            value={formData.gender}
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
          >
            <option value="">Select gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div>
          <label>Height (cm)</label>
          <input
            type="number"
            placeholder="Enter height (50-275 cm)"
            value={formData.height}
            onChange={(e) =>
              setFormData({ ...formData, height: e.target.value })
            }
          />
        </div>

        <div>
          <label>Current Body Weight (kg)</label>
          <input
            type="number"
            placeholder="Enter weight (30-250 kg)"
            value={formData.weight}
            onChange={(e) =>
              setFormData({ ...formData, weight: e.target.value })
            }
          />
        </div>

        <div>
          <label>Primary Training Type</label>
          <select
            value={formData.trainingType}
            onChange={(e) =>
              setFormData({ ...formData, trainingType: e.target.value })
            }
          >
            <option value="">Select training type</option>
            <option>Gym / Strength Training</option>
            <option>Home Workout</option>
            <option>Cardio / Running</option>
            <option>Sports</option>
            <option>No Training</option>
          </select>
        </div>

        <div>
          <label>Activity Level</label>
          <select
            value={formData.activityLevel}
            onChange={(e) =>
              setFormData({ ...formData, activityLevel: e.target.value })
            }
          >
            <option value="">Select activity level</option>
            <option>Sedentary</option>
            <option>Lightly Active</option>
            <option>Moderately Active</option>
            <option>Very Active</option>
          </select>
        </div>

        <div>
          <label>Meals Per Day</label>
          <select
            value={formData.mealsPerDay}
            onChange={(e) =>
              setFormData({ ...formData, mealsPerDay: e.target.value })
            }
          >
            <option value="">Select meals per day</option>
            <option>3 Meals</option>
            <option>4 Meals</option>
            <option>5 Meals</option>
            <option>6 Meals</option>
          </select>
        </div>

        <div>
          <label>Daily Food Budget</label>
          <select
            value={formData.budget}
            onChange={(e) =>
              setFormData({ ...formData, budget: e.target.value })
            }
          >
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