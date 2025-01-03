import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import Deneme from './components/deneme.tsx';



export default function App() {
  return (
    <Router>
    <Header />
    <Deneme />
   
  </Router>
  )
}