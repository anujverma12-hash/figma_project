import React, { useState } from "react";

const DriverOnboarding = () => {
  const [showForm, setShowForm] = useState(false);
  const [driver, setDriver] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleInputChange = (event) => {
    setDriver({
      ...driver,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <h1>Driver Onboarding</h1>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Cancel" : "Add Driver"}
      </button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={driver.name || ""}
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="licenseNumber">License Number:</label>
          <input
            type="text"
            id="licenseNumber"
            name="licenseNumber"
            value={driver.licenseNumber || ""}
            onChange={handleInputChange}
          />
          <br />
          <button type="submit">Save</button>
        </form>
      )}
    </div>
  );
};

export default DriverOnboarding;
