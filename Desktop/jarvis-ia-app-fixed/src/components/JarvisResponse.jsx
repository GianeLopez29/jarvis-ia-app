import React from 'react';

const JarvisResponse = ({ entry }) => (
  <div style={{ marginBottom: '0.5rem' }}>
    <strong>&gt; {entry.command}</strong>
    <div>{entry.response}</div>
  </div>
);

export default JarvisResponse;