import React, { useState, useContext } from 'react';
import { JarvisContext } from '../context/JarvisContext';

const CommandForm = () => {
  const [command, setCommand] = useState('');
  const { addCommand } = useContext(JarvisContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    let response = '';
    switch (command.toLowerCase()) {
      case 'hora':
        response = new Date().toLocaleTimeString();
        break;
      default:
        response = `Ejecutando: ${command}`;
    }
    addCommand(command, response);
    setCommand('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        placeholder="Escribí tu comando"
        required
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default CommandForm;