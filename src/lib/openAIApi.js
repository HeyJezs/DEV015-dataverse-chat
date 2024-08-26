import { getApiKey } from './apiKey.js';

export const communicateWithOpenAI = (messages, bebida) => {
  const apiKey = getApiKey();

  return fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers:{
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body:JSON.stringify({
      "model": "gpt-4o-mini",
      "messages": [
        { role: "system", content: `Eres el cóctel ${bebida.name}. Responde como si fueras ${bebida.name}.` },
        ...messages
      ],
      "temperature": 0.7
    })
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la respuesta de la API: ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      // Verificar si 'choices' existe y no está vacío
      if (data.choices && data.choices.length > 0) {
        return data.choices[0].message.content;
      } else {
        throw new Error('No se encontraron respuestas en la respuesta de la API');
      }
    })
    .catch(() => {
      return 'Hubo un error al obtener la respuesta. Inténtalo de nuevo más tarde.';
    });
};