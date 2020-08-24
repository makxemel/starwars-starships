import React from 'react';
import CompareBlock from './components/CompareBlock/CompareBlock';
import s from './App.module.css';

function App() {
  return (
    <div>
      <div className={s.wrapper}>
        <div className={s.header}>
          <h1>STARWARS STARSHIP COMPARE</h1>
          <h2>EPISODE V</h2>
        </div>
        <CompareBlock />
      </div>
    </div>
  );
}

export default App;
