import React from 'react';
import './components/style.css';
import SearchBar from './components/SearchBar';
function App() {
  var data = ["Lujain ", "Amal ", "Omar ", "Haya ", "Layan ", "Mohammad", "Khozama"];

  return (
    <div >
     
      <SearchBar placeholder="Enter a name" data={data} />


    </div>
  );
}

export default App;
