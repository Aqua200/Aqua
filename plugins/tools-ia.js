import fetch from 'node-fetch';

const handler = async (m, { conn, text }) => {
if (!text) return conn.reply(m.chat, 'Eʂƈɾιზҽ υɳ ƚҽxƚσ ραɾα ԋαზʅαɾ ƈσɳ Fυƚαɾσ', m);

try {
let msg = await conn.sendMessage(m.chat, {text: '*Fυƚαɾσ ҽʂƚα ҽʂƈɾιზιҽɳԃσ.*'});

let userid = conn.getName(m.sender) || 'default';
let apiurl = `https://api.guruapi.tech/ai/gpt4?username=${userid}&query=hii${encodeURIComponent(text)}`;
let result = await fetch(apiurl);
let response = await result.json();

await conn.relayMessage(m.chat, { protocolMessage: { key: msg.key, type: 14, editedMessage: { conversation: response.msg }}}, {});
} catch {}}

handler.command = handler.help = ["chatgpt", "Ia"];

export default handler
