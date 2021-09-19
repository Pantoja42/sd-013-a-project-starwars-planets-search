import React from 'react';
import './App.css';
import Filters from './components/Filters';
import Table from './components/Table';
import { Provider } from './context/PlanetProvider';

function App() {
  return (
    <Provider>
      <Filters />
      <Table />
    </Provider>
  );
}

export default App;
