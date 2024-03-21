const fs = require('fs')
const chalk = require('chalk')

// Apikey (Isi apikey lu)
global.apikey = 'a8e86232771f9bc1826742c1' //https://api.lolhuman.xyz
global.rosekey = '-' //https://api.itsrose.life

// Name
global.namabot = 'Ayaka'
global.namaowner = 'Okta'

// Own
global.owner = '6285745267740'
global.ownernomer = ["6285745267740"]
global.premium = ['6285745267740']

// Wm
global.packname = ''
global.author = 'By Okta'
global.prefa = ['', '.']
global.sp = '•'

// Mess
global.mess = {
    done: 'Done ✅',
    admin: 'Feature Only for _*Admin Group*_',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: 'Feature Only for _*owner*_',
    group: 'Feature Only for _*Group Chat*_',
    private: 'Feature Only for _*Admin Group*_',
    wait: 'Wait a Moment, for Process',
    endLimit: 'Your imit has run out, Wait at 12 at night',
    error: '*!!!Feature Error!!!*',
}

// Limit
global.limitawal = {
    premium: "Infinity",
    free: 10,
}

//Edit Menu Disini
global.namaKu = 'ᴏᴋᴛᴀ'
global.namaBot = 'ᴀʏᴀᴋᴀ'
global.namaFile = 'Ayaka Em-Deh'
global.namaFile2 = 'Okta -- ライトガーデン'
global.namaNewsletter = `Light-Garden 闇を貫く光`
global.idNewsletter = "120363196693847188@newsletter"
global.title =  'Light-Garden ライトガーデン '
global.source = 'https://light-garden.my.id'
global.gambarAllMenu = 'https://telegra.ph/file/bd8eb7afd861d6b79e26b.jpg'

// Url
global.imageurl = 'https://telegra.ph/file/5e5e4d81460e4fff243c3.jpg'
global.isLink = `https://chat.whatsapp.com/GRXsnUmpyI86OPeYJ4GHyk`
global.thumb = fs.readFileSync('./media/thumb.jpg')
global.vidmenu = fs.readFileSync('./media/kaiser.mp4')

    const okta = [
    "https://telegra.ph/file/5457421b2e2dfbb2dc53e.jpg",
    "https://telegra.ph/file/9cf5ef9df345bf5bedbe8.jpg",
    "https://telegra.ph/file/82ccfa12f128ebfe05694.jpg",
    "https://telegra.ph/file/e0073bb4d03d632942f39.jpg",
    "https://telegra.ph/file/7265b63c6c3db181cd424.jpg",
    "https://telegra.ph/file/7dc20e5a5c6e244926f9e.jpg",
    "https://telegra.ph/file/32982376f57e12c73cb8c.jpg"
    ]
    let waipu = okta[Math.floor(Math.random() * okta.length)]
    global.kai = waipu
// Symbol
global.taamenu = ["✿︎", "◈", "➭", "ଓ", "⟆•", "⳻", "•", "↬", "◈", "⭑", "ᯬ", "◉", "᭻", "»", "☻︎", "々", "⛥", "✗", "⚚", "♪"]
let taaSim = taamenu[Math.floor(Math.random() * taamenu.length)]
global.dash = ["⛶", "❏", "⫹⫺", "☰"]
let taaDash = dash[Math.floor(Math.random() * dash.length)]

global.s0 = taaDash + '──────『 *I N G F O*'
global.s1 = '◉'
global.s2 = '☰'
global.s3 = '│' + taaSim
global.s4 = '╰──────────⳹'
global.ta = '•'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
