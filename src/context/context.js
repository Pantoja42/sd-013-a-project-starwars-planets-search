import PropTypes from 'prop-types';
import React, { useState } from 'react';
import dataContext from './createContext';

function ContextProvider({ children }) {
  const [data, setData] = useState({ data: [] });
  const [isLoading, setIsLoading] = useState({ loading: true });

  const context = {
    data,
    setData,
    setIsLoading,
    isLoading,
  };

  return (
    <dataContext.Provider value={ context }>
      {children}
    </dataContext.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default ContextProvider;
