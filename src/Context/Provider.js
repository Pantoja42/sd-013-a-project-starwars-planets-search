import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

const Provider = ({ children }) => {
  const [state, setState] = useState([]);
  console.log(state);
  const [data, setData] = useState([]);
  const [heads, setHeads] = useState([]);
  const [filters, setFilters] = useState('');

  const handleChange = ({ target: { value } }) => {
    setFilters(value);
  };

  const contextValue = {
    data,
    heads,
    filters,
    setFilters,
    handleChange,
  };

  // const filterInput = () => {
  //   const filterList = state.filter((item) => item.filters.includes(filters));
  //   setData(filterList);
  // };

  // useEffect(filterInput, [filters]);

  useEffect(() => {
    function fechtApi() {
      fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((response) => {
          response.json().then((res) => {
            const planetsData = res.results;
            // console.log(planetsData);
            const planets = planetsData.map((planeta) => {
              const planetOffResidents = planeta;
              delete planetOffResidents.residents;
              return planetOffResidents;
            });
            setData(planets);
            setState(planets); // criei este estado para fazer o filter no input
            console.log(planets);
            const keys = Object.keys(planets[0]);
            // console.log(keys);
            setHeads(keys);
          });
        });
    }
    fechtApi();
  }, []);

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
