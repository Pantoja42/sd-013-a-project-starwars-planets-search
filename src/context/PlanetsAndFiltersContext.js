import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const PlanetsAndFiltersContext = createContext();

// Context refatorado com a ajuda do colega Murilo Rainho e do monitor João Lima (Turma 11)
export const PlanetsProvider = ({ children }) => {
  const [planets, getPlanets] = useState([]);
  const [loading, isLoading] = useState(true);
  const [searchTerm, makeSearch] = useState();
  const [columnFilter, setColumn] = useState('population');
  const [comparisonFilter, setComparison] = useState('maior que');
  const [valueFilter, setValue] = useState('');
  const [columnValue, getColumnValue] = useState('population');
  const [comparisonValue, getComparisonValue] = useState('maior que');
  const [numericValue, getNumericValue] = useState('');
  const [filtersUsed, getFiltersUsed] = useState([]);
  const [planetsWithFilters, setFilteredPlanets] = useState(planets);

  const context = {
    planets,
    filters:
    {
      filterByName: {
        name: searchTerm,
      },
      filterByNumericValues: [
        {
          column: columnFilter,
          comparison: comparisonFilter,
          value: valueFilter,
        },
      ],
    },
    setStates: {
      getPlanets,
      isLoading,
      makeSearch,
      setColumn,
      setComparison,
      setValue,
      getColumnValue,
      getComparisonValue,
      getNumericValue,
      getFiltersUsed,
      setFilteredPlanets },
    loading,
    filtersValue: {
      columnValue,
      comparisonValue,
      numericValue,
    },
    filtersUsed,
    planetsWithFilters,
  };

  useEffect(() => {
    const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

    fetch(URL)
      .then((resolve) => resolve.json())
      .then((json) => {
        getPlanets(json.results);
        setFilteredPlanets(json.results);
        isLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <PlanetsAndFiltersContext.Provider value={ context }>
      {children}
    </PlanetsAndFiltersContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};
