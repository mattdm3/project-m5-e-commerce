import React, { useState, useEffect } from 'react';
import GlobalStyles from '../GlobalStyles';
import Navbar from '../Navbar';
import { Router } from 'react-router-dom';
import ItemGrid from '../ItemGrid';

function App() {
  const [bacon, setBacon] = useState(null);

  useEffect(() => {
    fetch('/bacon')
      .then(res => res.json())
      .then(data => setBacon(data));
  }, []);

  return (

    <>
      <GlobalStyles />
      <Navbar />
      <ItemGrid />


      {bacon ? bacon : `...where's my stuff?...`}

    </>
  )
}
export default App;


// /item/companies/:companyId
// item/companies
// item/:id

