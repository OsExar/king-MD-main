let handler = async (m, { conn, groupMetadata }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.quoted.sender
let mention = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    if (!mention) throw `[β] ππππππππ π ππ πππππππ ππππ πππππ πππ πππππππππππ`
    let warn = global.db.data.users[mention].warn
    if (warn < 2) {
        global.db.data.users[mention].warn += 1
        m.reply(`β οΈ *_ππ ππ πππ πππ πππππππππππ +1_*
*_ππ ππππππππ 3 ππππ πππππππππ πππ πππππ_*β οΈ`)
        m.reply('*Recibiste una advertencia del administrador del grupo, tu advertencia total ahora es* ' + (warn + 1) + ', *si recibes una advertencia 3 veces, serΓ‘s eliminado del grupo*', mention)
    } else if (warn == 2) {
        global.db.data.users[mention].warn = 0
        m.reply('*[β] πππππ πππππππππ πππ ππππππππ 3 ππππππππππππ*')
        await time(5000)
        await conn.groupParticipantsUpdate(m.chat, [who], 'remove')
        m.reply(`*Fuiste eliminado del grupo* ${groupMetadata.subject} *porque has recibido 3 advertencias*`, mention)
}}
handler.help = ['warn [@user]']
handler.tags = ['group']
handler.command = /^warn$/i

handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler

const time = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}
