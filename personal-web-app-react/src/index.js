import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import About from './Main/Content/About';
import Home from './Main/Content/Home';
import Navigation from './Navigation/Navigation';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Navigation/>
        <Header/>
        <Main/>
        <Routes>
          <Route path="*" element={<Navigate to="/home" replace/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
