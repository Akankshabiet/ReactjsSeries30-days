// import React, { useState } from 'react';
import axios from 'axios';
import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router';

import { useNavigate } from 'react-router-dom';

const UpdateUser = () => {


  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState('');

  useEffect(() => {
    
    axios.get(`http://localhost:3000/users/${id}`).then((res) => {

      console.log(res);
      
      setFormData(res.data);
      
    }).catch((err) => {
      console.log(err);
    })
  },[])

 
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
 
    axios.put(`http://localhost:3000/users/${id}`, formData).then((res) => {
      setFormData(res.data);
      navigate('/List');
    }).catch((error) => {
 
      console.log(error);
    });
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', userData);

  //    axios.post('http://localhost:3000/users/', userData)
  //      .then(response => console.log('User created:', response.data))
  //      .catch(error => console.error('Error submitting form:', error));
  // };
  return (
    <div style={{ maxWidth: '400px', margin: '50px auto' }}>
      <h2>Update User Form</h2>
      
     <form  onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label>User Name:</label><br />
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Email:</label><br />
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Address:</label><br />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Phone:</label><br />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateUser;
