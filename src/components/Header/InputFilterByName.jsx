import React, { useContext } from 'react';
import PlanetContext from '../../context/PlanetContext';

const InputFilterByName = () => {
  const {
    setFilter,
    filter,
  } = useContext(PlanetContext);

  function handleOnChange({ target: { value } }) {
    const { filters: { filterByNumericValues, order } } = filter;
    setFilter({
      ...filter,
      ...{ filters: {
        filterByName: { name: value },
        filterByNumericValues,
        order,
      },
      },
    });
  }

  const { filter: { filters: { filterByName: { name } } } } = useContext(PlanetContext);
  return (
    <>
      <input
        className="header-input-search"
        type="text"
        data-testid="name-filter"
        onChange={ handleOnChange }
        value={ name }
      />
      🔍
    </>
  );
};
export default InputFilterByName;
