import logo from './logo.svg';
import './App.css';
import Home from 'pages/home';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
const LazySmeagolmap = React.lazy(() => import("pages/smeagolmap"));
const LazyLords = React.lazy(() => import("pages/lords"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="map" element={<React.Suspense fallback="Loading..."><LazySmeagolmap /></React.Suspense>} />
      <Route path="lords" element={<React.Suspense fallback="Loading..."><LazyLords /></React.Suspense>} />
    </Routes>
  );
}

export default App;
