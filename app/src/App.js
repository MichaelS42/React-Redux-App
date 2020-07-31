import React from 'react';
import './App.css';
import CatSearch from "./components/CatSearch";
import FactList from './components/FactList';


function App() {
  return (
    <div className="App">
     <h1> cat facts</h1>
     <CatSearch />
     <FactList />
    </div>
  );
}

export default App;
