import React from 'react';
import { BrowserRouter } from 'react-router-dom';


import './App.css';
import StudentsManager from './containers/StudentsManager/StudentsManager';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <StudentsManager />

      </div>
    </BrowserRouter>
  );
}

export default App;
