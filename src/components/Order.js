import React, { useContext, useEffect, useState } from 'react';
import starWarsContext from '../context';

function Order() {
  const { setFilters, filters, setData, originalList } = useContext(starWarsContext);

  const [column, setColumn] = useState('population');
  const [radio, setRadio] = useState('ASC');

  function submit() {
    setFilters({ ...filters,
      order:
        {
          column,
          sort: radio,
        },
    });
    if (radio === 'ASC') {
      setData(originalList
        .sort((c, d) => c[column] - (d[column])));
    }
    if (radio === 'DESC') {
      setData(originalList
        .sort((e, f) => f[column] - (e[column])));
    }
  }

  useEffect(() => {
    if (filters.order.column === 'name') {
      setData(originalList.sort((a, b) => a.name.localeCompare(b.name)));
    }
  },
  [filters.order, originalList, setData]);

  return (
    <form>
      <select
        data-testid="column-sort"
        value={ column }
        onChange={ ({ target }) => { setColumn(target.value); } }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <label htmlFor="asc">
        <input
          data-testid="column-sort-input-asc"
          id="asc"
          type="radio"
          value="ASC"
          defaultChecked
          name="orderRadio"
          onChange={ () => { setRadio('ASC'); } }
        />
        ASC
      </label>

      <label htmlFor="desc">
        <input
          data-testid="column-sort-input-desc"
          id="desc"
          type="radio"
          value="DESC"
          name="orderRadio"
          onChange={ () => { setRadio('DESC'); } }
        />
        DESC
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ submit }
      >
        Sort
      </button>
    </form>
  );
}

export default Order;

/* Referências: Pessoa estudante Erick Santos (meu Buddy) Turma 13. Tribo A */
