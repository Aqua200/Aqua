let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;Ian;;\nFN:Ian⁩\nORG:Ian⁩\nTITLE:\nitem1.TEL;waid=5493876639332:5493876639332\nitem1.X-ABLabel:\nX-WA-BIZ-DESCRIPTION:Hσʅα ɱҽ ʅʅαɱσ Iαɳ ყ ʂσყ ԃυҽñσ ԃҽ ʅσʂ ρɾσყҽƈƚσʂ Fυƚαɾσ-Bσƚ - IαɳBσƚ-MD, ƚαɱႦιéɳ ʂσყ Mσԃҽɾαԃσɾ ԃҽ CσɾιɳPʅυʂ-Hσʂƚ 🌙\nX-WA-BIZ-NAME:Ian\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'Ian⁩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
