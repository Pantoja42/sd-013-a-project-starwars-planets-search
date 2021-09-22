import React from 'react';
import './App.css';
import PlanetProvider from './context/PlanetProvider'; // mover o provider para APP para atender o requisito 1
import Header from './components/Header/Header';
import TableManager from './components/Table/TableManager';
import NumericFilter from './components/Numeric_Filter/NumericFilter';

const App = () => (
  <PlanetProvider>
    <Header />
    <NumericFilter />
    <TableManager />

  </PlanetProvider>
);
export default App;
