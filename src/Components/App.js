// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route, Switch, Link} from 'react-router-dom';
import Home from './Home';
import Counter from './Counter';
import Layout from './Layout';

function App() {
  return (

    <BrowserRouter>
      <React.Suspense fallback = {<p>Loading</p>}>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='home' element={<Home/>} />
            <Route path='counter' element={<Counter/>} />
          </Route>
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
