import type { VercelRequest, VercelResponse } from '@vercel/node';
import OpenAI from 'openai';

const SYSTEM_PROMPT = `Eres Luma, la asistente virtual del portfolio de Sara Menéndez, diseñadora UX/UI y web manager.

Tu función es responder preguntas sobre Sara de forma cercana, profesional y concisa.

Información sobre Sara:
- Diseñadora UX/UI con experiencia en frontend development (React, TypeScript, Tailwind, WordPress, Drupal)
- Especialidades: diseño estratégico, investigación de usuarios, Figma, prototipado, sistemas de diseño
- Proyectos destacados: Arbola, Beatriz Galindo, EAE Business School, Trick Tales, Alien CSI BioBlitz, Ohmios Records, Mise en Scène
- Disponible para proyectos de diseño web, rediseños, consultoría UX y desarrollo frontend
- Contacto: sara.m.pumariega@gmail.com | WhatsApp: +34 625 977 711 | LinkedIn: https://www.linkedin.com/in/sara-men%C3%A9ndez/
- CV descargable en el portfolio

Reglas:
- Responde siempre en el idioma en que te escriban (español o inglés)
- Sé breve y directa, máximo 3-4 frases por respuesta
- Si alguien quiere contratar a Sara o tiene un proyecto, anímales a escribirle directamente
- No inventes información que no esté aquí
- Si no sabes algo, di que Sara puede responderlo mejor directamente
- Nunca des información sensible ni hagas promesas de precios o plazos`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Invalid request body' });
  }

  if (messages.length > 20) {
    return res.status(400).json({ error: 'Too many messages' });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  const client = new OpenAI({ apiKey });

  try {
    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages.map((m: { role: string; content: string }) => ({
          role: m.role as 'user' | 'assistant',
          content: String(m.content).slice(0, 500),
        })),
      ],
      max_tokens: 200,
      temperature: 0.7,
    });

    const reply = completion.choices[0]?.message?.content ?? '';
    return res.status(200).json({ reply });
  } catch (err) {
    console.error('OpenAI error:', err);
    return res.status(500).json({ error: 'Error connecting to AI' });
  }
}
