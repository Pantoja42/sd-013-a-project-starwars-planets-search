import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import usePlanets from '../hooks/usePlanets';

function Provider({ children }) {
  const { planets, planetsKeys, setPlanets } = usePlanets();
  const [queryValue, setQueryValue] = useState('');
  const [numFilters, setNumFilters] = useState({});
  const [allFilters, setAllFilters] = useState([]);
  const [column, setColumn] = useState('name');
  const [sort, setSort] = useState('ASC');

  const contextValue = {
    planets,
    planetsKeys,
    queryValue,
    numFilters,
    allFilters,
    column,
    sort,
    setPlanets,
    setQueryValue,
    setNumFilters,
    setAllFilters,
    setColumn,
    setSort,
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
