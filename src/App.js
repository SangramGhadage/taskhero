import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import TaskHero from './Component/taskHero';
import Faq from './Component/faq';


function App() {
  return (
    <div className="App">
      <Fragment>
        <Routes>
     
          <Route exact path="/" element={<TaskHero/>} />
          <Route exact path="/Faq" element={<Faq/>} />
        </Routes>
      </Fragment>
    </div>
  );
}

export default App;
