import fs from 'fs';
const handler = (m) => m;
handler.all = async function(m) {

const chat = global.db.data.chats[m.chat];
if (chat.isBaneed) return
if (/^bot$/i.test(m.text)) {
conn.reply(m.chat, `☁ ¡Hσʅα! Sσყ Fυƚαɾσ, ҽɳ ϙυҽ ρυҽԃσ αყυԃαɾƚҽ ԋσყ?\n\n✰ Uʂα *.ɱҽɳυ* ραɾα ʋҽɾ ɱιʂ ƈσɱαɳԃσʂ.`, m, rcanal, )
}

  const chat = global.db.data.chats[m.chat];
if (chat.isBaneed) return
if (/^futaro$/i.test(m.text)) {
conn.reply(m.chat, `☁ ¡Hσʅα! Sσყ Fυƚαɾσ, ҽɳ ϙυҽ ρυҽԃσ αყυԃαɾƚҽ ԋσყ?\n\n✰ Uʂα *.ɱҽɳυ* ραɾα ʋҽɾ ɱιʂ ƈσɱαɳԃσʂ.`, m, rcanal, )
}

  const chat = global.db.data.chats[m.chat];
if (chat.isBaneed) return
if (/^ian$/i.test(m.text)) {
conn.reply(m.chat, `☁ Hσʅα, Iαɳ ҽʂ ɱι ƈɾҽαԃσɾ ʂι ϙυιҽɾҽʂ ԋαზʅαɾ ƈσɳ ҽʅ ҽʂƚҽ ҽʂ ʂυ ɳυɱҽɾσ\n\n*+5493876639332*`, m, rcanal, )
}
