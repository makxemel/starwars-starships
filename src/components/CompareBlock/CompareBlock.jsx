import React, { useState, useEffect } from 'react';
import axios from 'axios';

import s from './CompareBlock.module.css';
import Card from '../Card/Card';
import Comparator from '../Comparator/Comparator';

function CompareBlock() {
  const [ships, setShips] = useState([]);
  const [leftShip, setLeftShip] = useState();
  const [rightShip, setRightShip] = useState();

  useEffect(() => {
    axios
      .get('https://swapi.dev/api/films/2')
      .then(({ data }) => {
        const ships = data.starships;
        return Promise.all(ships.map((ship) => axios.get(ship).then(({ data }) => data)));
      })
      .then((data) => setShips(data));
  }, []);

  console.log(ships);

  if (!ships) {
    return 'Loading';
  }

  const leftShipSelected = ships.find((ship) => ship.name === (leftShip || ships[0].name));
  const rightShipSelected = ships.find((ship) => ship.name === (rightShip || ships[0].name));

  return (
    <div className={s.compareBlock}>
      {leftShipSelected && (
        <Card ships={ships} onChange={(e) => setLeftShip(e.target.value)} ship={leftShipSelected} />
      )}
      {leftShipSelected && rightShipSelected && (
        <Comparator leftShipSelected={leftShipSelected} rightShipSelected={rightShipSelected} />
      )}
      {leftShipSelected && (
        <Card
          ships={ships}
          onChange={(e) => setRightShip(e.target.value)}
          ship={rightShipSelected}
        />
      )}
    </div>
  );
}

export default CompareBlock;
