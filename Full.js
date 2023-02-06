import React, { useState } from 'react';

function DriverOnboarding() {
  const [drivers, setDrivers] = useState([]);
  const [driver, setDriver] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    age: '',
    mobileNumber: '',
    dob: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    setDriver({
      ...driver,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let err = {};
    if (!driver.firstName) {
      err.firstName = 'First Name is required';
    }
    if (!driver.lastName) {
      err.lastName = 'Last Name is required';
    }
    if (!driver.age) {
      err.age = 'Age is required';
    }
    if (!driver.mobileNumber) {
      err.mobileNumber = 'Mobile Number is required';
    }
    if (!driver.dob) {
      err.dob = 'Date of Birth is required';
    } else {
      const today = new Date();
      const dob = new Date(driver.dob);
      if (today.getFullYear() - dob.getFullYear() < 18) {
        err.dob = 'Driver should be at least 18 years old';
      }
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
      setDrivers([
        ...drivers,
        {
          ...driver,
          status: 'Pending'
        }
      ]);
      setDriver({
        firstName: '',
        middleName: '',
        lastName: '',
        age: '',
        mobileNumber: '',
        dob: ''
      });
    }
  };

  const handleViewDriver = (index) => {
    // code to view driver details
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={driver.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName}</span>}
        </div>
        <div>
          <label htmlFor="middleName">Middle Name:</label>
          <input
            type="text"
            name="middleName"
            value={driver.middleName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={driver.lastName}
            onChange={handleChange}
            />
        </div>
      </form>
     </div>
  )}
