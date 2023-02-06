import React, { useState } from 'react';

function AddDriverForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [photo, setPhoto] = useState('');

  function handleSubmit(e) {
        e.preventDefault();
        const handleSubmit = (event) => {
            event.preventDefault();
            fetch("https://your-api-endpoint.com/drivers", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(driver),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
              })
              .catch((error) => {
                console.error("Error:", error);
              });
          };
          
    }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="first-name">First Name:</label>
      <input
        type="text"
        id="first-name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <br />
      <label htmlFor="last-name">Last Name:</label>
      <input
        type="text"
        id="last-name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <br />
      <label htmlFor="gender">Gender:</label>
      <input
        type="text"
        id="gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      />
      <br />
      <label htmlFor="dob">Date of Birth:</label>
      <input
        type="text"
        id="dob"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
      <br />
      <label htmlFor="photo">Add Photo:</label>
      <input
        type="file"
        id="photo"
        onChange={(e) => setPhoto(e.target.files[0])}
      />
      <br />
      <button type="submit">Add Driver</button>
    </form>
  );
}

export default AddDriverForm;