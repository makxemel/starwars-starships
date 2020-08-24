import React from 'react';
import s from './CardSelect.module.css';

function CardSelect({ ships, onChange }) {
  return (
    <div className={s.item__select}>
      <select onChange={onChange}>
        {ships.map((ship, i) => (
          <option key={`${i}_${ship.name}`}>{ship.name}</option>
        ))}
      </select>
    </div>
  );
}

export default CardSelect;
