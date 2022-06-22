import React from 'react';
import Sorting from './components/Sorting';
import Mapping from './components/Mapping';
import Filtering from './components/Filtering';

function App() {
  var data = ["Lujain ", "Amal ", "Omar ", "Haya ", "Layan ", "Mohammad", "Khozama"];

  return (
    <div >
      <Sorting />
      <Mapping />
      <Filtering />

     
    </div>
  );
}

export default App;
