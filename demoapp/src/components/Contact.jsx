import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Contact = () => {
  const [bookContact, setBookContact] = useState(null);
  const [bookContent, setBookContent] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/books/680d1d2bba3b139a5480a9e0')
      .then(response => {
        setBookContact(response.data.title);
        setBookContent(response.data.content)
      })
      .catch(error => {
        console.error('Error fetching book:', error);
      });
  }, []); 

  return (
    <div>
      <div>
        <h2>{bookContact}</h2>
        <p>
          {bookContent}
        </p>
      </div>

      
    </div>
  );
};

export default Contact;
