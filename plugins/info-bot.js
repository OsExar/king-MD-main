import util from 'util'
import path from 'path'
import fs from 'fs'
let handler = async (m, { conn}) => {
await conn.sendMessage(m.chat, { react: { text: 'β¨', key: m.key } })
let pp = './Menu2.jpg'
let name = conn.getName(m.sender)
const estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) },
message: { 
orderMessage: { itemCount : 69, status: 1, surface : 1, message: 'πΏπππΆππππ­ππ', orderTitle: 'Bang', thumbnail: fs.readFileSync('./Menu2.jpg'), sellerJid: '0@s.whatsapp.net'    
}}}
let fgac = [ pp, "exar"]
let nfg = fgac[Math.floor(Math.random() * fgac.length)] 

conn.sendHydrated(m.chat, `\nππ’ππ πππ¬ *${name}* \n\n*π‘ππππ¦ππ§ππ¦ ππ¬π¨ππ?* `, wm, null, 'https://instagram.com/unptoadrih15?igshid=YmMyMTA2M2Y=', 'Sigueme en Instagram', null, null, [ 
      ['β¦β° Menu', '.help'],
      ['β¦β° MenuAudios', '.menuaudios'],
    ], m)
// conn.sendFile(m.chat, null, null, m, null, true, {
// type: 'audioMessage', 
// ptt: true
// })
}
handler.customPrefix = /^(bot|robot)$/i
handler.command = new RegExp
export default handler
