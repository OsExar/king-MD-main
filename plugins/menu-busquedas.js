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
๐๐๐๐ก๐ฉ๐๐ก๐๐๐ข ๐๐ ๐ ๐๐ก๐จ ๐๐จ๐ฆ๐ค๐จ๐๐๐๐ฆ

โโโโโโโโโโโโโโโ
โ *<๐๐จ๐ฆ๐ค๐จ๐๐๐๐ฆ/>*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โฃ เถฌโ๐ _${usedPrefix}animeinfo *<texto>*_
โฃ เถฌโ๐ _${usedPrefix}google *<texto>*_
โฃ เถฌโ๐ _${usedPrefix}imagen *<texto>*_
โฃ เถฌโ๐ _${usedPrefix}letra *<texto>*_
โฃ เถฌโ๐ _${usedPrefix}wikipedia *<texto>*_
โฃ เถฌโ๐ _${usedPrefix}ytsearch *<texto>*_
โฃ เถฌโ๐ _${usedPrefix}igstalk *<nombre de usuario>*_
โฃ เถฌโ๐ _${usedPrefix}igstalk2 *<nombre de usuario>*_
โฃ เถฌโ๐ _${usedPrefix}tiktokstalk *<nombre de usuario>*_
โฃ เถฌโ๐ _${usedPrefix}sweb *link*_
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
handler.command = /^(menubusqueda|menubusc|memubusq|menubusquedas)$/i
handler.fail = null
handler.register = true
export default  handler
