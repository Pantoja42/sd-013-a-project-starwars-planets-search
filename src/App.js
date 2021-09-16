import React from 'react';
import StarWarsPlanetsTable from './components/StarWarsPlanetsTable';
import StarWarsPlanetsProvider from './context/StarWarsPlanetsProvider';

function App() {
  return (
    <div>
      <StarWarsPlanetsProvider>
        <StarWarsPlanetsTable />
      </StarWarsPlanetsProvider>
    </div>
  );
}

export default App;
