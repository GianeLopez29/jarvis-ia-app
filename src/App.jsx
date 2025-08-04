import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { JarvisProvider } from './context/JarvisContext';
import Home from './pages/Home';
import Console from './pages/Console';
import Header from './components/Header';

function App() {
  return (
    <JarvisProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/console" element={<Console />} />
        </Routes>
      </BrowserRouter>
    </JarvisProvider>
  );
}

export default App;