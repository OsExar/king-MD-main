let handler = async (m, { usedPrefix, text }) => {
    conn.absen = conn.absen ? conn.absen : {}
    let id = m.chat
    if (id in conn.absen) {
        throw `_*π°ππ πππ’ ππππππππππ ππ ππππ ππππ!*_\n\n*${usedPrefix}delasitencia* - πΏπππ ππππππ ππ ππππππππππ`
    }
    conn.absen[id] = [
        m.reply(`πΈπππππ πππ ππ‘πππ\n\n*${usedPrefix}presente* - πΏπππ πππππ ππππππππ\n*${usedPrefix}cekabsen* - πΏπππ πππππππππ ππ ππππππππππ\n*${usedPrefix}delasistencia* - πΏπππ ππππππ πππ πππππ ππ ππππππππππ`),
        [],
        text
    ]
}
handler.help = ['asistencia [teks]']
handler.tags = ['absen']
handler.command = /^(asis|mulai)tencia$/i
handler.group = true
handler.admin = true
export default handler
