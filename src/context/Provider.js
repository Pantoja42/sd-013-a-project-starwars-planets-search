import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import starWarsContext from './index';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [reserva, setReserva] = useState([]);
  const [title, setTitle] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    async function fetchData() {
      const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const fetchApi = await fetch(URL);
      const { results } = await fetchApi.json();
      results.map((item) => delete item.residents);
      setData(results);
      setReserva(results);
      setTitle(Object.keys(results[0]));
    }
    fetchData();
  }, []);

  function handleChange({ target: { value } }) {
    setName(value);
  }

  function filtro() {
    const listaFiltrada = reserva.filter((item) => item.name.includes(name));
    setData(listaFiltrada);
  }

  useEffect(filtro, [name]);

  const contextStar = {
    data,
    title,
    name,
    handleChange,
  };

  return (
    <starWarsContext.Provider value={ contextStar }>
      {children}
    </starWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
}.isRequired;

export default Provider;
