import fetch from 'node-fetch'
let handler = async(m, { conn, text, command, usedPrefix }) => {
if (!text) return conn.reply(m.chat, `πππΎπππ½πΌ ππ ππππ½ππ πΏπ ππππΌπππ πΏπ ππππππ πππ πππΌπ "@"\nπππππππ\n*${usedPrefix + command} unptoadrih15*`, m)
try {
let res = await fetch(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=9b817532fadff8fc7cb86862`)
let res2 = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=9b817532fadff8fc7cb86862`
let json = await res.json()
if (res.status !== 200) throw await res.text()
if (!json.status) throw json
let thumb = await (await fetch(json.result.user_picture)).buffer()
let caption = `
π€ ππππΌπππ(πΌ)
${json.result.username}
βββββββββββββββββ
β¨ ππππ½ππ
${json.result.nickname}
βββββββββββββββββ
β ππππππΏππππ
${json.result.followers}
βββββββββββββββββ
βοΈ ππππππΏππ
${json.result.followings}
βββββββββββββββββ
β€οΈ ππ πππππΌπ¦
${json.result.likes}
βββββββββββββββββ
π πππ½πππΎπΌπΎπππππ
${json.result.video}
βββββββββββββββββ
π π½πππππΌπΓπΌ
${json.result.bio}
`.trim()
await conn.sendFile(m.chat, res2, 'error.jpg', caption, m, false)
} catch (e) {
throw `ππ ππ πππΎπππππ ππ ππππ½ππ πΏπ ππππΌπππ`
}
}
handler.help = ['tiktokstalk'].map(v => v + ' <username>')
handler.tags = ['stalk']
handler.command = /^(tiktokstalk|ttstalk)$/i
handler.exp = 48
export default handler
