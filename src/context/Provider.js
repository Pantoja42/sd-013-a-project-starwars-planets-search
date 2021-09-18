import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import usePlanets from '../hooks/usePlanets';

function Provider({ children }) {
  const { planets, planetsKeys, setPlanets } = usePlanets();
  const [queryValue, setQueryValue] = useState('');
  const [numFilters, setNumFilters] = useState([]);

  const contextValue = {
    planets,
    planetsKeys,
    queryValue,
    numFilters,
    setPlanets,
    setQueryValue,
    setNumFilters,
  };

  return (
    <MyContext.Provider value={ contextValue } displayName="Context Display Name">
      { children }
    </MyContext.Provider>
  );
}

const { arrayOf } = PropTypes;

Provider.propTypes = {
  children: arrayOf,
}.isRequired;

export default Provider;
