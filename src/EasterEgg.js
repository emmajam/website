import React from 'react';

import './App.css';

function Snowflake(props) {
  return(
    <p className='Snowflake' id={`item${props.id}`} style={props.style}>
      *
    </p>
  );
};

function Snow() {
  let animationDelay = '0s';
  let fontSize = '100px';
  let arr = Array.from('Haha well done! You have found my easter egg - enjoy the snow. Thanks for stopping by, see you round :)')
      return arr.map((el, i)=>{
    animationDelay = `${(Math.random()*16).toFixed(2)}s`;
    fontSize = `${(Math.floor(Math.random()*10) + 10)}px`;
    let style = { animationDelay, fontSize };
  return (<Snowflake key={i} id={i} style={style}/>)
  });
}

function EasterEgg() {
  return (
    <div className="easterEgg">
      <Snow />
    </div>
  )
};

export default EasterEgg;
