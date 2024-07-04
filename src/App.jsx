import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";

import "./App.css";

function App() {
  return (
    
    <main className="outer-container">
      <div className={`header-bg`}></div>
      <div className="inner-container">
        <Header/>
        <Card/>
      </div>
    </main>
   
  );
}

export default App;