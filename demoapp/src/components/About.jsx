import React, { useState, useEffect } from 'react';
import axios from 'axios';

const About = () => {
  const [bookTitle, setBookTitle] = useState(null);
  const [bookContent, setBookContent] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/books/680d1cdaba3b139a5480a9de')
      .then(response => {
        setBookTitle(response.data.title);
        setBookContent(response.data.content)
      })
      .catch(error => {
        console.error('Error fetching book:', error);
      });
  }, []); 

  return (
    <div>
      <div>
        <h2>{bookTitle}</h2>
        <p>
          {bookContent}
        </p>
      </div>

      
    </div>
  );
};

export default About;


