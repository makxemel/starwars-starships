import React from 'react';
import s from './Card.module.css';
import CardSelect from '../CardSelect/CardSelect';
import CardSpec from '../CardSpec/CardSpec';

function Card({ ships, ship, onChange }) {
  return (
    <div className={s.card}>
      <CardSelect ships={ships} onChange={onChange} />
      <CardSpec ship={ship} />
    </div>
  );
}

export default Card;
