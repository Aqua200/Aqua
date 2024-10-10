let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;ιαɳαʅҽʝαɳԃɾσσƙ15x;;\nFN:ιαɳαʅҽʝαɳԃɾσσƙ15x⁩\nORG:ιαɳαʅҽʝαɳԃɾσσƙ15x\nTITLE:\nitem1.TEL;waid=5491151577322:5491151577322\nitem1.X-ABLabel:\nX-WA-BIZ-DESCRIPTION:𝘩𝘰𝘭𝘢 𝘮𝘦 𝘭𝘭𝘢𝘮𝘰 𝘯𝘦𝘺𝘬𝘰𝘰𝘳 𝘴𝘰𝘺 𝘦𝘭 𝘥𝘶𝘦𝘯̃𝘰 𝘥𝘦𝘭 𝘱𝘳𝘰𝘺𝘦𝘤𝘵𝘰 𝘻𝘢𝘧𝘪𝘳𝘰-𝘣𝘰𝘵🌸- IαɳBσƚ-MD, ƚαɱႦιéɳ ʂσყ Mσԃҽɾαԃσɾ ԃҽ CσɾιɳPʅυʂ-Hσʂƚ 🌙\nX-WA-BIZ-NAME:Ian\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'Ian⁩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
