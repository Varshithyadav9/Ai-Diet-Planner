function BasicProfile({ formData, setFormData }) {
  return (
    <div className="card">
      <h2>Basic Profile</h2>

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
            placeholder="Enter height"
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
            placeholder="Enter weight"
            value={formData.weight}
            onChange={(e) =>
              setFormData({ ...formData, weight: e.target.value })
            }
          />
        </div>
      </div>
    </div>
  );
}

export default BasicProfile;