import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Service = () => {
  const [bookService, setBookService] = useState(null);
  const [bookContent, setBookContent] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/books/680d1d2bba3b139a5480a9e0')
      .then(response => {
        setBookService(response.data.title);
        setBookContent(response.data.content)
      })
      .catch(error => {
        console.error('Error fetching book:', error);
      });
  }, []); 

  return (
    <div>
      <div>
        <h2>{bookService}</h2>
        <p>
          {bookContent}
        </p>
      </div>

      
    </div>
  );
};

export default Service;





/*import React from 'react'

function Service() {
  return (
    <div>Service</div>
  )
}

export default Service*/