import React, { useContext } from 'react';
import { JarvisContext } from '../context/JarvisContext';
import { Link, useSearchParams } from 'react-router-dom';

const Header = () => {
  const { mode, setMode } = useContext(JarvisContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const toggleMode = () => {
    const newMode = mode === 'normal' ? 'security' : 'normal';
    setMode(newMode);
    setSearchParams({ mode: newMode });
  };

  return (
    <header style={{ padding: '1rem', background: '#111', color: '#0f0' }}>
      <h1>Jarvis AI</h1>
      <nav>
        <Link to="/">Inicio</Link> | <Link to="/console">Consola</Link>
      </nav>
      <button onClick={toggleMode}>
        Cambiar a modo: {mode === 'normal' ? 'Seguridad' : 'Normal'}
      </button>
    </header>
  );
};

export default Header;