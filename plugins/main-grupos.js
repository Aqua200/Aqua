import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {
let img = await (await fetch(`https://i.ibb.co/jGsgr5M/file.jpg`)).buffer()
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let txt = `🌙 Ｈ Ｏ Ｌ Ａ 🌙

1-Gɾυρσ
Fυƚαɾσ x Gɾυρσʂ
*✰* ${group}

*─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ*

➠ Sι ҽʅ ҽɳʅαƈҽ ɳσ ϝυɳƈισɳα ҽɳƚɾҽ αϙυι⬃

2.-Cαɳαʅ :
Tҽαɱ Cԋαɳɳҽʅ Fυƚαɾσ 🌙
*✰* ${canal}

> ${textbot}`
await conn.sendFile(m.chat, img, "Thumbnail.jpg", txt, m, null, rcanal)
}
handler.help = ['grupos']
handler.tags = ['main']
handler.command = /^(grupos)$/i
export default handler
