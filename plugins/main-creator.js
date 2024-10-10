let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;𝘯𝘦𝘺𝘬𝘰𝘰𝘳𝘹𝘮𝘯🌸;;\nFN:𝘯𝘦𝘺𝘬𝘰𝘰𝘳𝘹𝘮𝘯🌸\nORG:𝘯𝘦𝘺𝘬𝘰𝘰𝘳𝘹𝘮𝘯🌸\nTITLE:\nitem1.TEL;waid=5491151577322:5491151577322\nitem1.X-ABLabel:\nX-WA-BIZ-DESCRIPTION:𝘩𝘰𝘭𝘢 𝘮𝘦 𝘭𝘭𝘢𝘮𝘰 𝘯𝘦𝘺𝘬𝘰𝘰𝘳 𝘴𝘰𝘺 𝘦𝘭 𝘥𝘶𝘦𝘯̃𝘰 𝘥𝘦𝘭 𝘱𝘳𝘰𝘺𝘦𝘤𝘵𝘰 𝘻𝘢𝘧𝘪𝘳𝘰-𝘣𝘰𝘵🌸- 𝘇𝗮𝗳𝗶𝗿𝗼 -𝗠𝗗, 🌸𝘵𝘢𝘮𝘣𝘪𝘦́𝘯 𝘴𝘰𝘺 𝘶𝘯 𝘢𝘥𝘮𝘪𝘯𝘪𝘴𝘵𝘳𝘢𝘥𝘰𝘳 𝘥𝘦 𝘶𝘯 𝘨𝘳𝘶𝘱𝘰🌸-𝘩𝘰𝘭𝘢 🌙\nX-WA-BIZ-NAME:Ian\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'Ian⁩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
