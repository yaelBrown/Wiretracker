import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from "./Router.js"

import '../src/Assets/css/App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Router/>
      </div>
    </BrowserRouter>
  );
}

export default App;
