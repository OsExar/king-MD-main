const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let username = await conn.getName(m.sender)
let str = `
*ใ๐ ๐๐ข๐๐ _${username}_ ๐ๅฝก*
๐๐๐๐ก๐ฉ๐๐ก๐๐๐ข ๐๐ ๐ ๐๐ก๐จ ๐๐๐ฆ๐๐๐ฅ๐๐๐ฆ

โโโโโโโโโโโโโโโ
โ *<๐ ๐๐ก๐จ ๐๐๐ฆ๐๐๐ฅ๐๐๐ฆ/>*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โฃ เถฌโ๐ฅ _${usedPrefix}facebook *<enlace / link / url>*_
โฃ เถฌโ๐ฅ _${usedPrefix}instagram *<enlace / link / url>*_
โฃ เถฌโ๐ฅ _${usedPrefix}mediafire *<enlace / link / url>*_
โฃ เถฌโ๐ฅ _${usedPrefix}instagram *<enlace / link / url>*_
โฃ เถฌโ๐ฅ _${usedPrefix}gitclone *<enlace / link / url>*_
โฃ เถฌโ๐ฅ _${usedPrefix}tiktok *<enlace / link / url>*_
โฃ เถฌโ๐ฅ _${usedPrefix}ytmp3 *<enlace / link / url>*_
โฃ เถฌโ๐ฅ _${usedPrefix}ytmp4 *<enlace / link / url>*_
โฃ เถฌโ๐ฅ _${usedPrefix}play *<nombre de la canciรณn>*_
โฃ เถฌโ๐ฅ _${usedPrefix}play1 *<nombre de la canciรณn >*_
โฃ เถฌโ๐ฅ _${usedPrefix}play2 *<nombte de la canciรณn>*_
โฃ เถฌโ๐ฅ _${usedPrefix}playlist *<nombre de la canciรณn>*_
โฃ เถฌโ๐ฅ _${usedPrefix}spotify *<texto>*_
โฃ เถฌโ๐ฅ _${usedPrefix}pinteret *<texto>*_
โฃ เถฌโ๐ฅ _${usedPrefix}wallpaper *<texto>*_
โฃ เถฌโ๐ฅ _${usedPrefix}wallpaper2 *<texto>*_
โโโโโโโโโโโโโโโ
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [
['๐๏ธ๐ ๐๐ก๐จ ๐๐๐ฆ๐ง๐๐๏ธ', '.menu'],
['๐ฅต๐๐ฅ๐๐๐๐ข๐ฅ๐ฅต', '.menu'],
['๐ฎ๐๐ข๐ก๐๐ฅ๐ฎ', '.donar']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menudescarga|menudescargas|memudescarga|memudescargas)$/i
handler.fail = null
handler.register = true
export default  handler
