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
๐๐๐๐ก๐ฉ๐๐ก๐๐๐ข ๐๐ ๐ ๐๐ก๐จ ๐๐ ๐๐๐๐๐ง๐ข๐ฆ ๐๐ ๐๐จ๐๐๐ข

โโโโโโโโโโโโโโโ
โ *<๐๐๐๐๐ง๐ข๐ฆ ๐๐ ๐๐จ๐๐๐ข/>*
โ     *- ๐๐ด๐๐ฟ๐พ๐ฝ๐ณ๐ด ๐ฐ ๐๐ฝ ๐ฐ๐๐ณ๐ธ๐พ ๐พ ๐ฝ๐พ๐๐ฐ ๐ณ๐ด ๐๐พ๐*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โฃ เถฌโ๐ค _${usedPrefix}bass_
โฃ เถฌโ๐ค _${usedPrefix}blown_
โฃ เถฌโ๐ค _${usedPrefix}deep_
โฃ เถฌโ๐ค _${usedPrefix}earrape_
โฃ เถฌโ๐ค _${usedPrefix}fast_
โฃ เถฌโ๐ค _${usedPrefix}fat_
โฃ เถฌโ๐ค _${usedPrefix}nightcore_
โฃ เถฌโ๐ค _${usedPrefix}reverse_
โฃ เถฌโ๐ค _${usedPrefix}robot_
โฃ เถฌโ๐ค _${usedPrefix}slow_
โฃ เถฌโ๐ค _${usedPrefix}smooth_
โฃ เถฌโ๐ค _${usedPrefix}tupai_
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
handler.command = /^(menuefectos|menuefec|menuefect)$/i
handler.fail = null
handler.register = true
export default  handler
