import React, { useState } from 'react';
import axios from 'axios';

const Userform = () => {
  const initialData = {
    username: '',
    email: '',
    address: '',
    phone: '',
  };

  const [userData, setUserData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', userData);

    axios
      .post('http://localhost:3000/users/', userData)
      .then((response) => console.log('User created:', response.data))
      .catch((error) => console.error('Error submitting form:', error));
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f2f5',
    }}>
      <form
        onSubmit={handleSubmit}
        style={{
          width: '100%',
          maxWidth: '400px',
          padding: '20px',
          backgroundColor: '#fff',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          borderRadius: '10px',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>User Form</h2>

        <div style={{ marginBottom: '15px' }}>
          <label>User Name:</label><br />
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Password:</label><br />
          <input
            type="text"
            name="address"
            value={userData.address}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Phone:</label><br />
          <input
            type="tel"
            name="phone"
            value={userData.phone}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px' }}
          />
        </div>

        <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: 'black', color: 'white', border: 'none', borderRadius: '5px' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Userform;
