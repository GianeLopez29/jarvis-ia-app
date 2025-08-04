import React, { useContext, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { JarvisContext } from '../context/JarvisContext';
import CommandForm from '../components/CommandForm';
import JarvisResponse from '../components/JarvisResponse';

const Console = () => {
  const { mode, setMode, history } = useContext(JarvisContext);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const m = searchParams.get('mode');
    if (m) setMode(m);
  }, [searchParams, setMode]);

  return (
    <div style={{ padding: '1rem', background: mode === 'security' ? '#300' : '#222', color: '#0f0' }}>
      <h2>Consola Jarvis ({mode})</h2>
      <CommandForm />
      {history.map((h, i) => <JarvisResponse key={i} entry={h} />)}
    </div>
  );
};

export default Console;