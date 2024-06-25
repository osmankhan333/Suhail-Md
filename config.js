const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "true" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Peshawar";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923436062975";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923436062975";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "online" ; // 'online' | 'available' | 'available' | 'online' | 'online'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_05_06_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTczLFxuICAgICAgICAxMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDQwLFxuICAgICAgICAxODIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzksXG4gICAgICAgIDgxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0LFxuICAgICAgICA5OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTEzLFxuICAgICAgICA5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU4LFxuICAgICAgICA5OSxcbiAgICAgICAgOCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAzMSxcbiAgICAgICAgMjMzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDU5LFxuICAgICAgICA0NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE4LFxuICAgICAgICA5MCxcbiAgICAgICAgODksXG4gICAgICAgIDE2MyxcbiAgICAgICAgODgsXG4gICAgICAgIDQyLFxuICAgICAgICA4NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAzMixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTU1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTAwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODIsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjMxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDM0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMSxcbiAgICAgICAgMjExLFxuICAgICAgICA1NixcbiAgICAgICAgMjAsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTMwLFxuICAgICAgICA2NixcbiAgICAgICAgNTYsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODIsXG4gICAgICAgIDMyLFxuICAgICAgICAxNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAzOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ5LFxuICAgICAgICAwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDc1LFxuICAgICAgICAyNSxcbiAgICAgICAgNjksXG4gICAgICAgIDg3LFxuICAgICAgICAzNyxcbiAgICAgICAgODMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDk5LFxuICAgICAgICA4NixcbiAgICAgICAgMTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTksXG4gICAgICAgIDE2NixcbiAgICAgICAgNjgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjksXG4gICAgICAgIDYxLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODksXG4gICAgICAgIDE3NixcbiAgICAgICAgNTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNixcbiAgICAgICAgNjIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjUwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjE1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJLTnZLS2VuMkNZbXcyRE16NWJ5LzdtbUZ6ZFBlTlBFNmh1RWN1ZkRDZjhRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJzN1hfQmdtZ1RhU3ZPMTVtTl9FVkFBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjE2MzkxNWY3LTM3NzAtNGRjNC05OTAxLTk5MWQyMTBhMGViMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTYsXG4gICAgICAyMjMsXG4gICAgICAyNixcbiAgICAgIDE4NCxcbiAgICAgIDY2LFxuICAgICAgMTMzLFxuICAgICAgNTMsXG4gICAgICAyMzcsXG4gICAgICAxMDksXG4gICAgICAyMDUsXG4gICAgICAxMTYsXG4gICAgICAxNzEsXG4gICAgICAxNTIsXG4gICAgICAyNSxcbiAgICAgIDM1LFxuICAgICAgMTYyLFxuICAgICAgMzYsXG4gICAgICAxNTksXG4gICAgICAxMyxcbiAgICAgIDExM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NixcbiAgICAgIDE1OSxcbiAgICAgIDkyLFxuICAgICAgMjM0LFxuICAgICAgMTQ0LFxuICAgICAgMTIzLFxuICAgICAgMTIyLFxuICAgICAgMTc0LFxuICAgICAgMjYsXG4gICAgICAyNyxcbiAgICAgIDIxMyxcbiAgICAgIDk1LFxuICAgICAgMjEsXG4gICAgICAxNTcsXG4gICAgICAyNTMsXG4gICAgICAxMDYsXG4gICAgICAyNDksXG4gICAgICAzLFxuICAgICAgMjI1LFxuICAgICAgMjI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjFFTE1RSk1SXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0MzYwNjI5NzU6MzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3ODMzMTg0MDQ1ODk1MDozNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKV3l4YXNFRUpyRzdMTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlR2RXRqQjQvalhJWEJ5VFg1SlNZdCtjaEgwZFlGZC90RW5OZ3VZWXQxa2M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTGhvVnVjQWJMOXI0UnNKWk1oQThoZWlzMEt5Ulo3emlEVE14Y0EwV0ZaRU9jTFpPaVVlUUQ5RU03NjRPVUdRRmFlVnQzbndWQUp3YXFDcHAvN1VZQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTHY3YVR4RkJ0WDRMR0U3dmw4YkRLbW9FRjA4SG4zalo3MnAvalFLMnhkd01LVGtSdFEvbVltZkJHbjlJWjFNS0g3RTdpcVVoUkJEQ1hGVTNNU2wxanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDM2MDYyOTc1OjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTM0NTk0OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxZclwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTFlyLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSkIyUHNLRklLNi9GMWtNa2JoR0lmNnAxMGxiUGZFUjhsdk0wZ0NWY0cvQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTY1MDU2Mjc3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkzNDU5NTUzMTNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
  //readmessage:process.env.READ_MESSAGE|| "true",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "true", 
  //alwaysonline:process.env.WAPRESENCE|| "online", // 'online' | 'online' | 'online' | 'online' | 'online'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
