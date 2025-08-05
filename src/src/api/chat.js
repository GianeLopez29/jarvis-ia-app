import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  const { messages } = req.body;
  const formatted = messages.map(m => ({
    role: m.sender === 'user' ? 'user' : 'assistant',
    content: m.text
  }));
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'system', content: 'Eres Jarvis, un asistente inteligente.' }, ...formatted]
  });
  const reply = response.choices[0].message.content;
  res.json({ reply });
}