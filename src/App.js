import React from 'react';
import Table from './components/Table';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <main>
        <Table />
      </main>
    </Provider>
  );
}

export default App;
