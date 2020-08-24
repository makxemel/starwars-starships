import React from 'react';
import s from './Comparator.module.css';

function Comparator({ leftShipSelected, rightShipSelected }) {
  return (
    <div className={s.compare__table}>
      <p>
        {leftShipSelected.cargo_capacity} <span>Cargo capacity</span>{' '}
        {rightShipSelected.cargo_capacity}
      </p>
      <p>
        {leftShipSelected.length} <span>Length</span> {rightShipSelected.length}
      </p>
      <p>
        {leftShipSelected.max_atmosphering_speed} <span>Max atmosphering speed</span>{' '}
        {rightShipSelected.max_atmosphering_speed}
      </p>
      <p>
        {leftShipSelected.crew} <span>Crew</span> {rightShipSelected.crew}
      </p>
      <p>
        {leftShipSelected.hyperdrive_rating} <span>Hyperdrive Rating</span>{' '}
        {rightShipSelected.hyperdrive_rating}
      </p>
      <p>
        {leftShipSelected.passengers} <span>Passengers</span> {rightShipSelected.passengers}
      </p>
      <p>
        {leftShipSelected.cost_in_credits} <span>Cost</span> {rightShipSelected.cost_in_credits}
      </p>
    </div>
  );
}

export default Comparator;
