import React from 'react';
import s from './CardSpec.module.css';

function CardSpec({ ship }) {
  return (
    <div className={s.item__spec}>
      <p>Name: {ship.name}</p>
      <p>Model: {ship.model}</p>
      <p>Manufacturer: {ship.manufacturer}</p>
      <p>Cost: {ship.cost_in_credits}</p>
      <p>Length: {ship.length}</p>
      <p>Max speed: {ship.max_atmosphering_speed}</p>
      <p>Crew: {ship.crew}</p>
      <p>Passengers: {ship.passengers}</p>
      <p>Cargo capacity: {ship.cargo_capacity}</p>
      <p>Hyperdrive rating: {ship.hyperdrive_rating}</p>
    </div>
  );
}

export default CardSpec;
