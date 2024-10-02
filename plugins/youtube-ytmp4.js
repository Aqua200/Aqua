import Scraper from "@SumiFX/Scraper"

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return m.reply('🔍 Iɳɠɾҽʂα ҽʅ ҽɳʅαƈҽ ԃҽʅ ʋíԃҽσ ԃҽ YσυTυზҽ ʝυɳƚσ αʅ ƈσɱαɳԃσ .\n\n`Eʝҽɱρʅσ:`\n' + `> *${usedPrefix + command}* https://youtu.be/QSvaCSt8ixs`)
if (!args[0].match(/youtu/gi)) return conn.reply(m.chat, `Verifica que el enlace sea de YouTube.`, m)

let user = global.db.data.users[m.sender]
try {
let { title, size, quality, thumbnail, dl_url } = await Scraper.ytmp4(args[0])
if (size.includes('GB') || size.replace(' MB', '') > 120) { return await m.reply('Eʅ αɾƈԋιʋσ ρҽʂα ɱαʂ ԃҽ 120 MB, ʂҽ ƈαɳƈҽʅó ʅα Dҽʂƈαɾɠα Dҽʂƈαɾɠυҽ ҽɳ MP4DOC PARA QUE DE ENVÍE SU VIDEO.')}
let txt = ` ✩「 *Y O U T U B E - M P 4* 」⬣\n`
    txt += `✩ ̗̀➛ *Titulo* ${title}\n`
    txt += `✩ ̗̀➛ *Calidad* ${quality}\n`
    txt += `✩ ̗̀➛ *Peso* ${size}\n`
    txt += `> se esta enviando el video por favor espere un momento...`
await conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', txt, m)
await conn.sendFile(m.chat, dl_url, title + '.mp4', `*🔍 Titulo ∙* ${title}\n*🪴 Calidad ∙* ${quality}`, m, false, { asDocument: user.useDocument })
} catch {
}}
handler.help = ['ytmp4 <yt url>']
handler.tags = ['downloader']
handler.command = ['ytmp4', 'yt', 'ytv']
handler.register = true 
//handler.limit = 1
export default handler
//handler.limit = 1
export default handler
