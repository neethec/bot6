const chalk = require('chalk')
const fs = require('fs')

global.all = `
╭───『 *O W N E R  M E N U*
│• enc *<text>*
│• pushkontak *<text>*
│• autoread *<on/off>*
│• cekapikey *<apikey>*
│• autobio *<on/off>*
│• bcgc *<text>*
│• bc *<text>*
│• lockcmd *<text>*
│• addprem *<@user>*
│• delprem *<@user>*
│• addvn *<sound>*
│• delvn *<sound>*
│• join *<link>*
│• leave *only group*
│• setexif *<package | author>*
│• setppbot *<reply | caption>*
│• setppbot full *<reply | caption>*
│• setnamabot *<text>*
│• setbiobot *<text>*
│• block *<@user>*
│• unblock *<@user>*
│• ambilsesi
│• ambilcase
│• listpc
│• listgc
│• public
│• self
│• myip
│• chat 
│• shutdown
│• bug
│•  >
│•  =>
╰──────────⳹

╭───『 *C O N V E R T  M E N U*
│• stiker *<image>*
│• swm *<image>*
│• smeme *<image>*
│• emojimix *<😫>*
│• emojimix2 *<😫+🥶>*
│• toimage *<reply sticker>*
│• tomp4 *<reply sticker>*
│• toaudio *<video>*
│• tomp3 *<video>*
│• tovn *<video>*
│• togif *<image>*
│• tourl *<media>*
╰──────────⳹

╭───『 *S T A L K E R  M E N U*
│• igstalk *<username>*
│• ttstalk *<username>*
│• mlstalk *<username>*
│• ghstalk *<username>*
│• twstalk *<username>*
╰──────────⳹

╭───『 *G R O U P  M E N U*
│• kick *<@user>*
│• add *<@user>*
│• culik *<@user>*
│• promote *<@user>*
│• demote *<@user>*
│• setname *<text>*
│• setdesc *<text>*
│• setppgc *<reply | caption>*
│• tagall *<text>*
│• hidetag *<text>*
│• totag *<text>*
│• antilink *<on/off>*
│• antilinkv2 *<on/off>*
│• antilinkyt *<on/off>*
│• antilinktt *<on/off>*
│• group *<close/open>*
│• editinfo *<text>*
│• mutegc
│• ephemeral
│• linkgc 
│• revoke
│• liston
╰──────────⳹

╭───『 *F U N   M E N U*
│• apakah *<text>*
│• bisakah *<text>*
│• bagaimanakah *<text>*
│• rate *<text>*
│• gantengcek *<text>*
│• cekganteng *<text>*
│• cantikcek *<text>*
│• cekcantik *<text>*
│• sangecek *<text>*
│• ceksange *<text>*
│• gaycek *<text>*
│• cekgay *<text>*
│• lesbicek *<text>*
│• ceklesbi *<text>*
│• kapankah *<text>*
│• wangy *<text>*
│• cekmati *<text>*
│• halah *<text>*
│• hilih *<text>*
│• huluh *<text>*
│• heleh *<text>*
│• holoh *<text>*
╰──────────⳹
   
╭───『 *M A I N  M E N U*
│• owner
│• ping
│• menu
│• speedtest
│• script
│• tqto
│• runtime
│• ceklimit
│• buyprem
│• totalfitur
╰──────────⳹

╭───『 *P R I M B O N  M E N U*
│• nomorhoki *<number>*
│• artimimpi *<text>*
│• artinama *<text>*
│• ramaljodoh *<text>*
│• ramaljodohbali *<text>*
│• suamiistri *<text>*
│• ramalcinta *<text>*
│• cocoknama *<text>*
│• pasangan *<text>*
│• jadiannikah *<text>*
│• sifatusaha *<text>*
│• rezeki *<text>*
│• pekerjaan *<text>*
│• nasib *<text>*
│• penyakit *<text>*
│• tarot *<text>*
│• fengshui *<text>*
│• haribaik *<text>*
│• harisangar *<text>*
│• harisial *<text>*
│• nagahari *<text>*
│• arahrezeki *<text>*
│• peruntungan *<text>*
│• weton *<text>*
│• karakter *<text>*
│• keberuntungan *<text>*
│• memancing *<text>*
│• masasubur *<text>*
│• zodiak *<birthday day>*
│• shio
╰──────────⳹
   
╭───『 *D A T A  M E N U*
│• setcmd [reply sticker/pesan]
│• listcmd
│• delcmd [reply sticker/pesan]
│• lockcmd
│• addmsg
│• listmsg
│• getmsg
│• delmsg
╰──────────⳹

╭───『 *R A M D O N  M E N U*
│• pokemon
│• rize
│• sagiri
│• aesthetic
│• anjing
│• blankpink
│• boneka
│• hekel
│• justina
│• kpop
│• kucing
│• mobil
│• motor
│• pubg
│• rose
│• ryujin
│• wallhp
│• cyberspace
│• mountain
│• programming
│• technology 
│• couple
╰──────────⳹

╭───『 *A S U P A N  M E N U*
│• paptt *<foto/video>*
│• bokep *<premium>*
│• cecan
│• china
│• cogan
│• indonesia
│• japan
│• korea
│• malaysia
│• thailand
│• vietnam
╰──────────⳹

╭───『 *T O O L S  M E N U*
│• bass *<audio>*
│• blown *<audio>*
│• deep *<audio>*
│• earrape *<audio>*
│• fast *<audio>*
│• fat *<audio>*
│• nightcore *<audio>*
│• reverse *<audio>*
│• robot *<audio>*
│• slow *<audio>*
│• tupai *<audio>*
│• delete *<text>*
│• quoted *<text>*
│• ebinary
│• dbinary
│• ip
│• lookup
╰──────────⳹

╭───『 *C R E A T O R  I M A G E*
│• tololsertifikat *<name>*
│• bucinsertifikat *<name>*
│• pacarsertifikat *<name>*
│• ttp *<text>*
│• attp *<text>*
│• attp2 *<text>*
│• qc *<text>*
╰──────────⳹

╭───『 *I S L A M  M E N U*
│• asmaulhusna
│• alquranaudio
│• alquran
│• jadwalsolat
│• kisahnabi
│• listsurah
│• iqro
│• juzamma
│• hadist
│• tasfirsurah
╰──────────⳹

╭───『 *D O W N  M E N U*
│• ytplay *<name>*
│• ytmp3 *<link>*
│• ytmp4 *<link>*
│• tiktok *<link>*
│• tiktokaudio *<link>*
│• igdl *<link>*
│• igdl2 *<link>*
│• twtdl *<link>*
│• fbdl *<link>*
│• gitclone *<link>*
╰──────────⳹

╭───『 *E P H O T O _1_*
│• wetglass *<text>*
│• multicolor3d *<text>*
│• watercolor *<text>*
│• luxurygold *<text>*
│• galaxywallpaper *<text>*
│• lighttext *<text>*
│• beautifulflower *<text>*
│• puppycute *<text>*
│• royaltext *<text>*
│• heartshaped *<text>*
│• birthdaycake *<text>*
│• galaxystyle *<text>*
│• hologram3d *<text>*
│• greenneon *<text>*
│• glossychrome *<text>*
│• greenbush *<text>*
│• metallogo *<text>*
│• noeltext *<text>*
│• glittergold *<text>*
│• textcake *<text>*
│• starsnight *<text>*
│• wooden3d *<text>*
│• textbyname *<text>*
│• writegalacy *<text>*
│• galaxybat *<text>*
│• snow3d *<text>*
│• birthdayday *<text>*
│• goldplaybutton *<text>*
│• silverplaybutton *<text>*
│• freefire *<text>*
╰──────────⳹

╭───『 *P H O T O  O X Y _1_*
│• shadow
│• cup
│• cup1
│• romance
│• smoke
│• burnpaper
│• lovemessage
│• undergrass
│• love
│• coffe
│• woodheart
│• woodenboard
│• summer3d
│• wolfmetal
│• nature3d
│• underwater
│• golderrose
│• summernature
│• letterleaves
│• glowingneon
│• fallleaves
│• flamming
│• harrypotter
│• carvedwood
╰──────────⳹

╭───『 *T E X T  P R O _1_*
│• blackpink *<text>*
│• neon *<text>*
│• greenneon *<text>*
│• advanceglow *<text>*
│• futureneon *<text>*
│• sandwriting *<text>*
│• sandsummer *<text>*
│• sandengraved *<text>*
│• metaldark *<text>*
│• neonlight *<text>*
│• holographic *<text>*
│• text1917 *<text>*
│• minion *<text>*
│• deluxesilver *<text>*
│• newyearcard *<text>*
│• bloodfrosted *<text>*
│• halloween *<text>*
│• jokerlogo *<text>*
│• fireworksparkle *<text>*
│• natureleaves *<text>*
│• bokeh *<text>*
│• toxic *<text>*
│• strawberry *<text>*
│• box3d *<text>*
│• roadwarning *<text>*
│• breakwall *<text>*
│• icecold *<text>*
│• luxury *<text>*
│• cloud *<text>*
│• summersand *<text>*
│• horrorblood *<text>*
│• thunder *<text>*
╰──────────⳹

╭───『 *T E X T  P R O _2_*
│• pornhub *<text>*
│• glitch *<text>*
│• avenger *<text>*
│• space *<text>*
│• ninjalogo *<text>*
│• marvelstudio *<text>*
│• lionlogo *<text>*
│• wolflogo *<text>*
│• steel3d *<text>*
│• wallgravity *<text>*
╰──────────⳹

╭───『 *I N F O R M A T I O N*
│• kbbi *<text>*
│• brainly *<text>*
│• roboguru *<text>*
│• wikipedia *<text>*
│• translate *<text>*
│• google *<text>*
│• gimage *<text>*
│• jarak *<city1|city2>*
│• kodepos *<city>*
│• infocuaca *<city>*
│• lirik *<song>*
│• jadwaltv
│• jadwaltvnow
│• jadwalbola
│• newsinfo
│• cnnindonesia
│• cnnnasional
│• cnninternasional
│• infogempa
│• infochat
╰──────────⳹

╭───『 *A N I M E  M E N U*
│• genshin
│• akira
│• akiyama
│• ana
│• asuna
│• ayuzawa
│• boruto
│• chitoge
│• deidara
│• doraemon
│• elaina
│• emilia
│• erza
│• gremory
│• hestia
│• hinata
│• inori
│• isuzu
│• itachi
│• itori
│• kaga
│• kagura
│• kakasih
│• kaori
│• keneki
│• kotori
│• kurumi
│• loli
│• madara
│• mikasa
│• miku
│• minato
│• naruto
│• nezuko
│• onepiece
│• sakura
│• sasuke
│• shina
│• shinka
│• shizuka
│• shota
│• toukachan
│• tsunade
│• yuki
╰──────────⳹

╭───『 *M E M E  M E N U*
│• darkjoke
│• ramdommeme
│• memeindo
╰──────────⳹`

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
