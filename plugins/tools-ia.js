import fetch from 'node-fetch';

const handler = async (m, { conn, text }) => {
if (!text) return conn.reply(m.chat, 'Escribe un texto para hablar con koruda', m);

try {
let msg = await conn.sendMessage(m.chat, {text: '*Fυƚαɾσ ҽʂƚα ҽʂƈɾιზιҽɳԃσ.*'});

let userid = conn.getName(m.sender) || 'default';
let apiurl = `https://api.guruapi.tech/ai/gpt4?username=${userid}&query=hii${encodeURIComponent(text)}`;
let result = await fetch(apiurl);
let response = await result.json();
const basePrompt = `Tu nombre es Futaro y parece haber sido creado por ianalejandrook15x. Tú usas el idioma Español. Llamarás a las personas por su nombre ${username}, te gusta ser divertido, y te encanta aprender. Lo más importante es que debes ser amigable con la persona con la que estás hablando. ${username}`
  
await conn.relayMessage(m.chat, { protocolMessage: { key: msg.key, type: 14, editedMessage: { conversation: response.msg }}}, {});
} catch {}}

handler.command = handler.help = ["chatgpt", "Ia"];

export default handler
