require('./config')
require('./kaisermenu')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const axios = require('axios')
const global = require('global');
const path = require('path')
const os = require('os')
const fsx = require('fs-extra')
const youtube = require("yt-search");
const jsobfus = require('javascript-obfuscator')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const yts = require("yt-search")
const ytdl = require("ytdl-core")
const { remini } = require('./lib/remini')
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const { toAudio, toPTT, toVideo, ffmpeg } = require('./lib/converter')
const { exec, spawn, execSync } = require("child_process")
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, h2k, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./lib/myfunc')
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/addlist');

// read database
global.db.data = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db.data) global.db.data = {
    users: {},
    premium: {},
    banned: {},
    group: {},
    database: {},
    settings: {},
    donate: {},
    others: {},
    sticker: {},
    ...(global.db.data || {})
}

moment.tz.setDefault("Asia/Jakarta").locale("id")

module.exports = conn = async (conn, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[.]/gi.test(body) ? body.match(/^[.]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await conn.decodeJid(conn.user.id)
        const isCreator = [botNumber, global.owner, '6289513081052'].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const from = mek.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
	    
        const groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false

        // Days
        const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam 🏙️'
        }
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang 🌆'
        }
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore 🌇'
        }
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang 🌤️'
        }
        if(time2 < "10:00:00"){
        var ucapanWaktu = 'Selamat Pagi 🌄'
        }
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat Subuh 🌆'
        }
        if(time2 < "03:00:00"){
        var ucapanWaktu = 'Selamat Tengah Malam 🌃'
        }
/*
        this.autosholat = this.autosholat ? this.autosholat : {}
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
    let id = m.chat
    if (id in this.autosholat) {
        return false
    }
    //let data = await (await fetch("https://api.aladhan.com/v1/timingsByCity?city=Makassar&country=Indonesia&method=8")).json();
    //let jadwalSholat = data.data.timings;
    let jadwalSholat = {
      Fajr: "04:16",
      Sunrise: "05:42",
      Dhuhr: "11:56",
      Asr: "15:23",
      Sunset: "18:10",
      Maghrib: "18:10",
      Isha: "19:26",
      Imsak: "04:32",
      Midnight: "00:06",
      Firstthird: "22:07",
      Lastthird: "23.00"
    }
    const date = new Date((new Date).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    }));
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    const katatokoh = (JSON.parse(fs.readFileSync('./lib/islamiah.json')))
let katatokoh1 = (pickRandom(katatokoh))
    for (const [sholat, waktu] of Object.entries(jadwalSholat)) {
        if (timeNow === waktu) {
        let caption = `*${katatokoh1.quote}* - ${katatokoh1.author}

Sekarang Adalah Waktu *${sholat}* Segera Lah *Berwudhu* Dan Melaksanakan *Sholat* @${who}
🕐 *Waktu Dan Sekitar* ${waktu} / DKI JAKARTA`
            this.autosholat[id] = [
                conn.sendMessage(m.chat, {
                text: caption,
    contextInfo: {
      mentionedJid: [who]
    }
  }),
                setTimeout(() => {
                    delete this.autosholat[id]
                }, 57000)
            ]
        }
    }
        */
        const fkontak = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: `status@broadcast`
                } : {})
            },
            message: {
                'contactMessage': {
                    'displayName': `${namaowner}`,
                    'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${namabot},;;;\nFN:${namabot}\nitem1.TEL;waid=${owner}:+${owner}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                    'jpegThumbnail': thumb,
                    thumbnail: thumb,
                    sendEphemeral: true
                }   
            }
        }
        // Database Tambahan!!

        let prem = JSON.parse(fs.readFileSync('./database/premium.json'))
        let vnnya = JSON.parse(fs.readFileSync('./database/vnnya.json'))
        let db_error = JSON.parse(fs.readFileSync('./database/error.json'));
        let db_respon_list = JSON.parse(fs.readFileSync('./database/list.json'));
 
        // Const Tambahan Sc Gw

        const more = String.fromCharCode(8206)
        const readmore = more.repeat(4001)
        const getCase = (cases) => {
            return "case  "+`'${cases}'`+fs.readFileSync("./ayaka.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
        }
        const totalFitur = () =>{
            var mytext = fs.readFileSync("./ayaka.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
        const sendvn = (teks) => {
            conn.sendMessage(from, { audio: teks, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
        }

        for (let anju of vnnya) {
            if (budy === anju) {
                let buffer = fs.readFileSync(`./database/AUDIO/${anju}.mp3`)
                sendvn(buffer)
            }
        }
        
function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
}

function generateRandomPassword() {
    return Array(10).fill(null).map(() => (Math.random() * 16 | 0).toString(16)).join('');
}
        
async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `Kaiser`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}


async function kaiserReply(teks) {
            const kaiser = {
                contextInfo: {
                    mentionedJid: [m.sender],
                    externalAdReply: {
                        title: ucapanWaktu,
                        body: global.namabot,
                        previewType: "PHOTO",
                        mediaType: 1,
                        thumbnailUrl: global.kai,
                        sourceUrl: `https://light-garden.my.id`
                    }
                },
                text: teks
            };
            return conn.sendMessage(m.chat, kaiser, {
                quoted: m
            });
        };

        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
            let group = global.db.data.group[m.chat]
            if (typeof group !== 'object') global.db.data.group[m.chat] = {}
            if (group) {
                if (!('mute' in group)) group.mute = false
                if (!('antilink' in group)) group.antilink = false
                if (!('antilinkyt' in group)) group.antilinkyt = false
                if (!('antilinktt' in group)) group.antilinktt = false
                if (!('antivirtex' in group)) group.antivirtex = false
                if (!('antisettings' in group)) group.antisettings = true
                if (!('antilinkv2' in group)) group.antilinkv2 = true
            } else global.db.data.group[m.chat] = {
                mute: false,
                antilink: false,
                antilinkyt: false,
                antilinktt: false,
                antivirtex: false,
                antisettings: true,
                antilinkv2: true
            }
            let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
                if (!isNumber(setting.status)) setting.status = 0
                if (!('autobio' in setting)) setting.autobio = false
                if (!('autoread' in setting)) setting.autoread = true
            } else global.db.data.settings[botNumber] = {
                status: 0,
                autobio: false,
                autoread: true
            }

        } catch (err) {
            console.error(err)
        }
        // Public & Self
        if (!conn.public) {
            if (!m.key.fromMe) return
        }
        
        if (m.message) {
            if (global.db.data.settings[botNumber].autoread) {
            conn.readMessages([m.key])
            }
        }
        
        // Push Message To Console && Auto Read
        if (m.message) {
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
        
        /*let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled = true,
            timezone = "Asia/Jakarta"
        })*/
        
	    if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let _uptime = process.uptime() * 1000
		let uptime = clockString(_uptime)
		await conn.updateProfileStatus(`I am ${namabot} | Aktif Selama ${uptime} ⏳ | Mode : ${conn.public ? 'Public-Mode' : 'Self-Mode'} | User : ${Object.keys(global.db.data.users).length}`).catch(_ => _)
		setting.status = new Date() * 1
	    }
	    }
	
        async function sendOktaMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await conn.relayMessage(chatId, generate.message, { messageId: generate.key.id })
        }
        
        
        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: conn.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, conn.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        conn.ev.emit('messages.upsert', msg)
        }
        
        if (db.data.group[m.chat].antilink) {
            if (budy.match(`chat.whatsapp.com`)) {
                kaiserReply(`「 ANTI LINK WHATSAPP 」\n\nKamu Terdeteksi Mengirim Link Group, Maaf Kamu Akan Di Kick !`)
                if (!isBotAdmins) return kaiserReply(`Ehh Bot Gak Admin T_T`)
                let gclink = (`https://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return kaiserReply(`Ehh Maaf Gak Jadi, Link Group Ini Ternyata 😆`)
                if (isAdmins) return kaiserReply(`Ehh Maaf Ternyata Kamu Admin 😁`)
                if (isCreator) return kaiserReply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
                conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        if (db.data.group[m.chat].antilinkv2) {
            if (budy.match(`chat.whatsapp.com`)) {
                kaiserReply(`「 ANTI LINK WHATSAPP 」\n\n*LINK TELAH DIHAPUS,JANGAN DI ULANGI YA KONTOL!!!*`)
                if (!isBotAdmins) return kaiserReply(`Ehh Bot Gak Admin T_T`)
                let gclink = (`https://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return kaiserReply(`Ehh Maaf Gak Jadi, Link Group Ini Ternyata 😆`)
                if (isAdmins) return kaiserReply(`Ehh Maaf Ternyata Kamu Admin 😁`)
                if (isCreator) return kaiserReply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
                conn.sendMessage(m.chat, { delete: m.key })
            }
        }
        // Auto Sholat
        /*this.autosholat = this.autosholat ? this.autosholat : {}
    let who = m.mentionedJid && m.mentionedJiUUd[0] ? m.mentionedJid[0] : m.fromMe ? : m.sender
    let id = m.chat
    if (id in this.autosholat) {
        return false
    }
    //let data = await (await fetch("https://api.aladhan.com/v1/timingsByCity?city=Makassar&country=Indonesia&method=8")).json();
    //let jadwalSholat = data.data.timings;
    let jadwalSholat = {
      Fajr: "04:16",
      Sunrise: "05:42",
      Dhuhr: "11:56",
      Asr: "15:23",
      Sunset: "18:10",
      Maghrib: "18:10",
      Isha: "19:26",
      Imsak: "04:32",
      Midnight: "00:06",
      Firstthird: "22:07",
      Lastthird: "23.00"
    }
    const date = new Date((new Date).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    }));
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    const katatokoh = (JSON.parse(fs.readFileSync('./lib/islamiah.json')))
let katatokoh1 = (pickRandom(katatokoh))
    for (const [sholat, waktu] of Object.entries(jadwalSholat)) {
        if (timeNow === waktu) {
        let caption = `*${katatokoh1.quote}* - ${katatokoh1.author}

Sekarang Adalah Waktu *${sholat}* Segera Lah *Berwudhu* Dan Melaksanakan *Sholat* @${who}
🕐 *Waktu Dan Sekitar* ${waktu} / DKI JAKARTA`
            this.autosholat[id] = [
                conn.sendMessage(m.chat, {
                text: caption,
    contextInfo: {
      mentionedJid: [who]
    }
  }),
                setTimeout(() => {
                    delete this.autosholat[id]
                }, 57000)
            ]
        }
    }*/
        //Anti Link YouTube
        if (db.data.group[m.chat].antilinkyt) {
            if (budy.match(`https://youtu.be`)) {
                kaiserReply(`「 ANTI LINK YOUTUBE 」\n\nKamu Terdeteksi Mengirim Link Youtube, Maaf Kamu Akan Di Kick !`)
                if (!isBotAdmins) return kaiserReply(`Ehh Bot Gak Admin T_T`)
                if (isAdmins) return kaiserReply(`Ehh Maaf Ternyata Kamu Admin 😁`)
                if (isCreator) return kaiserReply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
                conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        //Anti Link Tiktok
        if (db.data.group[m.chat].antilinktt) {
            if (budy.match(`https://vt.tiktok.com`)) {
                kaiserReply(`「 ANTI LINK TIKTOK 」\n\nKamu Terdeteksi Mengirim Link TikTok, Maaf Kamu Akan Di Kick !`)
                if (!isBotAdmins) return kaiserReply(`Ehh Bot Gak Admin T_T`)
                if (isAdmins) return kaiserReply(`Ehh Maaf Ternyata Kamu Admin 😁`)
                if (isCreator) return kaiserReply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
                conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        //AntiVirtex
        if (db.data.group[m.chat].antivirtex) {
            if (budy.length > 3500) {
                kaiserReply(`Seseorang mengirim spam virus!! tandai sebagai membaca⚠️\n`.repeat(300))
                kaiserReply(`「 ANTI VIRTEX 」\n\nKamu Terdeteksi Mengirim Virtex, Maaf Kamu Akan Di Kick !`)
                if (!isBotAdmins) return kaiserReply(`Ehh Bot Gak Admin T_T`)
                if (isAdmins) return kaiserReply(`Ehh Maaf Ternyata Kamu Admin 😁`)
                if (isCreator) return kaiserReply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
                conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        if (db.data.group[m.chat].antisettings) {
            if (budy.startsWith('wa.me/settings')) {
            conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            if (!isBotAdmins) return kaiserReply(`Ehh Bot Gak Admin T_T`)
            conn.sendMessage(m.chat, { delete: m.key })
            }
        }
        // Mute Chat
        if (db.data.group[m.chat].mute && !isAdmins && !isCreator) {
            return
        }
        
        // AUTO SHOLAT 
        
        conn.autoshalat = conn.autoshalat ? conn.autoshalat : {}
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.id : m.sender
	let id = m.chat 
    if(id in conn.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:29',
    terbit: '05:44',
    dhuha: '06:02',
    dzuhur: '12:02',
    ashar: '15:15',
    magrib: '17:52',
    isya: '19:01',
    }
    const date = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"  
    }));
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for(let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if(timeNow === waktu) {
    let caption = `Hai kak ${pushname},\nWaktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat🙂.\n\n*${waktu}*\n_untuk wilayah Blitar dan sekitarnya._`
    conn.autoshalat[id] = [
    kaiserReply(caption),
    setTimeout(async () => {
    delete conn.autoshalat[m.chat]
    }, 57000)
    ]
    }
    }
    function pickOkta(list) {
return list[Math.floor(Math.random() * list.length)]
    }
        const downloadMp3 = async (Link ) => {
try{
await ytdl.getInfo(Link);
let mp3File = getRandom('.mp3') 
ytdl(Link, {filter: 'audioonly'})
.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {  
await conn.sendMessage(from, { audio:  fs.readFileSync(mp3File), mimetype: 'audio/mp4' },{ quoted: m })
fs.unlinkSync(mp3File)
})       
} catch (err){
console.log(color(err))
}
        }
        switch (command) {
        // Premium
        
        
        
        case 'paptt':
            if (!isPremium) return kaiserReply(mess.prem)
            if (!q) return kaiserReply(`Example ${prefix + command} foto/video`)
            let papttfoto = JSON.parse(fs.readFileSync('./lib/paptt-foto.json'))
            let papttvideo = JSON.parse(fs.readFileSync('./lib/paptt-video.json'))
            let titid1 = (pickRandom(papttfoto))
            let titid2 = (pickRandom(papttvideo))
            if (q == 'foto') {
               // kaiserReply("Foto Akan Dikirim Lewat Private Chat ( *PC* )")
                conn.sendMessage(m.sender, { image: { url: titid1 }, caption: 'Mana Tahan🥵'}, { quoted: fkontak })
            } else if (q == 'video') {
                //kaiserReply("Video Akan Dikirim Lewat Private Chat ( *PC* )")
                conn.sendMessage(m.sender, { video: { url: titid2 }, caption: 'Mana Tahan🥵'}, { quoted: fkontak })
            }
        break
            case 'refresh':
             async function main() {
  const dom = await JSDOM.fromURL("https://danzzstore.panelprivv.xyz", {
    runScripts: "dangerously",
  });
  const window = dom.window;
  setInterval(() => { document.window.location.reload();
  }, 10000);
}
main();
            break
        case 'buatgc':
            if (!isPremium) return kaiserReply(mess.prem)
            if (!text) return kaiserReply('_Masukkan Nama Grup!_')
            try{
                kaiserReply(mess.wait)
                let group = await conn.groupCreate(text, [m.sender])
                let link = await conn.groupInviteCode(group.gid)
                let url = 'https://chat.whatsapp.com/' + link;
                /// console.log(chalk.bold.red('Membuat Grup: ' + group.gid + '\nNama Grup: ' + text + '\n\nViolet'))
                kaiserReply('_Berhasil Membuat Grup *' + text + '*_\n\n*Nama:* ' + text + '\n*ID:* ' + group.gid + '\n*Link:* ' + url)
            } catch (e) {
                let [namagc, partici] = text.split('|')
                if (!namagc) return kaiserReply('Format Salah!!!')
                if (!partici) return kaiserReply('Tag user sebagai member baru!')
                let mem = conn.parseMention(`@${parseInt(m.sender)} ${partici}`)
                let ha = await conn.groupCreate(namagc, mem).catch(console.error)
                console.log(JSON.stringify(ha));
                await kaiserReply(`*GROUP CREATE*

\`\`\`Group Telah Dibuat @${m.sender.replace(/@.+/, '')}\`\`\`


${JSON.stringify(ha.participants)}`)
                conn.groupMakeAdmin(ha.gid, [m.sender])
                if (!isCreator) {
                    await conn.modifyChat(ha.gid, 'delete', {
                        includeStarred: false
                    }).catch(console.error)
                    conn.groupLeave(ha.gid)
                }
            }
        break
            case 'oy':
               let oy = 'tess'
                conn.reply(m.chat, oy, m, { contextInfo: {
    forwardingScore: 9999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363233630634081@newsletter",
      serverMessageId: 101,
      newsletterName: 'tes'
    }}})
                break
            case 'att':
                kaiserReply('aahhh')
                break
        // Owner Fitur
            case 'dork':
                let dork = JSON.parse(fs.readFileSync('./media/dorking.json'))
let dorking = (pickOkta(dork))
conn.sendMessage(m.chat, {text: dorking}, {quoted:fkontak})
                break
            case 'waipu':
               const kontol = [
  "https://i.pinimg.com/originals/13/8f/a9/138fa9fab411166bb8c5523bf710ff42.jpg",
    "https://i.pinimg.com/originals/c3/11/9a/c3119aef29726b78b9f0509aa40ccb3b.jpg",
    "https://i.pinimg.com/originals/18/05/40/18054035c2adc989580043b4391e20af.jpg",
    "https://i.pinimg.com/originals/7c/0a/4b/7c0a4bd43596226b6311b8aae2b02408.jpg",
    "https://i.pinimg.com/originals/3d/fe/1d/3dfe1d00cff5b517d4eb56e5297abae9.jpg",
    "https://i.pinimg.com/originals/77/dd/ef/77ddefdd397d0730db97d848781e4df7.jpg",
    "https://i.pinimg.com/originals/43/d9/7d/43d97d69e6552e80da086cd91557c826.jpg",
    "https://i.pinimg.com/originals/e5/f2/86/e5f286ded660f38e8f4db73c8dfafba8.jpg",
    "https://i.pinimg.com/originals/9f/6f/71/9f6f7189691c533cd88ef656ce23bcbb.jpg",
    "https://i.pinimg.com/originals/0d/b8/44/0db844fa29b995dd699bfb9172fad779.jpg",
    "https://i.pinimg.com/originals/41/c3/49/41c349749124411f4b4c0b928eb46207.jpg",
    "https://i.pinimg.com/originals/c6/f7/bf/c6f7bfb44f0c964104ca36c8ee388f71.jpg",
    "https://i.pinimg.com/originals/1e/c5/c3/1ec5c36b3dfa5f1bef5847def89f8df6.jpg",
    "https://i.pinimg.com/originals/76/b6/1a/76b61aebdbc05551c9d8714014d7a30d.jpg",
    "https://i.pinimg.com/originals/3a/3e/fc/3a3efc8f03eb6122b0e04841f4177c2c.jpg",
    "https://i.pinimg.com/originals/77/ae/d7/77aed75e4e9f6bf317f8ca9e872d172a.jpg",
    "https://i.pinimg.com/originals/0d/d5/02/0dd5028b7f3e2e660b78aadb5ee1ecee.jpg",
    "https://i.pinimg.com/originals/9b/b2/d7/9bb2d7e9ca23a61c49c3a9428d6ccb3e.jpg",
    "https://i.pinimg.com/originals/c8/23/40/c82340db05d9ef61411a9d5837eeb2a3.jpg",
    "https://i.pinimg.com/originals/3c/2a/6b/3c2a6b131b6d1377ca31b1cee9eb5e5d.jpg",
    "https://i.pinimg.com/originals/cf/3c/2b/cf3c2bf2ce5ae2555dda6cadf11a67a7.jpg",
    "https://i.pinimg.com/originals/c3/16/e5/c316e5eb1367be33993d2266cc839062.jpg",
    "https://i.pinimg.com/originals/2c/8f/4b/2c8f4bf86a5b05df761cfd0244d37b4d.jpg",
    "https://i.pinimg.com/originals/b4/83/04/b48304a92e85c4eba37b82fdd5d08434.jpg",
    "https://i.pinimg.com/originals/75/b3/99/75b399a50c4ac54e49261dd6e0f81a5b.jpg",
    "https://i.pinimg.com/originals/dd/02/c5/dd02c512af2a70a9840ffab06eb74f4e.jpg",
    "https://i.pinimg.com/originals/53/0a/6d/530a6d47fa85f639587e0c7b54c4457d.jpg",
    "https://i.pinimg.com/originals/1c/eb/aa/1cebaa84d93f590f15933e78efc94f4b.jpg",
    "https://i.pinimg.com/originals/de/e9/68/dee968195b668d1bfd021cedc79cd5ab.jpg",
    "https://i.pinimg.com/originals/20/d9/57/20d957c9ad8d0691768a8968152a311d.jpg",
    "https://i.pinimg.com/originals/7a/f7/7e/7af77ef00a5057a98aedbf86450317f9.jpg",
    "https://i.pinimg.com/originals/25/41/a9/2541a9472e1378998cf5ac0dfcdc82f5.jpg",
    "https://i.pinimg.com/originals/9a/0c/fb/9a0cfbdd161d09e8c200ee5cebbcaac1--male-cosplay-anime-cosplay.jpg",
    "https://i.pinimg.com/originals/79/56/be/7956be00b52b5484c161a50a2ed0e566.jpg",
    "https://i.pinimg.com/originals/21/63/f9/2163f9e0d59f7d10ba237131bc1e6162--cool-cosplay-anime-cosplay.jpg",
    "https://i.pinimg.com/originals/ea/d1/0d/ead10da121a27b4d1801def2505295a5.png",
    "https://i.pinimg.com/originals/6e/15/2b/6e152b90f638d955371cffe615f685fc.jpg",
    "https://i.pinimg.com/originals/25/ef/0d/25ef0d8b101b555d34fc654d3bc8453d.jpg",
    "https://i.pinimg.com/originals/37/5c/55/375c55403d41d13316e6479f7ccbcc8c.jpg",
    "https://i.pinimg.com/originals/7c/1a/0c/7c1a0cf9af72ee41c408e40f36eafd33.jpg",
    "https://i.pinimg.com/originals/cc/b5/a8/ccb5a867547d92b7c9e399e4d71ae2c8.png",
    "https://i.pinimg.com/originals/b4/20/e5/b420e54c70e5ce1f112d400e686a0a0f.jpg",
    "https://i.pinimg.com/originals/a0/6f/c5/a06fc51bffd216199727461115ca6dd0.png",
    "https://i.pinimg.com/originals/47/10/41/471041b7a2d7110f826b4fffda87846a.jpg",
    "https://i.pinimg.com/originals/a4/18/92/a418925f40047be5f00a0c0d3c5dfcb9.jpg",
    "https://i.pinimg.com/originals/6c/a5/d8/6ca5d8d601f19d6f21d6d649e8914489--male-cosplay-cosplay-anime.jpg",
    "https://i.pinimg.com/originals/79/bf/02/79bf0236aaff04bdf052673bfa4d4581.jpg",
    "https://i.pinimg.com/originals/c9/ae/4d/c9ae4d450bbbf2c116d40fcb6644c113.jpg",
    "https://i.pinimg.com/originals/b5/12/46/b5124604bd0cb22c7c384972cb6703af.jpg",
    "https://i.pinimg.com/originals/4f/a4/e5/4fa4e565931db75327a69bd40d399bce.jpg",
    "https://i.pinimg.com/originals/b7/fc/69/b7fc69457cb0bf3fa13b2eb6f66acdc7.jpg",
    "https://i.pinimg.com/originals/98/25/96/98259611cf99d8d94e10477210bfe168.jpg",
    "https://i.pinimg.com/originals/b9/c9/dd/b9c9dd7caa5b471540cde0cab95f0282.jpg",
    "https://i.pinimg.com/originals/82/c9/bd/82c9bd503fbbd8ed8b9b4f385b2ff0c2.jpg",
    "https://i.pinimg.com/originals/f0/36/64/f0366478ffda51f117c87d70cc2611f7.jpg",
    "https://i.pinimg.com/originals/84/d9/71/84d9715428eefcd3224a2d43d0a55328.jpg",
    "https://i.pinimg.com/originals/90/aa/7c/90aa7c57a6ce841f63df0bc25717b6ca.jpg",
    "https://i.pinimg.com/originals/1d/73/b3/1d73b3a0fd9771d5a06e0b1c082b517b.jpg",
    "http://fc02.deviantart.net/fs71/f/2012/053/4/b/4b876ef7cfbeb11f7d8209c2a9764df2-d4qnbzr.jpg",
    "https://i.pinimg.com/originals/69/d7/b8/69d7b8a549b4aa250a63a70301c336b9.jpg",
    "https://i.pinimg.com/originals/80/e5/3b/80e53b084bee9286046c039a32f6dbcd.jpg",
    "https://i.pinimg.com/originals/47/6d/e3/476de320a1b37f67e13d890def8c63fa.jpg",
    "https://i.pinimg.com/originals/1b/2c/21/1b2c216600ddb39eeec825b690bd9d63.jpg",
    "https://i.pinimg.com/originals/ce/aa/52/ceaa528f7bb686b532fa04489ba324bf.jpg",
    "https://i.pinimg.com/originals/79/d8/09/79d8090c156b9bafdedf53da7a5b39d1.jpg",
    "https://i.pinimg.com/originals/1b/90/74/1b90744f3331c8e1b84383319ce2ff8d.jpg",
    "https://i.pinimg.com/originals/81/2a/3f/812a3f8095fccc3a2984a1c91b648a36.jpg",
    "https://i.pinimg.com/originals/b0/d4/65/b0d46575c705adf77d698e33730396c4.jpg",
    "https://i.pinimg.com/originals/99/2c/d3/992cd30f0161b3f158267074a3dd96de.jpg",
    "https://i.pinimg.com/originals/90/41/60/904160fdf5387835c654d61bde2d5812.png",
    "https://i.pinimg.com/originals/56/ab/81/56ab81fd3db3fca26c83df394de4d7ed.jpg",
    "https://i.pinimg.com/originals/74/b6/7b/74b67bae3b11329e471b5b859fc9453e.jpg",
    "https://i.pinimg.com/originals/4e/5c/1a/4e5c1a025aca01393cd6203081620cbe.jpg",
    "https://i.pinimg.com/originals/8a/0f/d0/8a0fd013c39621aa2d7214d79ad112f7.jpg",
    "https://i.pinimg.com/originals/9b/b6/a8/9bb6a81dcc6347e98fcef0da01a93172.jpg",
    "https://i.pinimg.com/originals/19/ae/b2/19aeb2ac7500ded0cf50b7f83f60fb86.jpg",
    "https://i.pinimg.com/originals/78/65/92/7865925fa1addd6679a9ea4b2810591c.jpg",
    "https://i.pinimg.com/originals/5a/5c/f3/5a5cf3e562322f01725cc7c2a07cd69b.jpg",
    "https://i.pinimg.com/originals/9c/af/a7/9cafa7fc58286d10e14b73141ff8f5f3.jpg",
    "https://i.pinimg.com/originals/6d/82/07/6d8207caebd7ff644d5835eb22c5bfd2--gintoki-cosplay-cosplay-anime.jpg",
    "https://i.pinimg.com/originals/57/53/00/575300de7503a03fc8191f4b5bbc3d4b.jpg",
    "https://i.pinimg.com/originals/b0/ed/af/b0edafadc4adee5f16cc8bf30b11aebc.jpg",
    "https://i.pinimg.com/originals/8b/ea/61/8bea6183a2fe0cd494175b46965b36da.jpg",
    "https://i.pinimg.com/originals/ff/22/d1/ff22d1d94308bfbeed29bbb1a3972fd2.jpg",
    "https://i.pinimg.com/originals/d0/51/54/d0515487efb61dda9ec3a47239b9e41d.jpg",
    "https://i.pinimg.com/originals/23/78/2a/23782abd62d91b86b83dfdfbac837249.jpg",
    "https://i.pinimg.com/originals/6f/ab/53/6fab53f990a4044d2c9a548eb0754812.jpg",
    "https://i.pinimg.com/originals/dc/8d/11/dc8d1169aab1b6869ccba38502b6b1e7.jpg",
    "https://i.pinimg.com/originals/6c/92/00/6c92009dec098e54f7eb7c1b3e64e5b4.jpg",
    "https://i.pinimg.com/originals/41/7c/02/417c02f44d480e803362142d40e6772b.jpg",
    "https://i.pinimg.com/originals/04/50/10/0450104aa0731202db113fc5cd8c0d12.jpg",
    "https://i.pinimg.com/originals/46/2d/e3/462de328cf3cc69f5b10556ef30579e7.jpg",
    "https://i.pinimg.com/originals/47/3e/b5/473eb575b2f95ce5906bdad0e5b593b7.jpg",
    "https://i.pinimg.com/originals/26/8d/5e/268d5e20a747afea743b9a0cb96cc6de.jpg",
    "https://i.pinimg.com/originals/bc/a3/80/bca380011a5a682a9e7766c1d7c2db82.jpg",
    "https://i.pinimg.com/originals/71/2e/ac/712eacb25c094afd579c04d85ca7f9e0.jpg",
    "https://i.pinimg.com/originals/fc/c5/10/fcc5101e54e559952181e0bab0b1420e.jpg",
    "https://i.pinimg.com/originals/89/55/3d/89553d3b75d8d9484ffc29aba67c1fed.jpg",
    "https://i.pinimg.com/originals/c0/55/11/c05511492dcb02d6caa10e79df009d36.jpg",
    "https://i.pinimg.com/originals/cb/7e/e9/cb7ee99c3cdf99a0451da682ea4ac8fe.jpg"
]
               let poke = kontol[Math.floor(math.random() * kontol.length)]
               conn.sendMessage(m.chat , {image: {url: poke}})
               
                break
        case 'ambilcase':
            try{
                if (!isCreator) return kaiserReply(mess.owner)
                if (!q) return kaiserReply(`Example: ${prefix + command} antilink`) 
                if(q.startsWith(prefix)) return kaiserReply("Query tidak boleh menggunakan prefix")
                let nana = await getCase(q)
                kaiserReply(nana)
            } catch(err){
            console.log(err)
            kaiserReply(`Case ${q} tidak di temukan`)
        }
        break 
        case 'cekapikey':
            if (!isCreator) return kaiserReply(mess.owner)
            let lol = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${apikey}`)
            kaiserReply(mess.wait)
            if (lol.message == 'success') {
                let ani = `• *ɴᴀᴍᴇ:* ${lol.result.username}
• *ᴛᴏᴛᴀʟ ʜɪᴛ:* ${lol.result.requests}
• *ʜɪᴛ ᴛᴏᴅᴀʏ:* ${lol.result.today}
• *ᴀᴄᴄᴏᴜɴᴛ:* ${lol.result.account_type}

• *ᴇxᴘɪʀᴇᴅ:* ${lol.result.expired}`
                conn.sendMessage(m.chat, { image: thumb, caption: ani }, { quoted: fkontak })
                } else m.reply('ɪɴᴠᴀʟɪᴅ ᴀᴘɪᴋᴇʏ !')
            break
        case 'ambilsesi':
            if (!isCreator) return kaiserReply(mess.owner)
            kaiserReply('Tunggu Sebentar, Sedang mengambil file sesi mu')
            let sesi = await fs.readFileSync('./session/creds.json')
            conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'creds.json' }, { quoted: m })
        break
        
        case 'autoread':
            if (!isCreator) return kaiserReply(mess.owner)
            if (args.length < 1) return kaiserReply(`Contoh ${prefix + command} on/off`)
            if (q === 'on'){
                global.db.data.settings[botNumber].autoread = true
            kaiserReply(`Berhasil mengubah autoread ke ${q}`)
            } else if (q === 'off'){
                global.db.data.settings[botNumber].autoread = false
            kaiserReply(`Berhasil mengubah autoread ke ${q}`)
            }
        break
        
        case 'autobio':
            if(!isCreator) return kaiserReply(mess.owner)
            if (args.length < 1) return kaiserReply(`Example ${prefix + command} on/off`)
            if (q == 'on'){
                global.db.data.settings[botNumber].autobio = true
                kaiserReply(`Berhasil Mengubah AutoBio Ke ${q}`)
            } else if (q == 'off'){
                global.db.data.settings[botNumber].autobio = false
                kaiserReply(`Berhasil Mengubah AutoBio Ke ${q}`)
            }
        break
            case 'tes':
                kaiserReply('on🍑')
                break
        
        case 'public': {
                if (!isCreator) return kaiserReply(mess.owner)
                conn.public = true
                kaiserReply('Sukses Ubah Ke Penggunaan Umum')
        }
        break
        case 'self': {
                if (!isCreator) return kaiserReply(mess.owner)
                conn.public = false
                kaiserReply('Sukses Ubah Ke Penggunaan Sendiri')
            }
        break
        
        case 'addlist':
            if (!m.isGroup) return kaiserReply(mess.group)
            if (!isAdmins && !isCreator) return kaiserReply(mess.botAdmin)
            var args1 = q.split("@")[0]
            var args2 = q.split("@")[1]
            if (!q.includes("@")) return kaiserReply(`Gunakan dengan cara ${command} *key@response*\n\n_Contoh_\n\n#${command} tes@apa`)
            if (isAlreadyResponList(m.chat, args1, db_respon_list)) return kaiserReply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
            addResponList(m.chat, args1, args2, false, '-', db_respon_list)
            kaiserReply(`Berhasil menambah List menu : *${args1}*`)
        break
        
        case 'dellist':{
            if (!m.isGroup) return kaiserReply(mess.group)
            if (!isAdmins && !isCreator) return kaiserReply(mess.botAdmin)
            if (db_respon_list.length === 0) return kaiserReply(`Belum ada list message di database`)
            var arr_rows = [];
            for (let x of db_respon_list) {
            if (x.id === m.chat) {
            kaiserReply(`Mau Delete Yang Mana?\n\n${x.key}`)
        }}
        }
        break
            case 'inject':{
                if (!isCreator) return kaiserReply('lu sapa')
        function oktaa(){
var endcall = {
             scheduledCallCreationMessage: {
             callType: 0,
              scheduledTimestampMs:  Date.now(),
               title: ``
                 }
                }
                conn.relayMessage(m.chat, endcall, {})
setTimeout(oktaa,5000)
}
oktaa()
            }
                break
        case 'enc': {
            if (!isCreator) return kaiserReply(mess.owner)
            if (!q) return kaiserReply(`Contoh ${prefix+command} const kaiser = require('./kntl')`)
            let meg = await obfus(q)
            kaiserReply(`${meg.result}`)
        }
        break
        
        case 'pushkontak': {
          if (!text) return kaiserReply(`Example ${prefix}${command} Hi Semuanya`)
          if (!isCreator) return kaiserReply(mess.owner)
          let get = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
          let count = get.length;
          let sentCount = 0;
          kaiserReply('*_Sedang Push Kontak..._*');
          for (let i = 0; i < get.length; i++) {
            setTimeout(function() {
              conn.sendMessage(get[i], { text: text });
              count--;
              sentCount++;
              if (count === 0) {
                kaiserReply(`*_Semua pesan telah dikirim!_*:\n*_Jumlah pesan terkirim:_* *_${sentCount}_*`);
              }
            }, i * 1000); // delay setiap pengiriman selama 1 detik
          }
        }
        break
        
        case 'addvn':{
            if (!isCreator) return kaiserReply(mess.owner)
            if (args.length < 1) return kaiserReply('Nama audionya apa')
            if (vnnya.includes(q)) return kaiserReply("Nama tersebut sudah di gunakan")
            let delb = await conn.downloadAndSaveMediaMessage(quoted)
            vnnya.push(q)
            await fsx.copy(delb, `./database/AUDIO/${q}.mp3`)
            fs.writeFileSync('./database/vnnya.json', JSON.stringify(vnnya))
            fs.unlinkSync(delb)
            kaiserReply(`Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
        }
        break
        case 'delvn':{
            if (!isCreator) return kaiserReply(mess.owner)
            if (args.length < 1) return kaiserReply('Masukan query')
            if (!vnnya.includes(q)) return kaiserReply("Nama tersebut tidak ada di dalam data base")
            let wanu = vnnya.indexOf(q)
            vnnya.splice(wanu, 1)
            fs.writeFileSync('./database/vnnya.json', JSON.stringify(vnnya))
            fs.unlinkSync(`./database/AUDIO/${q}.mp3`)
            kaiserReply(`Sukses delete vn ${q}`)
        }
        break
        
        case 'listvn':{
            let teksooo = '┌──⭓「 *LIST VN* 」\n│\n'
            for (let x of vnnya) {
            teksooo += `│⭔ ${x}\n`
            }
            teksooo += `│\n└────────────⭓\n\n*Total ada : ${vnnya.length}*`
            kaiserReply(teksooo)
        }
        break
        
        case 'addprem':
            if (!isCreator) return kaiserReply(mess.owner)
            if (!args[0]) return kaiserReply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
            bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
            let ceknye = await conn.onWhatsApp(bnnd + `@s.whatsapp.net`)
            if (ceknye.length == 0) return kaiserReply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
            premium.push(bnnd)
            fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
            kaiserReply(mess.done)
        break
        
        case 'delprem':
            if (!isCreator) return kaiserReply(mess.owner)
            if (!args[0]) return kaiserReply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
            yaki = q.split("|")[0].replace(/[^0-9]/g, '')
            unp = premium.indexOf(yaki)
            premium.splice(unp, 1)
            fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
            kaiserReply(mess.done)
        break
        
        case 'listprem':
            teksooo = '*List Premium*\n\n'
            for (let i of premium) {
                teksooo += `- ${i}\n`
            }
            teksooo += `\n*Total : ${premium.length}*`
            conn.sendMessage(m.chat, { text: teksooo.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": premium } })
        break
        
        
       
        case 'myip': {
        if (!isCreator) return kaiserReply(mess.owner)
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        kaiserReply("🔎 My public IP address is: " + ip);
                    })
                })
            }
        break
        case 'listpc': {
                if (!isCreator) return kaiserReply(mess.owner)
                let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                let tekslist = `*🔒 LIST PERSONAL CHAT*\n\n`
                tekslist += `*📱 Total Chat :* ${anu.length} Chat\n\n`
                for (let i of anu) {
                    let nama = store.messages[i].array[0].pushName
                    tekslist += `📛 *Nama :* ${nama}\n`
                    tekslist += `👤 *User :* @${i.split('@')[0]}\n`
                    tekslist += `🔗 *Link Chat :* https://wa.me/${i.split('@')[0]}\n\n`
                    tekslist += `──────────────────────\n\n`
                }
                kaiserReply(tekslist)
            }
        break
        case 'listgc': {
                if (!isCreator) return kaiserReply(mess.owner)
                let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                let tekslistgc = `👥 *LIST GROUP CHAT*\n\n`
                tekslistgc += `📱 Total Group : ${anu.length} Group\n\n`
                for (let e of anu) {
                    let metadata = await conn.groupMetadata(e)
                    tekslistgc += `📛 *Nama :* ${metadata.subject}\n`
                    tekslistgc += `👤 *Owner Grup :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n`
                    tekslistgc += `🌱 *ID :* ${metadata.id}\n`
                    tekslistgc += `⏳ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n`
                    tekslistgc += `👥 *Member :* ${metadata.participants.length}\n\n`
                    tekslistgc += `──────────────────────\n\n`
                }
                kaiserReply(tekslistgc)
            }
        break
        
        case 'chat': {
                if (!isCreator) return kaiserReply(mess.owner)
                if (!q) return kaiserReply('Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete')
                if (args[0] === 'mute') {
                    conn.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => kaiserReply(jsonformat(res))).catch((err) => kaiserReply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    conn.chatModify({ mute: null }, m.chat, []).then((res) => kaiserReply(jsonformat(res))).catch((err) => kaiserReply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    conn.chatModify({ archive: true }, m.chat, []).then((res) => kaiserReply(jsonformat(res))).catch((err) => kaiserReply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    conn.chatModify({ archive: false }, m.chat, []).then((res) => kaiserReply(jsonformat(res))).catch((err) => kaiserReply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    conn.chatModify({ markRead: true }, m.chat, []).then((res) => kaiserReply(jsonformat(res))).catch((err) => kaiserReply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    conn.chatModify({ markRead: false }, m.chat, []).then((res) => kaiserReply(jsonformat(res))).catch((err) => kaiserReply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    conn.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => kaiserReply(jsonformat(res))).catch((err) => kaiserReply(jsonformat(err)))
                }
            }
        break
        
        case 'react': {
                if (!isCreator) return kaiserReply(mess.owner)
                if (!args[0]) return kaiserReply(`Example: ${prefix + command} Titid`)
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                conn.sendMessage(m.chat, reactionMessage)
            }
        break
        case 'shutdown': {
             if (!isCreator) return kaiserReply(mess.owner)
			 kaiserReply(`Otsukaresama deshita🖐`)
             await sleep(3000)
             process.exit()
             }
        break
        case 'join': {
                if (!isCreator) return kaiserReply(mess.owner)
                if (!text) return kaiserReply('Masukkan Link Group!')
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return kaiserReply('Link Invalid!')
                kaiserReply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await conn.groupAcceptInvite(result).then((res) => kaiserReply(jsonformat(res))).catch((err) => kaiserReply(jsonformat(err)))
        }
        break
        case 'leave': {
                if (!isCreator) return kaiserReply(mess.owner)
                await conn.groupLeave(m.chat).then((res) => kaiserReply(jsonformat(res))).catch((err) => kaiserReply(jsonformat(err)))
        }
        break
        case 'setexif': {
                if (!isCreator) return kaiserReply(mess.owner)
                if (!text) return kaiserReply(`Contoh : ${prefix + command} packname|author`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                kaiserReply(`Exif berhasil diubah menjadi\n\n• Packname : ${global.packname}\n• Author : ${global.author}`)
        }
        break
            case 'bug': {
             if (!isCreator) return kaiserReply('lu sapa')
             var call = {
             scheduledCallCreationMessage: {
             callType:1,
              scheduledTimestampMs:  Date.now(),
               title: ``
                 }
                }
                conn.relayMessage(m.chat, call, {})
                kaiserReply('awowkwok')
            }
                break
        case 'setpp':
        case 'setpp':
            case 'setppbot': {
            if (!isCreator) return kaiserReply(mess.owner)
            if (!quoted) return kaiserReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
            if (!/image/.test(mime)) return kaiserReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
            if (/webp/.test(mime)) return kaiserReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
            var medis = await conn.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
            if (args[0] == 'full') {
            var { img } = await generateProfilePicture(medis)
            await conn.query({
            tag: 'iq',
            attrs: {
            to: botNumber,
            type:'set',
            xmlns: 'w:profile:picture'
            },
            content: [
            {
            tag: 'picture',
            attrs: { type: 'image' },
            content: img
            }
            ]
            })
            fs.unlinkSync(medis)
            reply(mess.success)
            } else {
            var memeg = await conn.updateProfilePicture(botNumber, { url: medis })
            fs.unlinkSync(medis)
            kaiserReply(`Sukses`)
            }
            }
        break
        
        // Main Menu
        case 'speedtest': {
                kaiserReply('Testing Speed...')
                let cp = require('child_process')
                let {
                    promisify
                } = require('util')
                let exec = promisify(cp.exec).bind(cp)
                let o
                try {
                    o = await exec('python speed.py')
                } catch (e) {
                    o = e
                } finally {
                    let {
                        stdout,
                        stderr
                    } = o
                    if (stdout.trim()) kaiserReply(stdout)
                    if (stderr.trim()) kaiserReply(stderr)
                }
            }
        break
        case  'delsesi':
            case 'clearsession': {
                if (!isCreator) return kaiserReply(mess.owner)
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return kaiserReply('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
                    if (filteredArray.length == 0) return kaiserReply(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    kaiserReply(teks)
                    await sleep(2000)
                    kaiserReply("Menghapus file sampah...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    kaiserReply("Berhasil menghapus semua sampah di folder session")
                });
            }
            break
        case 'owner': 
        case 'creator': /*{
                const vcard =
				'BEGIN:VCARD\n' + // metadata of the contact card
				'VERSION:3.0\n' +
				`FN:${namaowner}\n` + // full name
				`ORG:${namabot};\n` + // the organization of the contact
				`TEL;type=MSG;type=CELL;type=VOICE;waid=${owner}:+${owner}\n` + // WhatsApp ID + phone number
				'END:VCARD'
			conn.sendMessage(m.chat, {
				contacts: {
					displayName: namaowner,
					contacts: [{ vcard }],
				},
			}, { quoted: fkontak})
               }*/
                {
                const vcard =
				'BEGIN:VCARD\n' + // metadata of the contact card
				'VERSION:3.0\n' +
				`FN:${namaowner}\n` + // full name
				`ORG:${namabot};\n` + // the organization of the contact
				`TEL;type=MSG;type=CELL;type=VOICE;waid=${owner}:+${owner}\n` + // WhatsApp ID + phone number
				'END:VCARD'
			conn.sendMessage(m.chat, {
				contacts: { 
				/*contextInfo: {
                externalAdReply: {*/
					displayName: namaowner,
					contacts: [{ vcard }],
                    contextInfo: {
                        externalAdReply:{
					showAdAttribution: true,
                    title: `© by Kaiser`,
                            body: `${namabot}`,
                            thumbnailUrl: 'https://telegra.ph/file/4358a1c64dc6842ef0bc5.jpg',
                            sourceUrl: 'https://light-garden.my.id',
                            mediaType: 1,
                            renderLargerThumbnail: true
				},
			}}}, { quoted: fkontak})
                }
        break
        case 'ceklimit': 
        case 'checklimit': 
        case 'limit':{
					kaiserReply('*Limit Lu :* ' + (db.data.users[m.sender].limit))
					}
	    break
        case 'runtime':
            	kaiserReply(`*Bot Telah Online Selama*\n*${runtime(process.uptime())}*`)
                
        break
        
        case 'totalfitur':
        case 'fitur': 
            kaiserReply(`Total Fitur ${namabot} Adalah ${totalFitur()}`)
        break
        
        case 'ping': {
            const used = process.memoryUsage()
            let timestamp = speed()
            let latensi = speed() - timestamp
            let neww = performance.now()
            let oldd = performance.now()
            let respon = `Kecepatan Respon ${latensi.toFixed(4)} _Second_ 

_Info Server_
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
`.trim()
conn.relayMessage(m.chat, { liveLocationMessage: { 
degreesLatitude: 35.676570,
degreesLongitude: 139.762148,
caption: respon,
sequenceNumber: 1656662972682001, timeOffset: 8600, jpegThumbnail: thumb,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: false,
}
}
}} , { quoted: m })
        }
        break
        
case 'tqto': 
 let tq = `Spesial Thanks For \n Okta \n Hyuu \n Salman \n Fauzi \n Adrian \n Aldo \n Lutfi \n Tio \n Levian \n Malix \n Zaenarshi\n`
 var call = {
 scheduledCallCreationMessage: {
 callType: 2,
 scheduledTimestampMs: `${moment(1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`,
 title: `${tq}`
 }
}
conn.relayMessage(m.chat, call, {})
break
            case 'sc':
            case 'script':
               conn.relayMessage(m.chat, {
                "requestPaymentMessage": {
                    amount: {
                        value: 2022000,
                        offset: 0,
                        currencyCode: 'IDR'
                    },
                    amount1000: 1000000000000000,
                    background: null,
                    currencyCodeIso4217: 'USD',
                    expiryTimestamp: 0,
                    noteMessage: {
                        extendedTextMessage: {
                            text: 
                            
                            `Pengen Sc ${namabot}?\nDownload di Yt Kaiser\n\nhttps://youtube.com/@im-kaiser\nJangan lupa subscribe ya`
                        }
                    },
                    requestFrom: m.sender
                }
            }, {})
            break
        // Group Fitur
            case 'antilinkv2':
                if (!m.isGroup) return kaiserReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return kaiserReply(mess.admin)
                if (args.length < 1) return kaiserReply(`Example ${prefix + command} on/off`)
                if (q == 'on'){
                    global.db.data.group[m.chat].antilinkv2 = true
                    kaiserReply(`Berhasil Mengaktifkan antilinkv2`)
                } else if (q == 'off'){
                    global.db.data.group[m.chat].antilinkv2 = false
                    kaiserReply(`Berhasil Mematikan antilinkv2`)
                }
            break
            case 'kick': {
                if (!m.isGroup) return kaiserReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => kaiserReply(jsonformat(res))).catch((err) => kaiserReply(jsonformat(err)))
            }
            break
            case 'add': {
                if (!m.isGroup) return kaiserReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => kaiserReply(jsonformat(res))).catch((err) => kaiserReply(jsonformat(err)))
            }
            break
            case 'culik': {
                if (args.length < 1) return kaiserReply('_*Masukin id grupnya tolol*_')
                let pantek = []
                for (let i of groupMembers) {
                    pantek.push(i.jid)
                }
                conn.groupParticipantsUpdate(args[0], pantek)
            }
            break
            case 'promote': {
                if (!m.isGroup) return kaiserReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => kaiserReply(jsonformat(res))).catch((err) => kaiserReply(jsonformat(err)))
            }
            break
            case 'demote': {
                if (!m.isGroup) return kaiserReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => kaiserReply(jsonformat(res))).catch((err) => kaiserReply(jsonformat(err)))
            }
            break
            case 'block': {
                if (!isCreator) return kaiserReply(mess.owner)
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.updateBlockStatus(users, 'block').then((res) => kaiserReply(jsonformat(res))).catch((err) => kaiserReply(jsonformat(err)))
            }
            break
            case 'unblock': {
                if (!isCreator) return kaiserReply(mess.owner)
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.updateBlockStatus(users, 'unblock').then((res) => kaiserReply(jsonformat(res))).catch((err) => kaiserReply(jsonformat(err)))
            }
            break
            case 'setname':
            case 'setsubject': {
                if (!m.isGroup) return kaiserReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                if (!text) return 'Text ?'
                await conn.groupUpdateSubject(m.chat, text).then((res) => kaiserReply(mess.success)).catch((err) => kaiserReply(jsonformat(err)))
            }
            break
            case 'setdesc':
            case 'setdesk': {
                if (!m.isGroup) return kaiserReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                if (!text) return 'Text ?'
                await conn.groupUpdateDescription(m.chat, text).then((res) => kaiserReply(mess.success)).catch((err) => kaiserReply(jsonformat(err)))
            }
            break
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc': {
            if (!m.isGroup) return kaiserReply(mess.group)
            if (!isAdmins) return kaiserReply(mess.admin)
            if (!isBotAdmins) return kaiserReply(mess.botAdmin)
            if (!quoted) return kaiserReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
            if (!/image/.test(mime)) return kaiserReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
            if (/webp/.test(mime)) return kaiserReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
            var mediz = await conn.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
            if (args[0] == `/panjang`) {
            var { img } = await generateProfilePicture(mediz)
            await conn.query({
            tag: 'iq',
            attrs: {
            to: m.chat,
            type:'set',
            xmlns: 'w:profile:picture'
            },
            content: [
            {
            tag: 'picture',
            attrs: { type: 'image' },
            content: img
            }
            ]
            })
            fs.unlinkSync(mediz)
            reply(`Sukses`)
            } else {
            var memeg = await conn.updateProfilePicture(m.chat, { url: mediz })
            fs.unlinkSync(mediz)
            reply(`Sukses`)
            }
            }
            break
            case 'tagall': {
                if (!m.isGroup) return kaiserReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                let teks = `*👥 Tag All By Admin*
 
                 🗞️ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                    teks += `• @${mem.id.split('@')[0]}\n`
                }
                conn.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                
            }
            break
            case 'hidetag': {
                if (!m.isGroup) return kaiserReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                conn.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            }
            break
            case 'totag': {
               if (!m.isGroup) return kaiserReply(mess.group)
               if (!isBotAdmins) return mess.botAdmin
               if (!isAdmins) return mess.admin
               if (!m.quoted) return `Reply pesan dengan caption ${prefix + command}`
               conn.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break
            case 'antilink': {
                if (!m.isGroup) return kaiserReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                if (args[0] === "on") {
                    if (db.data.group[m.chat].antilink) return kaiserReply(`Sudah Aktif Sebelumnya 🕊️`)
                    db.data.group[m.chat].antilink = true
                    kaiserReply(`Antilink Group WhatsApp Aktif 🕊️`)
                } else if (args[0] === "off") {
                    if (!db.data.group[m.chat].antilink) return kaiserReply(`Sudah Nonaktif Sebelumnya 🕊`)
                    db.data.group[m.chat].antilink = false
                    kaiserReply(`Antilink Group WhatsApp Nonaktif 🕊️`)
                } else {
                    kaiserReply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
                }
            }
            break
            case 'antilinkyt': {
                if (!m.isGroup) return kaiserReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                if (args[0] === "on") {
                    if (db.data.group[m.chat].antilinkyt) return kaiserReply(`Sudah Aktif Sebelumnya 🕊`)
                    db.data.group[m.chat].antilinkyt = true
                    kaiserReply(`Antilink YouTube Aktif 🕊️`)
                } else if (args[0] === "off") {
                    if (!db.data.group[m.chat].antilinkyt) return kaiserReply(`Sudah Nonaktif Sebelumnya 🕊`)
                    db.data.group[m.chat].antilinkyt = false
                    kaiserReply(`Antilink YouTube Nonaktif 🕊️`)
                } else {
                    kaiserReply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
                }
            }
            break
            case 'antilinktt': {
                if (!m.isGroup) return kaiserReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                if (args[0] === "on") {
                    if (db.data.group[m.chat].antilinktt) return kaiserReply(`Sudah Aktif Sebelumnya 🕊`)
                    db.data.group[m.chat].antilinktt = true
                    kaiserReply(`Antilink TikTok Aktif 🕊️`)
                } else if (args[0] === "off") {
                    if (!db.data.group[m.chat].antilinktt) return kaiserReply(`Sudah Nonaktif Sebelumnya 🕊`)
                    db.data.group[m.chat].antilinktt = false
                    kaiserReply(`Antilink TikTok Nonaktif 🕊️`)
                } else {
                    kaiserReply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
                }
            }
            break
            case 'mutegc': {
                if (!m.isGroup) return kaiserReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                if (args[0] === "on") {
                    if (db.data.group[m.chat].mute) return kaiserReply(`Sudah Aktif Sebelumnya 🕊`)
                    db.data.group[m.chat].mute = true
                    kaiserReply(`${ntiktok} telah di mute di group ini 🕊️`)
                } else if (args[0] === "off") {
                    if (!db.data.group[m.chat].mute) return kaiserReply(`Sudah Tidak Aktif Sebelumnya 🕊`)
                    db.data.group[m.chat].mute = false
                    kaiserReply(`${ntiktok} telah di unmute di group ini 🕊️`)
                } else {
                   kaiserReply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
                }
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) return kaiserReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                if (args[0] === '1') {
                    await conn.groupToggleEphemeral(m.chat, 1*24*3600).then((res) => kaiserReply(jsonformat(res))).catch((err) => kaiserReply(jsonformat(err)))
                } else if (args[0] === '7') {
                    await conn.groupToggleEphemeral(m.chat, 7*24*3600).then((res) => kaiserReply(jsonformat(res))).catch((err) => kaiserReply(jsonformat(err)))
                } else if (args[0] === '90') {
                    await conn.groupToggleEphemeral(m.chat, 90*24*3600).then((res) => kaiserReply(jsonformat(res))).catch((err) => kaiserReply(jsonformat(err)))
                } else if (args[0] === 'off') {
                    await conn.groupToggleEphemeral(m.chat, 0).then((res) => kaiserReply(jsonformat(res))).catch((err) => kaiserReply(jsonformat(err)))
                } else {
                let sections = [
                {
                title: "CHANGE EFFECTIVE GROUP",
                rows: [
                {title: "⌲ Ephemeral 1 day", rowId: `ephemeral 1`, description: `Activate the ephemeral group for 1 day`},
                {title: "⌲ Ephemeral 7 day's", rowId: `ephemeral 7`, description: `Activate the ephemeral group for 7 day's`},
                {title: "⌲ Ephemeral 90 days's", rowId: `ephemeral 90`, description: `Activate the ephemeral group for 90 day's`},
                {title: "⌲ Ephemeral Off", rowId: `ephemeral off`, description: `Deactivate this Ephemeral group`}
                ]
                },
                ]
                conn.sendListMsg(m.chat, `Please select the following Ephemeral Options List !`, ntiktok, `Hello Admin ${groupMetadata.subject}`, `Touch Me (⁠≧⁠▽⁠≦⁠)`, sections, m)
                }
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) return kaiserReply(mess.owner)
                if (!text) return `Text mana?\n\nContoh : ${prefix + command} Akame ><`
                let getGroups = await conn.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                kaiserReply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      let buttons = [{ buttonId: 'donasi', buttonText: { displayText: '👑Sewa' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: '❗Rules' }, type: 1 }]
                await conn.sendButtonText(i, buttons, txt, ntiktok, m, {quoted: m})
                }
                kaiserReply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) return kaiserReply(mess.owner)
                if (!text) return `Text mana?\n\nContoh : ${prefix + command} Akame ><`
                let anu = await store.chats.all().map(v => v.id)
                kaiserReply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		    for (let yoi of anu) {
		            await sleep(1500)
		            let txt = `「 Broadcast Bot 」\n\n${text}`
                    let buttons = [{ buttonId: 'donasi', buttonText: { displayText: '👑Sewa' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: '❗Rules' }, type: 1 }]
                    await conn.sendButtonText(yoi, buttons, txt, ntiktok, m, {quoted: m})
            }
		    kaiserReply('Sukses Broadcast')
            }
            break
            case 'group':
            case 'grup': {
                if (!m.isGroup) return kaiserReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                if (args[0] === 'close') {
                    await conn.groupSettingUpdate(m.chat, 'announcement').then((res) => kaiserReply(`Sukses Menutup Group 🕊️`)).catch((err) => kaiserReply(jsonformat(err)))
                } else if (args[0] === 'open') {
                    await conn.groupSettingUpdate(m.chat, 'not_announcement').then((res) => kaiserReply(`Sukses Membuka Group 🕊️`)).catch((err) => kaiserReply(jsonformat(err)))
                } else {
                  kaiserReply(`Mode ${command}\n\n\nKetik ${prefix + command}open/close`)
                }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) return kaiserReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                if (args[0] === 'open') {
                    await conn.groupSettingUpdate(m.chat, 'unlocked').then((res) => kaiserReply(`Sukses Membuka Edit Info Group 🕊️`)).catch((err) => kaiserReply(jsonformat(err)))
                } else if (args[0] === 'close') {
                    await conn.groupSettingUpdate(m.chat, 'locked').then((res) => kaiserReply(`Sukses Menutup Edit Info Group 🕊️`)).catch((err) => kaiserReply(jsonformat(err)))
                } else {
                    kaiserReply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
                }
            }
            break
            case 'linkgroup':
            case 'linkgrup':
            case 'linkgc': {
                if (!m.isGroup) return kaiserReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                let response = await conn.groupInviteCode(m.chat)
                conn.sendText(m.chat, `👥 *INFO LINK GROUP*\n📛 *Nama :* ${groupMetadata.subject}\n👤 *Owner Grup :* ${groupMetadata.owner !== undefined ? '@' + groupMetadata.owner.split`@`[0] : 'Tidak diketahui'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Link Chat :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, m,  {
                    detectLink: true
                })
            }
            break
            case 'revoke': {
                if (!m.isGroup) return kaiserReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                await conn.groupRevokeInvite(m.chat)
                    .then(res => {
                        kaiserReply(`Sukses Menyetel Ulang, Tautan Undangan Grup ${groupMetadata.subject}`)
                    }).catch((err) => kaiserReply(jsonformat(err)))
                    }
            break
            case 'listonline':
            case 'liston': {
                if (!m.isGroup) kaiserReply(mess.group)
                let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                let online = [...Object.keys(store.presences[id]), botNumber]
                conn.sendText(m.chat, '⏰ List Online:\n\n' + online.map(v => '🌱 @' + v.replace(/@.+/, '')).join`\n`, m, {
                    mentions: online
                })
            }
            break
        // Fun Fitur 
            case 'lookup': 
                if (!text) return kaiserReply(`Masukkan Domain/Sub Domain!\n\n*Contoh:* light-garden.my.id`)

  if (text.includes('https://') || text.includes('http://')) return kaiserReply(`Tolong masukkan domain/sub domain secara lengkap. Contoh: light-garden.my.id`)

  try {
    // fetch pertama
    const api_key = 'E4/gdcfciJHSQdy4+9+Ryw==JHciNFemGqOVIbyv';
    const res1 = await fetch(`https://api.api-ninjas.com/v1/dnslookup?domain=${text}`, {
      headers: { 'X-Api-Key': api_key },
      contentType: 'application/json'
    })
    .then(response => response.text())
    .catch(error => {
      console.log(error);
      return fetch(`https://api.hackertarget.com/dnslookup/?q=${text}`)
      .then(response => response.text())
      .then(data => {
       kaiserReply(`*Ini Adalah Hasil Dns Lookup Untuk ${text}:*\n${data}`);
        console.log(data);
      })
      .catch(error => {
        console.error(error);
        kaiserReply('*Tidak dapat memproses permintaan DNS Lookup*');
      });
    });
    kaiserReply(`*Ini Adalah Hasil Dns Lookup Untuk ${text}:*\n${res1}`);
    console.log(res1);

  } catch (error) {
    console.log(error);
    kaiserReply('*Invalid data!*');
  }
        break
            case 'apakah': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                kaiserReply(`🚩 1 Limit Used`)
                if (!q) return kaiserReply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
                const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
                const kah = apa[Math.floor(Math.random() * apa.length)]
                kaiserReply(`Pertanyaan : Apakah ${q}\nJawaban : ${kah}`)
                }
                break
            case 'bisakah': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                kaiserReply(`🚩 1 Limit Used`)
                if (!q) return kaiserReply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
                const bisa = ['Bisa', 'Gak Bisa', 'Gak Bisa Ajg Aaokawpk', 'TENTU PASTI KAMU BISA!!!!']
                const ga = bisa[Math.floor(Math.random() * bisa.length)]
                kaiserReply(`Pertanyaan : Apakah ${q}\nJawaban : ${ga}`)
                }
                break
            case 'bagaimanakah': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                kaiserReply(`🚩 1 Limit Used`)
                if (!q) return kaiserReply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
                const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel', 'astaghfirallah Beneran???', 'Pusing ah', 'Owhh Begitu:(', 'Yang Sabar Ya Bos:(', 'Gimana yeee']
                const ya = gimana[Math.floor(Math.random() * gimana.length)]
                kaiserReply(`Pertanyaan : Apakah ${q}\nJawaban : ${ya}`)
                }
            break
            case 'rate': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                kaiserReply(`🚩 1 Limit Used`)
                if (!q) return kaiserReply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
                const ra = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
                const te = ra[Math.floor(Math.random() * ra.length)]
                kaiserReply(`Rate : ${q}\nJawaban : *${te}%*`)
                }
            break
            
            case 'gantengcek':
            case 'cekganteng': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                kaiserReply(`🚩 1 Limit Used`)
                if (!q) return kaiserReply(`Penggunaan ${command} Nama\n\nContoh : ${command} Owner`)
                const gan = ['10% banyak" perawatan ya bang:v\nCanda Perawatan:v','30% Semangat bang Merawat Dirinya><','20% Semangat Ya bang👍','40% Wahh bang><','50% abang Ganteng deh><','60% Hai Ganteng🐊','70% Hai Ganteng🐊','62% Bang Ganteng><','74% abang ni ganteng deh><','83% Love You abang><','97% Assalamualaikum Ganteng🐊','100% Bang Pake Susuk ya??:v','29% Semangat Bang:)','94% Hai Ganteng><','75% Hai Bang Ganteng','82% wihh abang Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
                const teng = gan[Math.floor(Math.random() * gan.length)]
                kaiserReply(`Nama : ${q}\nJawaban : *${teng}%`)
                }
            break
                
            case 'cantikcek':
            case 'cekcantik': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                kaiserReply(`🚩 1 Limit Used`)
                if (!q) return kaiserReply(`Penggunaan ${command} Nama\n\nContoh : ${command} Akame`)
                const can = ['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
                const tik = can[Math.floor(Math.random() * can.length)]
                kaiserReply(`Nama : ${q}\nJawaban : *${tik}%`)
                }
            break
            
            case 'sangecek':
            case 'ceksange':
            case 'gaycek':
            case 'cekgay':
            case 'lesbicek':
            case 'ceklesbi': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                kaiserReply(`🚩 1 Limit Used`)
                if (!q) return kaiserReply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
                const sangeh = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
                const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
                kaiserReply(`Nama : ${q}\nJawaban : *${sange}%*`)
                }
            break
                
            case 'kapankah': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                kaiserReply(`🚩 1 Limit Used`)
                if (!q) return kaiserReply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
                const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`]
                const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
                kaiserReply(`Pertanyaan : ${q}\nJawaban : *${kapankah}*`)
                }
            break
            
            case 'wangy': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                kaiserReply(`🚩 1 Limit Used`)
                if (!q) return kaiserReply(`Contoh : .wangy Riy`)
                qq = q.toUpperCase()
                awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
                kaiserReply(awikwok)
                }
            break
            
            case 'cekmati': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                kaiserReply(`🚩 1 Limit Used`)
                if (!q) return kaiserReply(`Invalid!\n\nYg mau di cek siapa kontol?`)
                predea = await axios.get(`https://api.agify.io/?name=${q}`)
                kaiserReply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
                }
            break
            
            case 'halah':
            case 'hilih':
            case 'huluh':
            case 'heleh':
            case 'holoh': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 2
                kaiserReply(`🚩 2 Limit Used`)
                if (!m.quoted && !text) return kaiserReply(`Kirim/reply text dengan caption ${prefix + command}`)
                ter = command[1].toLowerCase()
                tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
                kaiserReply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
                }
            break
         //Mengfess
                            case "confess": case 'menfes': case 'menfess':{
var mona = args.join(' ')
var m1 = mona.split("|")[0]
	let mq1 = m1 + '@s.whatsapp.net'
  this.menfes = this.menfes ? this.menfes : {}
  roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))   
  if (roof) return kaiserReply("Kamu masih berada dalam sesi menfess")
	if (m.isGroup) return kaiserReply('Terjadi Kesalahan Fitur Khusus Private message ')
			if (!text) return kaiserReply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|62895328123417|Aku sayang kamu\n`)
			if (!text.includes('|')) return kaiserReply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|62895328123417|Aku sayang kamu\n`)
			let [namaNya, nomorNya, pesanNya] = text.split`|`
			if (nomorNya.startsWith('0')) return kaiserReply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|62895328123417|Aku sayang kamu\n`)
			if(isNaN(nomorNya)) return kaiserReply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|62895328123417|Aku sayang kamu\n`)
			var yoi = `Halo 👋, ada kiriman menfess nih\n\nPengirim : ${namaNya}\nPesan : ${pesanNya}\n\n*Gunakan Fitur Ini Untuk :*\n.terimamenfess (menerima menfes)\n.tolakmenfess (menolak menfess)\n.stopmenfess (berhenti dari sesi menfess)\n\n*Pesan ini di tulis oleh seseorang, bot hanya menyampaikan saja*`
			let tod = await getBuffer('https://telegra.ph/file/69abe85aecb8ca46b0ceb.jpg') 
let id = m.sender
            this.menfes[id] = {
               id,
               a: m.sender,
               b: nomorNya + "@s.whatsapp.net",
               state: 'WAITING'
}
		 await conn.sendMessage(nomorNya + '@s.whatsapp.net',  {image: tod, caption:yoi }, {})
           kaiserReply(`友 Sukses Pesan Telah Dikirim Ke Nomer Tujuan`)
			}
			break  
            
        // ISLAMIN FITUR
            case 'iqra': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 3
                kaiserReply(`🚩 1 Limit Used`)
                oh = `Contoh : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
                if (!text) return kaiserReply(oh)
                yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
                conn.sendMessage(m.chat, {
                    document: yy,
                    mimetype: 'application/pdf',
                    fileName: `iqra${text}.pdf`
                }, {
                    quoted: m
                }).catch((err) => kaiserReply(oh))
            }
            break
            case 'juzamma': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 3
                kaiserReply(`🚩 1 Limit Used`)
                if (args[0] === 'pdf') {
                    kaiserReply(mess.wait)
                    conn.sendMessage(m.chat, {
                        document: {
                            url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'
                        },
                        mimetype: 'application/pdf',
                        fileName: 'juz-amma-arab-latin-indonesia.pdf'
                    }, {
                        quoted: m
                    })
                } else if (args[0] === 'docx') {
                    kaiserReply(mess.wait)
                    conn.sendMessage(m.chat, {
                        document: {
                            url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'
                        },
                        mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                        fileName: 'juz-amma-arab-latin-indonesia.docx'
                    }, {
                        quoted: m
                    })
                } else if (args[0] === 'pptx') {
                    kaiserReply(mess.wait)
                    conn.sendMessage(m.chat, {
                        document: {
                            url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'
                        },
                        mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                        fileName: 'juz-amma-arab-latin-indonesia.pptx'
                    }, {
                        quoted: m
                    })
                } else if (args[0] === 'xlsx') {
                    kaiserReply(mess.wait)
                    conn.sendMessage(m.chat, {
                        document: {
                            url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'
                        },
                        mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                        fileName: 'juz-amma-arab-latin-indonesia.xlsx'
                    }, {
                        quoted: m
                    })
                } else {
                    kaiserReply(`Mau format apa ? Contoh : ${prefix + command} pdf\nFormat yang tersedia : pdf, docx, pptx, xlsx`)
                }
            }
            break
            case 'hadis':
            case 'hadist': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 3
                kaiserReply(`🚩 1 Limit Used`)
                if (!args[0]) return kaiserReply(`Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`)
                if (!args[1]) return kaiserReply(`Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`)
                try {
                    let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
                    let {
                        number,
                        arab,
                        id
                    } = res.find(v => v.number == args[1])
                    kaiserReply(`No. ${number}

${arab}

${id}`)
                } catch (e) {
                    kaiserReply(`Hadis tidak ditemukan !`)
                }
            }
            break
            case 'tafsirsurah': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                kaiserReply(`🚩 1 Limit Used`)
                if (!args[0]) return `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
                if (!args[1]) return `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
                let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
                let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
                kaiserReply(txt)
            }
            break
            case 'asmaulhusna':
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 3
                kaiserReply(`🚩 3 Limit Used`)
            kaiserReply(mess.wait)
			axios
				.get(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${apikey}`)
				.then(({ data }) => {
					var text = `No : ${data.result.index}\n`
					text += `Latin: ${data.result.latin}\n`
					text += `Arab : ${data.result.ar}\n`
					text += `Indonesia : ${data.result.id}\n`
					text += `English : ${data.result.en}`
					kaiserReply(text)
				})
				.catch(console.error)
			break
			
			case 'alquranaudio': {
			    if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 3
                kaiserReply(`🚩 3 Limit Used`)
                if (args.length == 0) return kaiserReply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
                kaiserReply(mess.wait)
                conn.sendMessage(m.chat, { audio: { url: `https://api.lolhuman.xyz/api/quran/audio/${args[0]}?apikey=${apikey}`}, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
            }
            break
            
            case 'alquran':
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 3
            kaiserReply(`🚩 3 Limit Used`)
			if (args.length < 1) return kaiserReply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
			kaiserReply(mess.wait)
			axios
				.get(`https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${apikey}`)
				.then(({ data }) => {
					var ayat = data.result.ayat
					var text = `QS. ${data.result.surah} : 1-${ayat.length}\n\n`
					for (var x of ayat) {
						text += `${x.arab}\n${x.ayat}. ${x.latin}\n${x.indonesia}\n\n`
					}
					text = text.replace(/<u>/g, '_').replace(/<\/u>/g, '_')
					text = text.replace(/<strong>/g, '*').replace(/<\/strong>/g, '*')
					kaiserReply(text)
				})
				.catch(console.error)
            break
            
			case 'jadwalsolat': {
			if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 3
            kaiserReply(`🚩 3 Limit Used`)
            if (!text) return kaiserReply('Mana Kotanya?')
            kaiserReply(mess.wait)
            let anu = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${text}?apikey=${apikey}`)
            kaiserReply(`Wilayah: ${anu.result.wilayah}\n\nTanggal: ${anu.result.tanggal}\nSahur: ${anu.result.sahur}\nImsak: ${anu.result.imsak}\nTerbit: ${anu.result.terbit}\nDhuha: ${anu.result.dhuha}\nDzuhur: ${anu.result.dzuhur}\nAshar: ${anu.result.ashar}\nMagrib: ${anu.result.maghrib}\nIsya: ${anu.result.isya}`)
            }
            break
            
            case 'kisahnabi':
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 3
            kaiserReply(`🚩 3 Limit Used`)
			if (args.length == 0) return kaiserReply(`Example: ${prefix + command} Muhammad`)
			kaiserReply(mess.wait)
			axios
				.get(`https://api.lolhuman.xyz/api/kisahnabi/${full_args}?apikey=${apikey}`)
				.then(({ data }) => {
					var text = `Name : ${data.result.name}\n`
					text += `Lahir : ${data.result.thn_kelahiran}\n`
					text += `Umur : ${data.result.age}\n`
					text += `Tempat : ${data.result.place}\n`
					text += `Story : \n${data.result.story}`
					kaiserReply(text)
				})
				.catch(console.error)
			break
			
            case 'listsurah':
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 3
            kaiserReply(`🚩 3 Limit Used`)
            kaiserReply(mess.wait)
			axios
				.get(`https://api.lolhuman.xyz/api/quran?apikey=${apikey}`)
				.then(({ data }) => {
					var text = 'List Surah:\n'
					for (var x in data.result) {
						text += `${x}. ${data.result[x]}\n`
					}
					kaiserReply(text)
				})
				.catch(console.error)
			break
			
			// DOWNLOADER FITUR
			case 'pindl':
			case 'pindownload': {
			    if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                kaiserReply(`🚩 5 Limit Used`)
			    if (args.length == 0) return kaiserReply(`Contoh: ${prefix + command} https://pin.it/3E5fARH`)
			    let anu = axios.get(`https://api.lolhuman.xyz/api/pinterestdl?apikey=${apikey}&url=${full_args}`).then(({ data }) => {
			    conn.sendMessage(m.chat, { video: { url: data.result }, caption: `${namabot}`}, { quoted: fkontak })
			    })
			    }
			break
			case 'git': case 'gitclone': {
			    if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                kaiserReply(`🚩 5 Limit Used`)
                if (!args[0]) return kaiserReply(`Mana link nya?\nContoh :\n${prefix}${command} https://github.com/YukiShima4/tes`)
                if (!isUrl(args[0]) && !args[0].includes('github.com')) return kaiserReply(`Link invalid!!`)
                let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
                let [, user, repo] = args[0].match(regex1) || []
                repo = repo.replace(/.git$/, '')
                let url = `https://api.github.com/repos/${user}/${repo}/zipball`
                let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
                conn.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
            }       
            break
		/*	case 'ytplay':
			case 'play':
			if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 10
            kaiserReply(`🚩 10 Limit Used`)
			if (args.length == 0) return await kaiserReply(`Example: ${prefix + command} melukis senja`)
			kaiserReply(mess.wait)
			axios
				.get(`https://api.lolhuman.xyz/api/ytsearch?apikey=${apikey}&query=${full_args}`)
				.then(({ data }) => {
					axios.get(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${apikey}&url=https://www.youtube.com/watch?v=${data.result[0].videoId}`).then(({ data }) => {
						var caption = `❖ Title    : *${data.result.title}*\n`
						caption += `❖ Size     : *${data.result.size}*`
						conn.sendMessage(m.chat, { image: { url: data.result.thumbnail }, caption }).then(() => {
							conn.sendMessage(m.chat, { audio: { url: data.result.link }, mimetype: 'audio/mp4', fileName: `${data.result.title}.mp3` })
						})
					})
				})
				.catch(console.error)
			break*/
            case 'play': case 'song':
                if (!q) return kaiserReply("Kirim perintah judul lagu/link youtube nya bwang")
try {
let rus = await yts(q)
if (rus.all.length == "0") return setReply("Video tidak bisa di download")
let data = await rus.all.filter(v => v.type == 'video')
try{
var res = data[0]
var info = await ytdl.getInfo(res.url);
} catch{
var res = data[1]
var info = await ytdl.getInfo(res.url);
}
let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
try{
var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/hqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/default.jpg`
}
let inithumb = await getBuffer(thumbnya)
let teks = `* Y O U T U B E - M P 3*

• Channel : ${res.author.name}
• Viewers : ${h2k(res.views)} Kali
• Duration : ${res.timestamp}
• Url : ${res.url}`


conn.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true, 
title: `${res.title}`,
body: `${date}`,																													
mediaType: 2,  
renderLargerThumbnail : true,
thumbnail: inithumb,
mediaUrl: res.url,
sourceUrl: res.url
}}, image: {url: inithumb},text: teks},{quoted: m})                                        
downloadMp3(`${res.url}`) 
} catch (err){
console.log(err)
kaiserReply(`Server sedang error`)
}
                break
               /* case'play': case 'song': case 'yts': {
    if (!text) return kaiserReply('*Masukan Judul / Link Dari YouTube!*')
    kaiserReply(mess.wait)
    try {
    var search = await youtube(text);
    var convert = search.videos[0];
    if (!convert) return kaiserReply('Video/Audio not found')
    if (convert.seconds >= 3600) {
    return kaiserReply('Video is longer than 1 hour!');
    } else {
    var audioUrl
    try {
    audioUrl = `https://aemt.me/downloadAudio?URL=${convert.url}&videoName=ytdl`
    } catch (e) {
    audioUrl = `https://yt.tioo.eu.org/youtube?url=${convert.url}&filter=audioonly&quality=highestaudio&contenttype=audio/mpeg`
    }
   /** var build = await fetch(convert.thumbnail)
    var buffer = await build.buffer()
    var image = await uploadImage(buffer) 
    var caption = `${sp} Title : ${convert.title}\n${sp} Ext : Search\n${ta} ID : ${convert.videoId}\n${sp} Duration : ${convert.timestamp}\n${sp} Viewers : ${convert.views}\n${sp} Upload At : ${convert.ago}\n${sp} Author : ${convert.author.name}\n${sp} Channel : ${convert.author.url}\n${sp} Url : ${convert.url}\n${sp} Description : ${convert.description}\n${sp} Thumbnail: ${convert.image}`;
    var pesan = conn.relayMessage(m.chat, { extendedTextMessage:{ text: caption, contextInfo: { externalAdReply: { title: "Powered by", mediaType: 1, previewType: 0, renderLargerThumbnail: true,thumbnailUrl: convert.image, sourceUrl: `${convert.url}` }}, mentions: [m.sender]}}, {})
    conn.sendMessage(m.chat, { audio: { url: audioUrl }, mimetype: 'audio/mpeg', }, { quoted: m });
    }
    } catch (e) {
    kaiserReply(`*Error:* ` + e);
    } 
    }
    break*/
			
			case 'ytmp3':
			if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            kaiserReply(`🚩 5 Limit Used`)
			if (args.length == 0) return kaiserReply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
			kaiserReply(mess.wait)
			axios
				.get(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${apikey}&url=${args[0]}`)
				.then(({ data }) => {
					var caption = `❖ Title    : *${data.result.title}*\n`
					caption += `❖ Size     : *${data.result.size}*`
					conn.sendMessage(m.chat, { image: { url: data.result.thumbnail }, caption }).then(() => {
						conn.sendMessage(m.chat, { audio: { url: data.result.link }, mimetype: 'audio/mp4', fileName: `${data.result.title}.mp3` })
					})
				})
				.catch(console.error)
			break
			
		    case 'ytmp4':
		    if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            kaiserReply(`🚩 5 Limit Used`)
			if (args.length == 0) return kaiserReply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
			kaiserReply(mess.wait)
			axios
				.get(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${apikey}&url=${args[0]}`)
				.then(({ data }) => {
					var caption = `❖ Title    : *${data.result.title}*\n`
					caption += `❖ Size     : *${data.result.size}*`
					conn.sendMessage(m.chat, { image: { url: data.result.thumbnail }, caption }).then(() => {
						conn.sendMessage(m.chat, { video: { url: data.result.link }, mimetype: 'video/mp4', fileName: `${data.result.title}.mp4` })
					})
				})
				.catch(console.error)
			break
			
			case 'tiktok':
            case 'tt':
            case 'tiktokvid':
            case 'ttdl':{
			if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            kaiserReply(`🚩 5 Limit Used`)
			if (args.length == 0) return kaiserReply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
			kaiserReply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
				conn.sendMessage(m.chat, { video: { url: data.result.link }, mimetype: 'video/mp4' })
			})
			
			}
			break
			
			case 'tiktokaudio': {
			if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            kaiserReply(`🚩 5 Limit Used`)
			if (args.length == 0) return kaiserReply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
			kaiserReply(mess.wait)
			conn.sendMessage(m.chat, { audio: { url: `https://api.lolhuman.xyz/api/tiktokmusic?apikey=${apikey}&url=${args[0]}` }, mimetype: 'audio/mp4', fileName: `${data.result.title}.mp3` })
			
			}
			break
			
			case 'igdl':
            case 'ig':
            case 'instagram':{
			if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
			reply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/instagram?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
				var url = data.result[0]
				if (url.includes('.mp4')) {
					okta.sendMessage(m.chat, { video: { url }, mimetype: 'video/mp4' })
				} else {
					okta.sendMessage(m.chat, { image: { url } })
				}
			})
			
            }
			break
			
		    case 'igdl2': 
            case 'ig2':{
		    if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            kaiserReply(`🚩 5 Limit Used`)
			if (args.length == 0) return kaiserReply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
			kaiserReply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/instagram2?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
				for (var x of data.result) {
					if (x.includes('.mp4')) {
						conn.sendMessage(m.chat, { video: { url: x }, mimetype: 'video/mp4' })
					} else {
						conn.sendMessage(m.chat, { image: { url: x } })
					}
				}
			})
			
			}
			break
			
			case 'twtdl':
            case 'twitter':
            case 'twittervid':{
			if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            kaiserReply(`🚩 5 Limit Used`)
			if (args.length == 0) return kaiserReply(`Example: ${prefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`)
			kaiserReply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/twitter?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
				conn.sendMessage(m.chat, { video: { url: data.result.link[data.result.link.length - 1].link }, mimetype: 'video/mp4' })
			})
			
			}
			break
			
		    case 'fbdl': 
            case 'fb':{
		    if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            kaiserReply(`🚩 5 Limit Used`)
			if (args.length == 0) return kaiserReply(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
			kaiserReply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/facebook?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
				conn.sendMessage(m.chat, { video: { url: data.result }, mimetype: 'video/mp4' })
			})
			
			}
			break
			
			// Tools Fitur
            case 'ip':
                if (!text) return kaiserReply (`*Example:* .${command} 112.90.150.204`)
  try {
    let res = await fetch(`https://ipwho.is/${text}`).then(result => result.json());
    await conn.sendMessage(m.chat, { location: { degreesLatitude: res.latitude, degreesLongitude: res.longitude }},{ ephemeralExpiration: 604800 });
    await delay(2000);
    conn.reply(m.chat, JSON.stringify(res, null, 2), m);  
  } catch (e) { 
    throw { error: `IP ${text} not found!` };
  }
                break
            case 'hapus': 
            case 'delete': 
            case 'del': 
            case 'd': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                kaiserReply(`🚩 1 Limit Used`)
                if (!m.quoted) return false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return kaiserReply('Pesan tersebut bukan dikirim oleh bot!')
                conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            
            case 'q':
            case 'quoted': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                kaiserReply(`🚩 1 Limit Used`)
                if (!m.quoted) return kaiserReply('Reply Pesannya!!')
                let wokwol = await conn.serializeM(await m.getQuotedObj())
                if (!wokwol.quoted) return kaiserReply('Pesan Yang Anda Reply Tidak Mengandung Reply')
                await wokwol.quoted.copyNForward(m.chat, true)
            }
            break
            
            case 'ebinary': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 3
                kaiserReply(`🚩 3 Limit Used`)
                let {
                    eBinary
                } = require('./lib/binary')
                let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
                let eb = await eBinary(teks)
                kaiserReply(eb)
            }
            break
            case 'dbinary': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 3
                kaiserReply(`🚩 3 Limit Used`)
                let {
                    dBinary
                } = require('./lib/binary')
                let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
                let db = await dBinary(teks)
                kaiserReply(db)
            }
            break
            
            case 'ss':
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 3
            kaiserReply(`🚩 3 Limit Used`)
			if (args.length == 0) return kaiserReply(`Example: ${prefix + command} https://api.lolhuman.xyz`)
			conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/ssweb?apikey=${apikey}&url=${args[0]}`}, caption: `URL: ${args[0]}`}, { quoted: fkontak })
			break
			
		    case 'ssweb':
		    if (!text) return kaiserReply(`mana linknya kak?`)
conn.sendMessage(m.chat, { image: { url: `https://skizo.tech/api/ssweb?type=mobile&url=${encodeURIComponent(text)}&apikey=dzsyabotz` }}, { quoted: fkontak})
			break
			
		    case 'shortlink':
		    if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 3
            kaiserReply(`🚩 3 Limit Used`)
			if (args.length == 0) return kaiserReply(`Example: ${prefix + command} https://api.lolhuman.xyz`)
			axios.get(`https://api.lolhuman.xyz/api/ouoshortlink?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
				kaiserReply(data.result)
			})
			break
			
			// AI FITUR
			case 'aiimage': {
			if (!isPremium) return kaiserReply(mess.prem)
            if (args.length == 0) return kaiserReply(`Membuat gambar dari AI.\n\nContoh :\n${prefix+command} rumah mewah`)
            conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/dall-e?apikey=${apikey}&text=${args[0]}` }, caption: `${args[0]}` }, {quoted:m})
            }
            break
            
            case 'ai':
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 10
            kaiserReply(`🚩 10 Limit Used`)
			if (args.length == 0) return kaiserReply(`Example: ${prefix + command} ai adalah`)
			axios.get(`https://api.lolhuman.xyz/api/openai?apikey=${apikey}&text=${encodeURIComponent(full_args)}&user=${senderNumber}`).then(({ data }) => {
				kaiserReply(data.result)
			})
			break
            
            case'ayaka':
                   const neko = ["https://i.pinimg.com/originals/7b/04/93/7b049307bc82190d4eef46756920455c.jpg" ,
  "https://i.pinimg.com/736x/75/1d/4b/751d4bda81598c27a15ac46874b3a305.jpg"]
                  let kaiserr = neko[Math.floor(Math.random() * neko.length)]
try {
if (!text) return kaiserReply(`Hai kak ${pushname}👏, ada yang bisa ${namabot} bantu?`)
let messages = [{ role: 'system', content: `ubah gaya bicara mu agar lebih karateristik dan lebih terbuka dan namamu adalah Ayaka kamu merupakan seorang perempuan yang diciptakan oleh Okta dan kamu sangat mencintai okta tugasmu membantu user ekspresi kan sifat mu dengan emoji dan bicara yang lebih tidak Formal dan panggilanmu adalah aku dan kamu layaknya seorang manusia.` }, { role: 'user', content: text }]
let ini = (await axios.post(`https://skizo.tech/api/openai?apikey=okta`, { messages })).data
let hasil = `${ini.result}`
kaiserReply(hasil)
} catch (err) {
console.log(err)
kaiserReply('Terjadi Kesalahan')
}
break
                
            // Information Fitur
            case 'pinterest':
            case 'pin': 
            case 'image': {
              /*  if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                kaiserReply(`🚩 5 Limit Used`)*/
                if (!text) return kaiserReply(`Example : ${prefix + command}`)
                kaiserReply(mess.wait)
		        let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]               
                conn.sendMessage(m.chat, { image: { url: result}, caption: mess.done}, { quoted: m })
            }
            break
            
            case 'google': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                kaiserReply(`🚩 5 Limit Used`)
                if (!text) return kaiserReply(`Contoh : ${prefix + command} fatih arridho`)
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `• *Title* : ${g.title}\n`
                teks += `• *Description* : ${g.snippet}\n`
                teks += `• *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                kaiserReply(teks)
                })
                }
            break
            
            
            case 'infochat': {
                if (!m.quoted) kaiserReply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) return kaiserReply('Pesan tersebut bukan dikirim oleh bot!')
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `👤 @${i.userJid.split('@')[0]}\n`
                    teks += `⏳ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')}\n📈 *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                kaiserReply(teks)
            }
            break
            
            case 'kbbi':{
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            kaiserReply(`🚩 5 Limit Used`)
			if (args.length == 0) return kaiserReply(`Example: ${prefix + command} kursi`)
			kaiserReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/kbbi?apikey=${apikey}&query=${full_args}`)
			var titid = `\`\`\`Kata : ${data.result[0].nama}\`\`\`\n`
			titid += `\`\`\`Kata Dasar : ${data.result[0].kata_dasar}\`\`\`\n`
			titid += `\`\`\`Pelafalan : ${data.result[0].pelafalan}\`\`\`\n`
			titid += `\`\`\`Bentuk Tidak Baku : ${data.result[0].bentuk_tidak_baku}\`\`\`\n\n`
			for (var x of data.result) {
				titid += `\`\`\`Kode : ${x.makna[0].kelas[0].kode}\`\`\`\n`
				titid += `\`\`\`Kelas : ${x.makna[0].kelas[0].nama}\`\`\`\n`
				titid += `\`\`\`Artinya : \n${x.makna[0].kelas[0].deskripsi}\`\`\`\n\n`
				titid += `\`\`\`Makna Lain : \n${x.makna[0].submakna}\`\`\`\n `
				titid += `\`\`\`Contoh Kalimat : \n${x.makna[0].contoh}\`\`\`\n`
			}
			kaiserReply(titid)
			}
			break
		case 'brainly':{
		    if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            kaiserReply(`🚩 5 Limit Used`)
			if (args.length == 0) return kaiserReply(`Example: ${prefix + command} siapakah sukarno`)
			kaiserReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/brainly?apikey=${apikey}&query=${full_args}`)
			var ti  = 'Beberapa Pembahasan Dari Brainly :\n\n'
			for (var x of data.result) {
				ti  += `==============================\n`
				ti  += `\`\`\`Pertanyaan :\`\`\`\n${x.question.content}\n\n`
				ti  += `\`\`\`Jawaban :\`\`\`\n${x.answer[0].content}\n`
				ti  += `==============================\n\n`
			}
			kaiserReply(ti )
			}
			break
		    case 'roboguru':{
		    if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            kaiserReply(`🚩 5 Limit Used`)
			if (args.length == 0) return kaiserReply(`Example: ${prefix + command} siapakah sukarno`)
			kaiserReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/roboguru?apikey=${apikey}&query=${full_args}&grade=sma&subject=sejarah`).catch((err) => console.error(err?.response?.data))
			var tit = 'Beberapa Pembahasan Dari Roboguru :\n\n'
			for (var x of data.result) {
				tit += `==============================\n`
				tit += `\`\`\`Pertanyaan :\`\`\`\n${x.question}\n\n`
				tit += `\`\`\`Jawaban :\`\`\`\n${x.answer}\n`
				tit += `==============================\n\n`
			}
			kaiserReply(tit)
			}
			break
			
		    case 'jarak':{
		    if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            kaiserReply(`🚩 5 Limit Used`)
			if (args.length == 0) return kaiserReply(`Example: ${prefix + command} jakarta - yogyakarta`)
			var titt1 = full_args.split('-')[0].trim()
			var titt2 = full_args.split('-')[1].trim()
			kaiserReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/jaraktempuh?apikey=${apikey}&kota1=${titt1}&kota2=${titt2}`)
			var titt = `Informasi Jarak dari ${titt1} ke ${titt2} :\n\n`
			titt += `\`\`\`◪ Asal :\`\`\` ${data.result.from.name}\n`
			titt += `\`\`\`◪ Garis Lintang :\`\`\` ${data.result.from.latitude}\n`
			titt += `\`\`\`◪ Garis Bujur :\`\`\` ${data.result.from.longitude}\n\n`
			titt += `\`\`\`◪ Tujuan :\`\`\` ${data.result.to.name}\n`
			titt += `\`\`\`◪ Garis Lintang :\`\`\` ${data.result.to.latitude}\n`
			titt += `\`\`\`◪ Garis Bujur :\`\`\` ${data.result.to.longitude}\n\n`
			titt += `\`\`\`◪ Jarak Tempuh :\`\`\` ${data.result.jarak}\n`
			titt += `\`\`\`◪ Waktu Tempuh :\`\`\`\n`
			titt += `   ╭───────────────❏\n`
			titt += `❍┤ Kereta Api : ${data.result.kereta_api}\n`
			titt += `❍┤ Pesawat : ${data.result.pesawat}\n`
			titt += `❍┤ Mobil : ${data.result.mobil}\n`
			titt += `❍┤ Motor : ${data.result.motor}\n`
			titt += `❍┤ Jalan Kaki : ${data.result.jalan_kaki}\n`
			titt += `   ╰───────────────❏\n`
			kaiserReply(titt)
			}
			break
			
			case 'wikipedia':
			if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            kaiserReply(`🚩 5 Limit Used`)
			if (args.length == 0) return kaiserReply(`Example: ${prefix + command} Tahu`)
			kaiserReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/wiki?apikey=${apikey}&query=${full_args}`)
			kaiserReply(data.result)
			break
			
		    case 'translate':{
		    if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            kaiserReply(`🚩 5 Limit Used`)
			if (args.length == 0) return kaiserReply(`Example: ${prefix + command} en Tahu Bacem`)
			kaiserReply(mess.wait)
			var kode_negara = args[0]
			args.shift()
			var tittt = args.join(' ')
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${apikey}&text=${tittt}`)
			init_txt = `From : ${data.result.from}\n`
			init_txt += `To : ${data.result.to}\n`
			init_txt += `Original : ${data.result.original}\n`
			init_txt += `Translated : ${data.result.translated}\n`
			init_txt += `Pronunciation : ${data.result.pronunciation}\n`
			kaiserReply(init_txt)
			}
			break
			
		    case 'jadwaltv':
		    if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            kaiserReply(`🚩 5 Limit Used`)
			if (args.length == 0) return kaiserReply(`Example: ${prefix + command} RCTI`)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/jadwaltv/${args[0]}?apikey=${apikey}`)
			kaiserReply(mess.wait)
			var titttt = `Jadwal TV ${args[0].toUpperCase()}\n`
			for (var x in data.result) {
				titttt += `${x} - ${data.result[x]}\n`
			}
			kaiserReply(titttt)
			break
			
		    case 'jadwaltvnow':
		    if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            kaiserReply(`🚩 5 Limit Used`)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=${apikey}`)
			kaiserReply(mess.wait)
			var tittttt = `Jadwal TV Now :\n`
			for (var x in data.result) {
				tittttt += `${x.toUpperCase()}${data.result[x]}\n\n`
			}
			kaiserReply(tittttt)
			break
			
		    case 'newsinfo':{
		    if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            kaiserReply(`🚩 5 Limit Used`)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/newsinfo?apikey=${apikey}`)
			kaiserReply(mess.wait)
			var titttttt = 'Result :\n'
			for (var x of data.result) {
				titttttt += `Title : ${x.title}\n`
				titttttt += `Author : ${x.author}\n`
				titttttt += `Source : ${x.source.name}\n`
				titttttt += `Url : ${x.url}\n`
				titttttt += `Published : ${x.publishedAt}\n`
				titttttt += `Description : ${x.description}\n\n`
			}
			kaiserReply(titttttt)
			}
			break
			
		    case 'cnnindonesia':{
		    if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            kaiserReply(`🚩 5 Limit Used`)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/cnnindonesia?apikey=${apikey}`)
			kaiserReply(mess.wait)
			var tittttttt = 'Result :\n'
			for (var x of data.result) {
				tittttttt += `Judul : ${x.judul}\n`
				tittttttt += `Link : ${x.link}\n`
				tittttttt += `Tipe : ${x.tipe}\n`
				tittttttt += `Published : ${x.waktu}\n\n`
			}
			kaiserReply(tittttttt)
			}
			break
			
		    case 'cnnnasional':{
		    if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            kaiserReply(`🚩 5 Limit Used`)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/cnnindonesia/nasional?apikey=${apikey}`)
			kaiserReply(mess.wait)
			var titttttttt = 'Result :\n'
			for (var x of data.result) {
				titttttttt += `Judul : ${x.judul}\n`
				titttttttt += `Link : ${x.link}\n`
				titttttttt += `Tipe : ${x.tipe}\n`
				titttttttt += `Published : ${x.waktu}\n\n`
			}
			kaiserReply(titttttttt)
			}
			break
			
		    case 'cnninternasional':{
		    if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            kaiserReply(`🚩 5 Limit Used`)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/cnnindonesia/internasional?apikey=${apikey}`)
			kaiserReply(mess.wait)
			var tittttttttt = 'Result :\n'
			for (var x of data.result) {
				tittttttttt += `Judul : ${x.judul}\n`
				tittttttttt += `Link : ${x.link}\n`
				tittttttttt += `Tipe : ${x.tipe}\n`
				tittttttttt += `Published : ${x.waktu}\n\n`
			}
			kaiserReply(tittttttttt)
			}
			break
			
		    case 'infogempa':
		    if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            kaiserReply(`🚩 5 Limit Used`)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/infogempa?apikey=${apikey}`)
			kaiserReply(mess.wait)
			var caption = `Lokasi : ${data.result.lokasi}\n`
			caption += `Waktu : ${data.result.waktu}\n`
			caption += `Potensi : ${data.result.potensi}\n`
			caption += `Magnitude : ${data.result.magnitude}\n`
			caption += `Kedalaman : ${data.result.kedalaman}\n`
			caption += `Koordinat : ${data.result.koordinat}`
			conn.sendMessage(m.chat, { image: { url: data.result.map }, caption })
			break
			
		    case 'lirik':
		    if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 3
            kaiserReply(`🚩 3 Limit Used`)
			if (args.length == 0) return kaiserReply(`Example: ${prefix + command} Melukis Senja`)
			kaiserReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/lirik?apikey=${apikey}&query=${full_args}`)
			kaiserReply(data.result)
			break
			
		    case 'infocuaca':{
		    if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            kaiserReply(`🚩 5 Limit Used`)
			if (args.length == 0) return kaiserReply(`Example: ${prefix + command} Yogyakarta`)
			kaiserReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/cuaca/${args[0]}?apikey=${apikey}`)
			var titttttttttt = `Tempat : ${data.result.tempat}\n`
			titttttttttt += `Cuaca : ${data.result.cuaca}\n`
			titttttttttt += `Angin : ${data.result.angin}\n`
			titttttttttt += `Description : ${data.result.description}\n`
			titttttttttt += `Kelembapan : ${data.result.kelembapan}\n`
			titttttttttt += `Suhu : ${data.result.suhu}\n`
			titttttttttt += `Udara : ${data.result.udara}\n`
			titttttttttt += `Permukaan laut : ${data.result.permukaan_laut}\n`
			conn.sendMessage(m.chat, { location: { degreesLatitude: data.result.latitude, degreesLongitude: data.result.longitude } })
			kaiserReply(titttttttttt)
			}
			break
			
			case 'kodepos':
			if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 2
            kaiserReply(`🚩 2 Limit Used`)
			if (args.length == 0) return kaiserReply(`Example: ${prefix + command} Slemanan or ${prefix + command} 66154`)
			kaiserReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/kodepos?apikey=${apikey}&query=${full_args}`)
			var tittttttttttt = `Provinsi : ${data.result[0].province}\n`
			tittttttttttt += `Kabupaten : ${data.result[0].city}\n`
			tittttttttttt += `Kecamatan : ${data.result[0].subdistrict}\n`
			tittttttttttt += `Kelurahan : ${data.result[0].urban}\n`
			tittttttttttt += `Kode Pos : ${data.result[0].postalcode}`
			kaiserReply(tittttttttttt)
			break
			
		    case 'jadwalbola':
		    if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 7
            kaiserReply(`🚩 7 Limit Used`)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/jadwalbola?apikey=${apikey}`)
			kaiserReply(mess.wait)
			var titttttttttttt = 'Jadwal Bola :\n'
			for (var x of data.result) {
				titttttttttttt += `Pada : ${x.time}\n`
				titttttttttttt += `Event : ${x.event}\n`
				titttttttttttt += `Match : ${x.match}\n`
				titttttttttttt += `TV : ${x.tv}\n\n`
			}
			kaiserReply(titttttttttttt)
			break
			
			// ANIME FITUR
			case 'genshin':
			if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 15
            kaiserReply(`🚩 15 Limit Used`)
			if (args.length == 0) return kaiserReply(`Example: ${prefix + command} jean`)
			kaiserReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/genshin/${full_args}?apikey=${apikey}`)
			var caption = `Name : ${data.result.title}\n`
			caption += `Intro : ${data.result.intro}\n`
			caption += `Icon : ${data.result.icon}\n`
			await conn.sendMessage(m.chat, { image: { url: data.result.cover1 }, caption })
			await conn.sendMessage(m.chat, { audio: { url: data.result.cv[0].audio[0] }, mimetype: 'audio/mp4' })
			break
			
			// CONVERT FITUR
			
			case 'qc': {
			if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 7
            kaiserReply(`🚩 7 Limit Used`)
            const { quote } = require('./lib/quote.js')
            if (!q) return ('Masukan Text')
            let ppnyauser = await await conn.profilePictureUrl(m.sender, 'image').catch(_=> 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
            const rest = await quote(q, pushname, ppnyauser)
            kaiserReply(mess.wait)
            conn.sendImageAsSticker(m.chat, rest.result, m, { packname: `${global.packname}`, author: `${global.author}`})
            }
            break
            
            
			case 'sticker':
            case 'stiker':
            case 's':{
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 10
                kaiserReply(`🚩 10 Limit Used`)
                if (!quoted) return kaiserReply(`Balas Video/Image Dengan Caption ${prefix + command}`)
                kaiserReply(mess.wait)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await conn.sendImageAsSticker(m.chat, media, m, {
                        packname: global.packname,
                        author: global.author
                    })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return kaiserReply('Maksimal 10 detik!')
                    let media = await quoted.download()
                    let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, {
                        packname: global.packname,
                        author: global.author
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return kaiserReply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
            }
            break
            
            case 'smeme': {
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) return kaiserReply(respond)
            if (!text) return kaiserReply(respond)
	        kaiserReply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await conn.downloadAndSaveMediaMessage(qmsg)
	        let fatGans = await TelegraPh(dwnld)
	        let smeme = `https://api.lolhuman.xyz/api/memecreator?apikey=${apikey}&text1=${bawah}&text2=${atas}&img=${fatGans}`
	        conn.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
            }
	        break
	             
            case 'swm': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                kaiserReply(`🚩 5 Limit Used`)
                let [teks1, teks2] = text.split`|`
                if (!teks1) return kaiserReply(`Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`)
                if (!teks2) return kaiserReply(`Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`)
            	kaiserReply(mess.wait)
                if (/image/.test(mime)) {
                    let media = await conn.downloadMediaMessage(qmsg)
                    let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return kaiserReply('Maksimal 10 detik!')
                    let media = await conn.downloadMediaMessage(qmsg)
                    let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else {
                    return kaiserReply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
            }
            break
            
            case 'emojimix': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 3
                kaiserReply(`🚩 3 Limit Used`)
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return kaiserReply(`Contoh : ${prefix + command} 😅+🤔`)
                if (!emoji2) return kaiserReply(`Contoh : ${prefix + command} 😅+🤔`)
                kaiserReply(mess.wait)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await conn.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
                
            }
            break
            
            case 'emojimix2': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 3
                kaiserReply(`🚩 3 Limit Used`)
                if (!text) return kaiserReply(`Contoh : ${prefix + command} 😅`)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
                for (let res of anu.results) {
                    let encmedia = await conn.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
                
            }
            break
            
            case 'attp':
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                kaiserReply(`🚩 5 Limit Used`)
                try {
                if (args.length == 0) return kaiserReply(`Example: ${prefix + command} Kaiser`)
                await conn.sendMessage(m.chat, {sticker: {url:`https://api.lolhuman.xyz/api/attp?apikey=${apikey}&text=${full_args}` }}, { quoted: m })
            } catch (e) {
                kaiserReply(mess.error)
            }
            break
            case 'attp2':
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            kaiserReply(`🚩 5 Limit Used`)
                try {
                    if (args.length == 0) return kaiserReply(`Example: ${prefix + command} Kaiser`)
                    await conn.sendMessage(m.chat, {sticker: {url:`https://api.lolhuman.xyz/api/attp2?apikey=${apikey}&text=${full_args}` }}, { quoted: m })
                } catch (e) {
                    kaiserReply(mess.error)
            }
            break
            case 'ttp':
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            kaiserReply(`🚩 5 Limit Used`)
                try {
                    if (args.length == 0) return kaiserReply(`Example: ${prefix + command} Kaiser`)
                    await conn.sendMessage(m.chat, {sticker: {url:`https://api.lolhuman.xyz/api/ttp?apikey=${apikey}&text=${full_args}` }}, { quoted: m })
                } catch (e) {
                    kaiserReply(mess.error)
            }
            break
            
            case 'toimage': 
            case 'toimg': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 2
            kaiserReply(`🚩 2 Limit Used`)
                if (!/webp/.test(mime)) return kaiserReply(`Reply sticker dengan caption *${prefix + command}*`)
                kaiserReply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    conn.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
                
            }
            break
	        case 'tomp4': 
	        case 'tovideo': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 2
            kaiserReply(`🚩 2 Limit Used`)
                if (!/webp/.test(mime)) return kaiserReply(`Reply stiker dengan caption *${prefix + command}*`)
                kaiserReply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await conn.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
                
            }
            break
            
            case 'toaud': 
            case 'toaudio': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 2
            kaiserReply(`🚩 2 Limit Used`)
            if (!/video/.test(mime) && !/audio/.test(mime)) return kaiserReply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
            kaiserReply(mess.wait)
            let media = await conn.downloadMediaMessage(qmsg)
            let audio = await toAudio(media, 'mp4')
            conn.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            
            }
            break
            
            case 'tomp3': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 9
            kaiserReply(`🚩 9 Limit Used`)
            if (!/video/.test(mime) && !/audio/.test(mime)) return kaiserReply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
            kaiserReply(mess.wait)
            let media = await conn.downloadMediaMessage(qmsg)
            let audio = await toAudio(media, 'mp4')
            conn.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Audio.mp3`}, { quoted : m })
            
            }
            break
            
            case 'tovn': 
            case 'toptt': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 8
            kaiserReply(`🚩 8 Limit Used`)
            if (!/video/.test(mime) && !/audio/.test(mime)) return kaiserReply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
            kaiserReply(mess.wait)
            let media = await conn.downloadMediaMessage(qmsg)
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            conn.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            
            }
            break
            
            case 'togif': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                kaiserReply(`🚩 5 Limit Used`)
                if (!/webp/.test(mime)) return kaiserReply(`Reply stiker dengan caption *${prefix + command}*`)
                kaiserReply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await conn.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
                
            }
            break
            
	        case 'tourl': {
	            if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                kaiserReply(`🚩 5 Limit Used`)
                kaiserReply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    kaiserReply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    kaiserReply(util.format(anu))
                }
                await fs.unlinkSync(media)
                
            }
            break
            
            // Stalk Fitur
            case 'igstalk': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 10
            kaiserReply(`🚩 10 Limit Used`)
			if (args.length == 0) return kaiserReply(`Example: ${prefix + command} whyzzxy`)
			kaiserReply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/stalkig/${args[0]}?apikey=${apikey}`).then(({ data }) => {
				var caption = `Username : ${data.result.username}\n`
				caption += `Full Name : ${data.result.fullname}\n`
				caption += `Posts : ${data.result.posts}\n`
				caption += `Followers : ${data.result.followers}\n`
				caption += `Following : ${data.result.following}\n`
				caption += `Bio : ${data.result.bio}`
				conn.sendMessage(m.chat, { image: { url: data.result.photo_profile }, caption })
			})
			
			}
			break

            case 'ttstalk': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 10
            kaiserReply(`🚩 10 Limit Used`)
			if (args.length == 0) return kaiserReply(`Example: ${prefix + command} dryan.pu`)
			kaiserReply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/stalktiktok/${args[0]}?apikey=${apikey}`).then(({ data }) => {
				var caption = `Username : ${data.result.username}\n`
				caption += `Nickname : ${data.result.nickname}\n`
				caption += `Followers : ${data.result.followers}\n`
				caption += `Followings : ${data.result.followings}\n`
				caption += `Likes : ${data.result.likes}\n`
				caption += `Video : ${data.result.video}\n`
				caption += `Bio : ${data.result.bio}\n`
				conn.sendMessage(m.chat, { image: { url: data.result.user_picture }, caption })
			})
			
			}
			break
			
			case 'mlstalk': {
			if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 10
            kaiserReply(`🚩 10 Limit Used`)
			if (args.length == 0) return kaiserReply(`Example: ${prefix + command} 84830127/2169`)
			kaiserReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/mobilelegend/${args[0]}?apikey=${apikey}`)
			kaiserReply(data.result)
			
			}
			break
			
			case 'ghstalk': {
			if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 10
            kaiserReply(`🚩 10 Limit Used`)
			if (args.length == 0) return kaiserReply(`Example: ${prefix + command} Kaiser`)
			kaiserReply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/github/${args[0]}?apikey=${apikey}`).then(({ data }) => {
				var caption = `Name : ${data.result.name}\n`
				caption += `Link : ${data.result.url}\n`
				caption += `Public Repo : ${data.result.public_repos}\n`
				caption += `Public Gists : ${data.result.public_gists}\n`
				caption += `Followers : ${data.result.followers}\n`
				caption += `Following : ${data.result.following}\n`
				caption += `Bio : ${data.result.bio}`
				conn.sendMessage(m.chat, { image: { url: data.result.avatar }, caption })
			})
			
			}
			break
			
		    case 'twstalk': {
		    if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 10
            kaiserReply(`🚩 10 Limit Used`)
			if (args.length == 0) return kaiserReply(`Example: ${prefix + command} jokowi`)
			kaiserReply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/twitter/${args[0]}?apikey=${apikey}`).then(({ data }) => {
				var caption = `Username : ${data.result.screen_name}\n`
				caption += `Name : ${data.result.name}\n`
				caption += `Tweet : ${data.result.tweet}\n`
				caption += `Joined : ${data.result.joined}\n`
				caption += `Followers : ${data.result.followers}\n`
				caption += `Following : ${data.result.following}\n`
				caption += `Like : ${data.result.like}\n`
				caption += `Description : ${data.result.description}`
				conn.sendMessage(m.chat, { image: { url: data.result.profile_picture }, caption })
			})
			
			}
			break
		
            case 'ktpmaker':
			if (!isPremium) kaiserReply(mess.prem)
			  if (args.length == 0) return kaiserReply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|LoL Human|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
			  kaiserReply(mess.wait)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/ktpmaker?apikey=${apikey}&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
                    conn.sendMessage(m.chat, { image: { url: ini_buffer}, caption: `Done?`}, {quoted: m})
            break
            
		    case 'darkjoke':
		    if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            kaiserReply(`🚩 5 Limit Used`)
			kaiserReply(mess.wait)
                conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/meme/darkjoke?apikey=${apikey}`}, caption: `Done?`}, {quoted: m})
            break

			case 'meme':
			if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            kaiserReply(`🚩 5 Limit Used`)
			kaiserReply(mess.wait)
                conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/random/meme?apikey=${apikey}`}, caption: `Done?`}, {quoted: m})
            break
            
			case 'memeindo':
			if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            kaiserReply(`🚩 5 Limit Used`)
                kaiserReply(mess.wait)
                conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/meme/memeindo?apikey=${apikey}`}, caption: `Done?`}, {quoted: m})
            break
			
			
			// Ramdon Foto
			case 'art':
            case 'bts':
            case 'exo':
            case 'elf':
            case 'loli':
            case 'neko':
            case 'waifu':
            case 'shota':
            case 'husbu':
            case 'sagiri':
            case 'shinobu':
            case 'megumin':
            case 'wallnime': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 12
                kaiserReply(`🚩 12 Limit Used`)
				if (!isPremium) return kaiserReply(mess.prem)
				kaiserReply(mess.wait)
				conn.sendMessage(m.chat, { image: { url: `http://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}`}, caption: `Random image for ${command}`})
		    }
	        break
	        
	        // Creator Image
	        case 'bucinsertifikat':
		    case 'sertifikatbucin':
			case 'bucincert':
			    if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                kaiserReply(`🚩 5 Limit Used`)
				if (args.length == 0) return kaiserReply(`Example: ${prefix + command} Justimun Kentod`)
				kaiserReply(mess.wait)
				kueri = args.join(" ")
                conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/bucinserti?apikey=${apikey}&name=${kueri}`}, caption: 'Sertifikatnya kack'}, {quoted: m})
            break
            
			case 'tololsert':
			case 'tololcert':
			case 'tololsertifikat':
			if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            kaiserReply(`🚩 5 Limit Used`)
			if (args.length == 0) return kaiserReply(`Example: ${prefix + command} Justimun Kentod`)
			kaiserReply(mess.wait)
			ytta = args.join(" ")
            conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/toloserti?apikey=${apikey}&name=${ytta}`}, caption: 'Sertifikatnya kack'}, {quoted: m})
            break
            
			case 'pacarsertifikat':
			case 'pacarcert':
			if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            kaiserReply(`🚩 5 Limit Used`)
            if (args.length == 0) return kaiserReply(`Usage: ${prefix + command} nama1|nama2`)
            kaiserReply(mess.wait)
                get_args = args.join(" ").split("|")
                nik = get_args[0]
                prov = get_args[1]
			    titidnya = `Selamat yaa ${nik} ❤️ ${prov}`
            conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/pacarserti?apikey=${apikey}&name1=${nik}&name2=${prov}`}, caption: titidnya}, {quoted: m})
            break
	        
	        case 'carbon':
	            if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 8
                kaiserReply(`🚩 8 Limit Used`)
	            if (!q) return kaiserReply(`Example: ${prefix + command} Kaiser`)
	            kaiserReply(mess.wait)
	            conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/carbon?apikey=${apikey}&code=${q}&language=nodejs`}, caption: `By Kaiser\n\n\nCode:\n\n${q}`}, {quoted: m})
	        break
	     
	    // Ephoto1
	    case 'wetglass':
		case 'multicolor3d':
		case 'watercolor':
		case 'luxurygold':
		case 'galaxywallpaper':
		case 'lighttext':
		case 'beautifulflower':
		case 'puppycute':
		case 'royaltext':
		case 'heartshaped':
		case 'birthdaycake':
		case 'galaxystyle':
		case 'hologram3d':
		case 'greenneon':
		case 'glossychrome':
		case 'greenbush':
		case 'metallogo':
		case 'noeltext':
		case 'glittergold':
		case 'textcake':
		case 'starsnight':
		case 'wooden3d':
		case 'textbyname':
		case 'writegalacy':
		case 'galaxybat':
		case 'snow3d':
		case 'birthdayday':
		case 'goldplaybutton':
		case 'silverplaybutton':
		case 'freefire':
		    if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 15
            kaiserReply(`🚩 15 Limit Used`)
			if (args.length == 0) return kaiserReply(`Example: ${prefix + command} Kaiser `)
			kaiserReply(mess.wait)
			conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${apikey}&text=${args}`}, caption: `By Kaiser\n\n Type: ${command}\n\nText: ${args}`}, { quoted: m })
			break

        case 'shadow':
		case 'cup':
		case 'cup1':
		case 'romance':
		case 'smoke':
		case 'burnpaper':
		case 'lovemessage':
		case 'undergrass':
		case 'love':
		case 'coffe':
		case 'woodheart':
		case 'woodenboard':
		case 'summer3d':
		case 'wolfmetal':
		case 'nature3d':
		case 'underwater':
		case 'golderrose':
		case 'summernature':
		case 'letterleaves':
		case 'glowingneon':
		case 'fallleaves':
		case 'flamming':
		case 'harrypotter':
		case 'carvedwood':
		    if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 12
            kaiserReply(`🚩 12 Limit Used`)
			if (args.length == 0) return kaiserReply(`Example: ${prefix + command} Kaiser`)
			kaiserReply(mess.wait)
			conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${apikey}&text=${args}`}, caption: `By Kaiser\n\n Type: ${command}\n\nText: ${args}`}, { quoted: m})
			break

    // Text Prome
        case 'pornhub':
		case 'glitch':
		case 'avenger':
		case 'space':
		case 'ninjalogo':
		case 'marvelstudio':
		case 'lionlogo':
		case 'wolflogo':
		case 'steel3d':
		case 'wallgravity':
		    if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 15
            kaiserReply(`🚩 15 Limit Used`)
			if (args.length == 0) return kaiserReply(`Example: ${prefix + command} Kaiser`)
			kaiserReply(mess.wait)
			conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${apikey}&text1=${args[0]}&text2=${args[1]}`}, caption: `By Kaiser\n\n Type: ${command}\n\nText: ${args}`}, { quoted: m })
			break

        case 'blackpink':
		case 'neon':
		case 'greenneon':
		case 'advanceglow':
		case 'futureneon':
		case 'sandwriting':
		case 'sandsummer':
		case 'sandengraved':
		case 'metaldark':
		case 'neonlight':
		case 'holographic':
		case 'text1917':
		case 'minion':
		case 'deluxesilver':
		case 'newyearcard':
		case 'bloodfrosted':
		case 'halloween':
		case 'jokerlogo':
		case 'fireworksparkle':
		case 'natureleaves':
		case 'bokeh':
		case 'toxic':
		case 'strawberry':
		case 'box3d':
		case 'roadwarning':
		case 'breakwall':
		case 'icecold':
		case 'luxury':
		case 'cloud':
		case 'summersand':
		case 'horrorblood':
		case 'thunder':
		    if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 12
            kaiserReply(`🚩 12 Limit Used`)
			if (args.length == 0) return kaiserReply(`Example: ${prefix + command} Kaiser`)
			kaiserReply(mess.wait)
			conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/textprome/${command}?apikey=${apikey}&text=${args}` }, caption: `Created By Kaiser\n\n Type: ${command}\n\nText: ${args}`}, { quoted: m })
			break
	    
	        case 'akira':
            case 'akiyama':
            case 'ana':
            case 'asuna':
            case 'ayuzawa':
            case 'boruto':
            case 'chitoge':
            case 'deidara':
            case 'doraemon':
            case 'elaina':
            case 'emilia':
            case 'erza':
            case 'gremory':
            case 'hestia':
            case 'hinata':
            case 'inori':
            case 'isuzu':
            case 'itachi':
            case 'itori':
            case 'kaga':
            case 'kagura':
            case 'kakasih':
            case 'kaori':
            case 'keneki':
            case 'kotori':
            case 'kurumi':
            case 'loli':
            case 'madara':
            case 'mikasa':
            case 'miku':
            case 'minato':
            case 'naruto':
            case 'nezuko':
            case 'onepiece':
            case 'pokemon':
            case 'rize':
            case 'sagiri':
            case 'sakura':
            case 'sasuke':
            case 'shina':
            case 'shinka':
            case 'shizuka':
            case 'shota':
            case 'toukachan':
            case 'tsunade':
            case 'yuki': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                kaiserReply(`🚩 5 Limit Used`)
                kaiserReply(mess.wait)
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/${command}.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                conn.sendMessage(m.chat, { image: { url: result}, caption: (mess.done) }, { quoted: m })
        }
        break
            case 'aesthetic':
            case 'anjing':
            case 'blankpink':
            case 'boneka':
            case 'darkjokes':
            case 'hekel':
            case 'justina':
            case 'kpop':
            case 'kucing':
            case 'mobil':
            case 'motor':
            case 'pubg':
            case 'rose':
            case 'ryujin':
            case 'wallhp': {
            kaiserReply(mess.wait)
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Image/${command}.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                conn.sendMessage(m.chat, { image: { url: result}, caption: mess.done }, { quoted: m })
            }
        break
			case 'cyberspace':
            case 'mountain':
            case 'programming':
            case 'technology': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            kaiserReply(`🚩 5 Limit Used`)
            kaiserReply(mess.wait)
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Wallpaper/${command}.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                conn.sendMessage(m.chat, { image: { url: result}, caption: mess.done }, { quoted: m })
            }
            break
            case 'cecan':
            case 'china':
            case 'cogan':
            case 'indonesia':
            case 'japan':
            case 'korea':
            case 'malaysia':
            case 'thailand':
            case 'vietnam': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 10
                kaiserReply(`🚩 10 Limit Used`)
                kaiserReply(mess.wait)
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Cecan/${command}.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                conn.sendMessage(m.chat, { image: { url: result}, caption: mess.done }, { quoted: m })
            }
            break
            case 'couple': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 10
                kaiserReply(`🚩 10 Limit Used`)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                kaiserReply(mess.wait)
                let random = anu[Math.floor(Math.random() * anu.length)]
                conn.sendMessage(m.chat, {
                    image: {
                        url: random.male
                    },
                    caption: `Couple Male`
                }, {
                    quoted: m
                })
                conn.sendMessage(m.chat, {
                    image: {
                        url: random.female
                    },
                    caption: `Couple Female`
                }, {
                    quoted: m
                })
            }
            break
            
			case 'hd': {
			if (!quoted) return kaiserReply(`Fotonya Mana?`)
			if (!/image/.test(mime)) return kaiserReply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
			kaiserReply(mess.wait)
			let media = await quoted.download()
			let proses = await remini(media, "enhance");
			conn.sendMessage(m.chat, { image: proses, caption: 'Result 🍟'}, { quoted: m})
			await sleep(5000)
            }
            break
			
			case 'jadianime': {
			if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 50
            kaiserReply(`🚩 50 Limit Used`)
			kaiserReply(mess.wait)
                if (isMedia) {
                    const media = await conn.downloadAndSaveMediaMessage(quoted)
                    const anu = await TelegraPh(media)
                    await 
                    conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/imagetoanime?apikey=${apikey}&img=${anu}` }, caption: mess.done }, { quoted: m })
                } else {
                kaiserReply('Reply gambar nya bang')
                }
            }
            break
            
			case 'nomerhoki': case 'nomorhoki': {
			    if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                kaiserReply(`🚩 5 Limit Used`)
                if (!Number(text)) return kaiserReply(`Contoh : ${prefix + command} 6288292024190`)
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return kaiserReply(anu.message)
                conn.sendText(m.chat, `• *Nomor HP :* ${anu.message.nomer_hp}\n• *Angka Shuzi :* ${anu.message.angka_shuzi}\n• *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n• *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                kaiserReply(`🚩 5 Limit Used`)
                if (!text) return kaiserReply(`Contoh : ${prefix + command} belanja`)
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return kaiserReply(anu.message)
                conn.sendText(m.chat, `• *Mimpi :* ${anu.message.mimpi}\n• *Arti :* ${anu.message.arti}\n• *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                kaiserReply(`🚩 5 Limit Used`)
                if (!text) return kaiserReply(`Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return kaiserReply(anu.message)
                conn.sendText(m.chat, `• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                kaiserReply(`🚩 5 Limit Used`)
                if (!text) return kaiserReply(`Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return kaiserReply(anu.message)
                conn.sendText(m.chat, `• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                kaiserReply(`🚩 5 Limit Used`)
                if (!text) return kaiserReply(`Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return kaiserReply(anu.message)
                conn.sendText(m.chat, `• *Nama Suami :* ${anu.message.suami.nama}\n• *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n• *Nama Istri :* ${anu.message.istri.nama}\n• *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                kaiserReply(`🚩 5 Limit Used`)
                if (!text) return kaiserReply(`Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return kaiserReply(anu.message)
                conn.sendText(m.chat, `• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                kaiserReply(`🚩 5 Limit Used`)
                if (!text) return kaiserReply(`Contoh : ${prefix + command} Dika Ardianta`)
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return kaiserReply(anu.message)
                conn.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                kaiserReply(`🚩 5 Limit Used`)
                if (!text) return kaiserReply(`Contoh : ${prefix + command} Dika, 7, 7, 2005`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return kaiserReply(anu.message)
                conn.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Life Path :* ${anu.message.life_path}\n• *Destiny :* ${anu.message.destiny}\n• *Destiny Desire :* ${anu.message.destiny_desire}\n• *Personality :* ${anu.message.personality}\n• *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                kaiserReply(`🚩 5 Limit Used`)
                if (!text) return kaiserReply(`Contoh : ${prefix + command} Dika|Novia`)
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return kaiserReply(anu.message)
                conn.sendImage(m.chat,  anu.message.gambar, `• *Nama Anda :* ${anu.message.nama_anda}\n• *Nama Pasangan :* ${anu.message.nama_pasangan}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                kaiserReply(`🚩 5 Limit Used`)
                if (!text) return kaiserReply(`Contoh : ${prefix + command} 6, 12, 2020`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return kaiserReply(anu.message)
                conn.sendText(m.chat, `• *Tanggal Pernikahan :* ${anu.message.tanggal}\n• *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                kaiserReply(`🚩 5 Limit Used`)
                if (!ext)return kaiserReply(`Contoh : ${prefix+ command} 28, 12, 2021`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return kaiserReply(anu.message)
                conn.sendText(m.chat, `• *Lahir :* ${anu.message.hari_lahir}\n• *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                kaiserReply(`🚩 5 Limit Used`)
                if (!text) return kaiserReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return kaiserReply(anu.message)
                conn.sendText(m.chat, `• *Lahir :* ${anu.message.hari_lahir}\n• *Rezeki :* ${anu.message.rejeki}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                kaiserReply(`🚩 5 Limit Used`)
                if (!text) return kaiserReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return kaiserReply(anu.message)
                conn.sendText(m.chat, `• *Lahir :* ${anu.message.hari_lahir}\n• *Pekerjaan :* ${anu.message.pekerjaan}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                kaiserReply(`🚩 5 Limit Used`)
                if (!text) return kaiserReply(`Contoh : 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return kaiserReply(anu.message)
                conn.sendText(m.chat, `• *Analisa :* ${anu.message.analisa}\n• *Angka Akar :* ${anu.message.angka_akar}\n• *Sifat :* ${anu.message.sifat}\n• *Elemen :* ${anu.message.elemen}\n• *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                kaiserReply(`🚩 5 Limit Used`)
                if (!text) return kaiserReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return kaiserReply(anu.message)
                conn.sendText(m.chat, `• *Analisa :* ${anu.message.analisa}\n• *Sektor :* ${anu.message.sektor}\n• *Elemen :* ${anu.message.elemen}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                kaiserReply(`🚩 5 Limit Used`)
                if (!text) return kaiserReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return kaiserReply(anu.message)
                conn.sendImage(m.chat, anu.message.image, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Simbol Tarot :* ${anu.message.simbol_tarot}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                kaiserReply(`🚩 5 Limit Used`)
                if (!text) return `Contoh : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return kaiserReply(anu.message)
                conn.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tahun_lahir}\n• *Gender :* ${anu.message.jenis_kelamin}\n• *Angka Kua :* ${anu.message.angka_kua}\n• *Kelompok :* ${anu.message.kelompok}\n• *Karakter :* ${anu.message.karakter}\n• *Sektor Baik :* ${anu.message.sektor_baik}\n• *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                kaiserReply(`🚩 5 Limit Used`)
                if (!text) return kaiserReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return kaiserReply(anu.message)
                conn.sendText(m.chat, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Kala Tinantang :* ${anu.message.kala_tinantang}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                kaiserReply(`🚩 5 Limit Used`)
                if (!text) return kaiserReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return kaiserReply(anu.message)
                conn.sendText(m.chat, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                kaiserReply(`🚩 5 Limit Used`)
                if (!text) return kaiserReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return kaiserReply(anu.message)
                conn.sendText(m.chat, `• *Hari Lahir :* ${anu.message.hari_lahir}\n• *Tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Hari Naas :* ${anu.message.hari_naas}\n• *Info :* ${anu.message.catatan}\n• *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                kaiserReply(`🚩 5 Limit Used`)
                if (!text) return kaiserReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return kaiserReply(anu.message)
                conn.sendText(m.chat, `• *Hari Lahir :* ${anu.message.hari_lahir}\n• *Tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                kaiserReply(`🚩 5 Limit Used`)
                if (!text) return kaiserReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return kaiserReply(anu.message)
                conn.sendText(m.chat, `• *Hari Lahir :* ${anu.message.hari_lahir}\n• *tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Arah Rezeki :* ${anu.message.arah_rejeki}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                kaiserReply(`🚩 5 Limit Used`)
                if (!text) return kaiserReply(`Contoh : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return kaiserReply(anu.message)
                conn.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                kaiserReply(`🚩 5 Limit Used`)
                if (!text) return kaiserReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return kaiserReply(anu.message)
                conn.sendText(m.chat, `• *Tanggal :* ${anu.message.tanggal}\n• *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n• *Watak Hari :* ${anu.message.watak_hari}\n• *Naga Hari :* ${anu.message.naga_hari}\n• *Jam Baik :* ${anu.message.jam_baik}\n• *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                kaiserReply(`🚩 5 Limit Used`)
                if (!text) return kaiserReply(`Contoh : ${prefix + command} Dika, 7, 7, 2005`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return kaiserReply(anu.message)
                conn.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                kaiserReply(`🚩 5 Limit Used`)
                if (!text) return kaiserReply(`Contoh : ${prefix + command} Dika, 7, 7, 2005`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return kaiserReply(anu.message)
                conn.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                kaiserReply(`🚩 5 Limit Used`)
                if (!text) return kaiserReply(`Contoh : ${prefix + command} 12, 1, 2022`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return kaiserReply(anu.message)
                conn.sendText(m.chat, `• *Tanggal :* ${anu.message.tgl_memancing}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                kaiserReply(`🚩 5 Limit Used`)
                if (!text) return kaiserReply(`Contoh : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`)
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return kaiserReply(anu.message)
                conn.sendText(m.chat, `• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                kaiserReply(`🚩 5 Limit Used`)
                if (!text) return kaiserReply(`Contoh : ${prefix+ command} 7 7 2005`)
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') return date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return kaiserReply(anu.message)
                conn.sendText(m.chat, `• *Zodiak :* ${anu.message.zodiak}\n• *Nomor :* ${anu.message.nomor_keberuntungan}\n• *Aroma :* ${anu.message.aroma_keberuntungan}\n• *Planet :* ${anu.message.planet_yang_mengitari}\n• *Bunga :* ${anu.message.bunga_keberuntungan}\n• *Warna :* ${anu.message.warna_keberuntungan}\n• *Batu :* ${anu.message.batu_keberuntungan}\n• *Elemen :* ${anu.message.elemen_keberuntungan}\n• *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                kaiserReply(`🚩 5 Limit Used`)
                if (!text) return kaiserReply(`Contoh : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`)
                let anu = await primbon.shio(text)
                if (anu.status == false) return kaiserReply(anu.message)
                conn.sendText(m.chat, `• *Hasil :* ${anu.message}`, m)
            }
            break
            
            case 'bass': 
            case 'blown': 
            case 'deep': 
            case 'earrape': 
            case 'fast': 
            case 'fat': 
            case 'nightcore': 
            case 'reverse': 
            case 'robot': 
            case 'slow': 
            case 'smooth': 
            case 'tupai': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                kaiserReply(`🚩 5 Limit Used`)
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                kaiserReply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return kaiserReply(err)
                let buff = fs.readFileSync(ran)
                conn.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else kaiserReply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                kaiserReply(e)
                }
                }
            break
            case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return kaiserReply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 5
kaiserReply(`🚩 5 Limit Used`)
arxzy = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await conn.sendMessage(m.chat, { audio: arxzy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
case 'menu':
                function pickByNadia(list) {
return list[Math.floor(Math.random() * list.length)]
}
const quote = JSON.parse(fs.readFileSync('./media/bucin.json'))
const okta = (pickByNadia(quote))

const muach = JSON.parse(fs.readFileSync('./media/img.json'))
let mwah = (pickByNadia(muach))
let menukaiser =`
_👋ʜᴀɪ ᴋᴀᴋ *${pushname}*_
${okta}
${readmore}
┏━━  *「 ᴅᴀꜱʙᴏᴀʀᴅ 」*
┃ ❖ ɴᴀᴍᴇ: ${pushname}
┃ ❖ ᴘʀᴇꜰɪx: [ . ]
┃ ❖ ᴍᴏᴅᴇ:  ᴘᴜʙʟɪᴄ
┃ ❖ ᴊᴜᴍʟᴀʜ ᴜꜱᴇʀ: 537
┃ ❖ ʜᴀʀɪ: ${hariini}
┗━━━━━━━━━━━━━━━━━━┅

┏━━  *「 ɪɴꜰᴏ ʙᴏᴛ 」*
┃ ❖ ʙᴏᴛ ɴᴀᴍᴇ: ${namaBot}
┃ ❖ ᴅᴇᴠᴇʟᴏᴘᴇʀ ɴᴀᴍᴇ: ${namaKu}
┃ ❖ ᴠᴇʀꜱɪᴏɴ: 1.2
┗━━━━━━━━━━━━━━━━━━┅ 

© Copyright By Light Garden And All Rights Reserved 
`
conn.sendMessage(m.chat, {
 document: fs.readFileSync('./media/doc.pdf'),
fileName: namaFile,
 mimetype: 'application/pdf', 
           caption: menukaiser,
                contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
	newsletterName: namaNewsletter,
	newsletterJid: idNewsletter,
},
                     externalAdReply: {
                        title: title,
                        mediaType: 1,
                        previewType: 0,
                        renderLargerThumbnail: true,
                        thumbnailUrl: `${mwah}`,
                        sourceUrl: source
                    }
                }, mentions: [m.sender]
}, {quoted: fkontak})

                    break
            case 'lapor':
                        if (!text) return kaiserReply('Teksnya mana?')
            conn.sendMessage(`${owner}` + '@s.whatsapp.net', { text: `${text}`}, {quoted: fkontak})
kaiserReply('Pesan Anda Telah Sukses Di Kirim')
                break
            case 'all': case 'allmenu':
let menunya = `
  ${s0}
  ${s3} *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ${s3} *Tanggal:* ${hariini}
  ${s3} *Jam*: ${wib}
  ${s3} *Bailyes:* Whiskey
  ${s3} *Runtime:* ${runtime(process.uptime())}
  ${s3} *Total User:* ${Object.keys(global.db.data.users).length}
  ${s3} *Total Fitur:* ${totalFitur()}
  ${s4}
${readmore}
   ${s0}
   ${s3} *Name:* ${pushname}
   ${s3} *Number:* ${m.sender.split('@')[0]}
   ${s3} *Status:* ${isCreator ? "Owner" : "User"}
   ${s3} *User:* ${isPremium ? 'Premium' : 'Gratisan'}
   ${s3} *Limit:* ${isCreator ? 'Unlimited' : `${db.data.users[m.sender].limit}`}
   ${s4}
   ${readmore}
${all}`
                conn.sendMessage(m.chat, {
                    video: fs.readFileSync('./media/all.mp4'),
                    gifPlayback: true,
                    caption: menunya,
                    contextInfo: {
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
	newsletterName: namaNewsletter,
	newsletterJid: idNewsletter,
},
                          externalAdReply: {
                               showAdAttribution: true,
                            title: namaFile2,
                            body: `${namabot}`,
                            thumbnailUrl: 'https://telegra.ph/file/bd8eb7afd861d6b79e26b.jpg',
                            sourceUrl: source,
                            mediaType: 1,
                            renderLargerThumbnail: true
                    }}
                },
                {
                    quoted: fkontak
                })
                break
                
                default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return kaiserReply(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return kaiserReply(bang)
                    }
                    try {
                        kaiserReply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        kaiserReply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return kaiserReply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await kaiserReply(evaled)
                    } catch (err) {
                        await kaiserReply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return kaiserReply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return kaiserReply(err)
                        if (stdout) return kaiserReply(stdout)
                    })
                }
                
                if (isCmd && budy.toLowerCase() != undefined) {
                    if (m.chat.endsWith('broadcast')) return
                    if (m.isBaileys) return
                    let msgs = global.db.data.database
                    if (!(budy.toLowerCase() in msgs)) return
                    conn.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
                }
        }


    } catch (err) {
        console.log("Eror Di Bagian ayaka.js "+util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})