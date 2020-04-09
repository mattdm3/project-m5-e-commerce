import React, { useState, useEffect } from 'react';
import HomePage from '../HomePage';
import GlobalStyles from '../GlobalStyles';
import Navbar from '../Navbar';

function App() {
  const [bacon, setBacon] = useState(null);

  useEffect(() => {
    fetch('/bacon')
      .then(res => res.json())
      .then(data => setBacon(data));
  }, []);

  return (
    <div>
      <GlobalStyles />
      <Navbar />
      <HomePage />
      {bacon ? bacon : `...where's my stuff?...`}

    </div>
  )
}
export default App;
