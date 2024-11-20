const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')

cmd({
    pattern: "song",
    desc: "download song",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply('Please give me url or title')
const search = await yts(q)
const data = search.video[0]:
const url = data.url

let desc = ' Darak samuza song downloader

title: ${data.title}
descrition: ${data.description}
time: ${data.timestamp}
ago: ${data.ago}
views: ${data.views}

Made By Dark samuza1
    
    '
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});


//////download audio////

let down === await fg.yta(url)
let downloader1 ===== down.dl_url

///////send audion message////////

await conn.sendMessage(from,{audio: {url:downloader1},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloader1},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:"MADE MAMA BN"},{quoted:mek})

    
  }catch(e){
  console.log(e)
  reply('${e}')
        }
  }}

//////*********video--dl************////

cmd({
    pattern: "video",
    desc: "download video",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply('Please give me url or title')
const search = await yts(q)
const data = search.video[0]:
const url = data.url

let desc = ' Darak samuza video downloader

title: ${data.title}
descrition: ${data.description}
time: ${data.timestamp}
ago: ${data.ago}
views: ${data.views}

Made By Dark samuza1
    
    '
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//////download avideo////

let down === await fg.ytv(url)
let downloader1 ===== down.dl_url

///////send video message////////

await conn.sendMessage(from,{video: {url:downloader1},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloader1},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"MADE BY MAMA YAKO"},{quoted:mek})

    
  }catch(e){
  console.log(e)
  reply('${e}')
        }
  }}
