import { useState } from 'react';
import styles from './ChatBot.module.css';

export function ChatBot() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hola, soy Jarvis. ¿En qué puedo ayudarte?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMsg] })
      });
      const data = await res.json();
      setMessages(prev => [...prev, { sender: 'bot', text: data.reply }]);
    } catch {
      setMessages(prev => [...prev, { sender: 'bot', text: 'Error al conversar con la IA.' }]);
    }
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.chatBox}>
        {messages.map((m,i) => (
          <div key={i} className={m.sender === 'user' ? styles.user : styles.bot}>
            {m.text}
          </div>
        ))}
        {loading && <div className={styles.bot}>Jarvis está escribiendo...</div>}
      </div>
      <div className={styles.inputBox}>
        <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key==='Enter' && handleSend()} placeholder="Escribe tu mensaje..." />
        <button onClick={handleSend}>Enviar</button>
      </div>
    </div>
  );
}
