//import { getApiKey } from './apiKey.js';
import { getApiKey, setApiKey } from './apiKey.js';
//communicateWithOpenAI sugerencia nombre de funcion

export const communicateWithOpenAI = (messages) => {
   const apiKey = getApiKey();

   fetch('https://api.openai.com/v1/chat/completions', {
     method: 'POST',
     headers:{
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
     },
     body:JSON.stringify({
      "model": "gpt-4o-mini",
      "messages": messages,
      "temperature": 0.7
     })
   })
   .then(response => {
      return response.json()
   })
   .then(data =>{
      console.log(data)
   })
   .catch(error =>{
      console.log(error);
   })
};