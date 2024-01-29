import React from 'react';

import icon from './assets/eicon.png';
import './App.css';

function App() {
  return (
    <main>
      <div className="headerBar">
        <img alt="E" src={icon} />
        <div className="socialLinks">
          <a href="https://github.com/emmajam">Github</a> · <a href="http://medium.com/@emmajam">Medium</a> · <a href="https://www.linkedin.com/in/emma-jamieson-hoare-89b23298/">LinkedIn</a>
        </div>
      </div>
      <h1>Emma Jamieson-Hoare</h1>
      <h2>Engineering Lead</h2>
      <p>
        Currently working at Wise in the Send Squad, on all things recipients and personal identifiers.
      </p>
      <h2>Experience</h2>
      <ul>
        <li><a href="https://www.wise.com">Wise</a> (November 2022 - present)</li>
        <li><a href="https://www.paxos.com">Paxos</a> (October 2020 - November 2022)</li>
        <li><a href="https://www.skyscanner.net">Skyscanner</a> (July 2018 - October 2020)</li>
        <li><a href="https://www.localz.com/">Localz</a> (August 2016 - July 2018)</li>
      </ul>
    </main>
  );
}

export default App;
