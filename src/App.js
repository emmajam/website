import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <h1>Emma Jamieson-Hoare</h1>
      <h2>Front End Engineer</h2>
      <ul>
        <li><a href="https://www.skyscanner.net">Skyscanner</a> (July 2018 - present)</li>
        <li><a href="https://www.localz.com/">Localz</a> (August 2016 - July 2018)</li>
      </ul>
      <br />
    </main>
  );
}

export default App;
