import React, { useContext } from 'react';
import StarWarsContext from '../context/StartWarsContext';

function PlanetTable() {
  const dataPlanet = useContext(StarWarsContext);

  console.log(dataPlanet);

  function montaTabela() {
    return dataPlanet.map((planet, index) => (
      <tr key={ index }>
        <td>{planet.name}</td>
        <td>{planet.rotation_period}</td>
        <td>{planet.orbital_period}</td>
        <td>{planet.diameter}</td>
        <td>{planet.climate}</td>
        <td>{planet.gravity}</td>
        <td>{planet.terrain}</td>
        <td>{planet.surface_water}</td>
        <td>{planet.population}</td>
        <td>
          <ol>
            {
              planet.films.map((film) => (<li key={ film }>{film}</li>))
            }
          </ol>
        </td>
        <td>{planet.created}</td>
        <td>{planet.edited}</td>
        <td>{planet.url}</td>
      </tr>
    ));
  }

  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Rotation Period</th>
        <th>Orbital Period</th>
        <th>Diameter</th>
        <th>Climate</th>
        <th>Gravity</th>
        <th>Terrain</th>
        <th>Surface Water</th>
        <th>Population</th>
        <th>Films</th>
        <th>Created</th>
        <th>Edited</th>
        <th>Url</th>
      </tr>
      {montaTabela()}
    </table>
  );
}

export default PlanetTable;
