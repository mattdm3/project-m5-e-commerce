import React, { useState, useEffect } from 'react';
import HomePage from '../HomePage';
import GlobalStyles from '../GlobalStyles'

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
      <HomePage />
      {bacon ? bacon : `...where's my stuff?...`}

    </div>
  )
}
export default App;
