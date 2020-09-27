import React from 'react';
import Image from "./Component/Profile/ProfilPhoto"
import Name from "./Component/Profile/FullName"
import Adress from "./Component/Profile/Address"
import './App.css';

function App() {
  return (
    <div className="app">
    <Image />
    <Name />
    <Adress/>
    </div>
  );
}

export default App;
