import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
//import moment from 'moment-timezone' 

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─* 

global.owner = [
  ['573026896434', '𝘻𝘢𝘧𝘪𝘳𝘰🌙', true],
  ['573026896434', '𝘻𝘢𝘧𝘪𝘳𝘰🌙', true],
  [''],
  [''],
  [''],
  [''],
  [''],
  [''],
  [''],
  ['']

]


//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.mods = []
global.prems = []
   
//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packname = `aqua beta`
global.author = '{\n "𝘻𝘢𝘧𝘪𝘳𝘰": {\n   "ηαмє": "𝘡𝘢𝘧𝘪𝘳𝘰🌙",\n     "αυтσя": "𝘡𝘢𝘧𝘪𝘳𝘰🌙",\n   "єѕтα∂σ": "α¢тινσ"\n }\n}'
global.wait = '𝘦𝘴𝘱𝘦𝘳𝘦 𝘶𝘯 𝘮𝘰𝘮𝘦𝘯𝘵𝘰 𝘴𝘰𝘺 𝘭𝘦𝘯𝘵𝘢❤️....'
global.botname = '𝘻𝘢𝘧𝘪𝘳𝘰🌙-bot'
global.textbot = `𝘻𝘢𝘧𝘪𝘳𝘰🌙-вσт`
global.listo = '*𝘵𝘦𝘯 𝘯𝘰 𝘦𝘴 𝘮𝘶𝘤𝘩𝘰 𝘗𝘦𝘳𝘰 𝘴𝘢𝘣𝘦𝘴 𝘦𝘴 𝘢𝘭𝘨𝘰 :3💜*'
global.namechannel = '𝘡𝘢𝘧𝘪𝘳𝘰🌙- 𝘉𝘺 𝘯𝘦𝘺𝘬𝘰𝘰𝘳💜'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.catalogo = fs.readFileSync('./storage/img/catalogo.jpg')
global.miniurl = fs.readFileSync('./storage/img/miniurl.jpg')

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.group = 'https://chat.whatsapp.com/EHhI84dKglOIqQcaRKsKOU'
global.canal = 'https://whatsapp.com/channel/0029VarsCsD545unQ5Lw7429'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "543876639332-120363323005076239@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: botname, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
//global.moment = moment	

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
