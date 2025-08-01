const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_37_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDMxLFxuICAgICAgICAxMSxcbiAgICAgICAgODAsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTE0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjAxLFxuICAgICAgICA4OSxcbiAgICAgICAgMjU1LFxuICAgICAgICA2OSxcbiAgICAgICAgNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzksXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjAxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ4LFxuICAgICAgICA5NixcbiAgICAgICAgMTIxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTExLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDU0LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzksXG4gICAgICAgIDcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDk2LFxuICAgICAgICA0NyxcbiAgICAgICAgODYsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzksXG4gICAgICAgIDc4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjksXG4gICAgICAgIDkxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTksXG4gICAgICAgIDY4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAzNSxcbiAgICAgICAgNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAzMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMixcbiAgICAgICAgMTM1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgODIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDczLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTcxLFxuICAgICAgICA2OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDU4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDc2LFxuICAgICAgICAxOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODAsXG4gICAgICAgIDkyLFxuICAgICAgICAxODYsXG4gICAgICAgIDI4LFxuICAgICAgICAxODcsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDYsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTkzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE0LFxuICAgICAgICA1OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQzLFxuICAgICAgICA5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAzMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDgyLFxuICAgICAgICAxNyxcbiAgICAgICAgMixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDk3LFxuICAgICAgICA4OSxcbiAgICAgICAgODcsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIzYXoxR2lPN1BnS0xzMXpoc2FYdmdxZWJFSGtDS2cza2ZiOGQwRi9TSWRrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzM1NzMwMTcyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjk5OUNGOTVFNTVENzVDQUY2RUI5MEE3OTA5RDFBMzJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzU0MDUxODE3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMzU3MzAxNzIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCMTZDRUE0REZCNUJCMzU2QTY2RjVDODNGREZGMUZEQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NTQwNTE4MTdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMzNTczMDE3MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjY5QkIyNzYyRUZFRUNCNzc1QTg5RUQwRjc3M0JCRTA4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc1NDA1MTgyMFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJwd185UGdsV1JCS05iUnhEVnNaWkZBXCIsXG4gIFwicGhvbmVJZFwiOiBcImI3NjY5OTQ0LWRlYjQtNGUzOS04NGZhLTJiMTNmYmVmYThmZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4LFxuICAgICAgNTIsXG4gICAgICAyMzAsXG4gICAgICA3NyxcbiAgICAgIDUxLFxuICAgICAgMTczLFxuICAgICAgMTMwLFxuICAgICAgMTYxLFxuICAgICAgMTk3LFxuICAgICAgMjUxLFxuICAgICAgMjAwLFxuICAgICAgMTk4LFxuICAgICAgMjQwLFxuICAgICAgMTUxLFxuICAgICAgMTU3LFxuICAgICAgMTA5LFxuICAgICAgMTgxLFxuICAgICAgNjAsXG4gICAgICAxMTIsXG4gICAgICAxOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMyxcbiAgICAgIDU2LFxuICAgICAgMTE5LFxuICAgICAgMTE1LFxuICAgICAgMjMzLFxuICAgICAgMjA2LFxuICAgICAgMTkzLFxuICAgICAgOTAsXG4gICAgICAxOTgsXG4gICAgICA1NixcbiAgICAgIDE0NSxcbiAgICAgIDE4NSxcbiAgICAgIDE2NSxcbiAgICAgIDEyNSxcbiAgICAgIDE1LFxuICAgICAgMTc3LFxuICAgICAgMjA2LFxuICAgICAgMjAwLFxuICAgICAgMTEsXG4gICAgICAyNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLYWowLzRGRU9UcHNzUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImJCRUJhVTUvNjVsOW1HZHJmS0lDU0JkM3BoVlIwc2JmRXZwUitlYk1KZ0E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUE5MclhPYVNoWjY4NWNIcjc4cHM2OUtnTjlzcitKKzJCcWxNVGtIUEoxVzZBdzZRK3NmQ1ZUVUt1Z1dJK2hERWJEYzFXTGhCclVuNnZkQ1VlSHRZRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiM1Y2YW8wdXJMUnpDOG9GRVJ0YXF0YnVHSDFPY0RzWHE0ZFl4SXBLZHN5MGFmSkxDcUFndXFLZzliU2Rrd2FuZHpzUVlucjEzdEpjZUpFVGRmZW1oQkE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzNTczMDE3MjM6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTE0MzQxMjIzMzkxMjk1OjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J+WlfCfj7tcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzM1NzMwMTcyMzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzU0MDUxODE1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRDE3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEMTUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI2Qm9aclVNUmVQWXp6cFE0VmVQUGlRRFBmZmt5MHR5dDFMaHBYSThyWlU0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2MDc3ODI4MjEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUQxNi5qc29uIjogIntcImtleURhdGFcIjpcIldGcGMzR0ZjWUlQc0xYNDVvTXVZdkRJVlFUVTZJZEdvQ2dub0M3TW5RRkE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTYwNzc4MjgyMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc1MzkzNzk0NjQ2NFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUQxNy5qc29uIjogIntcImtleURhdGFcIjpcIkNsbTQ5MGEvdE9WZGp0cnpPTTk2dEwzWnkrc1hQdHFVaGV0RDNVSnFJMEU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTYwNzc4MjgyMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzU0MDUxODE3MTU0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
