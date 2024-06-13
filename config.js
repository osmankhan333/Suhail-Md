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
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Peshawar";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
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
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_28_06_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNixcbiAgICAgICAgMjksXG4gICAgICAgIDkzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1LFxuICAgICAgICA2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNyxcbiAgICAgICAgMixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDM4LFxuICAgICAgICAzMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYyLFxuICAgICAgICA2LFxuICAgICAgICA2NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMixcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxODAsXG4gICAgICAgIDk2LFxuICAgICAgICAxMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDMzLFxuICAgICAgICA0NixcbiAgICAgICAgMTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTQsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMxLFxuICAgICAgICA1NSxcbiAgICAgICAgODQsXG4gICAgICAgIDE4LFxuICAgICAgICAzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI3LFxuICAgICAgICAxMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDc0LFxuICAgICAgICA5OSxcbiAgICAgICAgMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDQxLFxuICAgICAgICAxODAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTM4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTI5LFxuICAgICAgICAxODQsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDc4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDk2LFxuICAgICAgICAyNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODMsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI5LFxuICAgICAgICA3MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDcsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzksXG4gICAgICAgIDU3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOCxcbiAgICAgICAgODcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMyxcbiAgICAgICAgMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDU2LFxuICAgICAgICA3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwLFxuICAgICAgICA3LFxuICAgICAgICAxNixcbiAgICAgICAgODEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQxLFxuICAgICAgICA1MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE0MixcbiAgICAgICAgODQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTgyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDM4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaW9KVFdTaTQ1cCtQVWFubExIZk41Q3pjTzU1cWJjV28yQTZWdlprcFZMUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM0MzYwNjI5NzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkYxOUJDREExMTdCRDBGMzdFMkU0RjM0RTc3QTI5QjQwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODI3MDkwMVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJGMjM0ZVo0OFNGLUhXQ0tXa0gtS0RnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjMyOWZmZjQzLTdkYTktNGIwMy04OTIyLTM0YzZhY2IzZTBmOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NCxcbiAgICAgIDIyLFxuICAgICAgOTEsXG4gICAgICAxNjgsXG4gICAgICAxNDcsXG4gICAgICAyOSxcbiAgICAgIDc3LFxuICAgICAgNCxcbiAgICAgIDcwLFxuICAgICAgMjEyLFxuICAgICAgMjAzLFxuICAgICAgOTEsXG4gICAgICA3NixcbiAgICAgIDE1MixcbiAgICAgIDY5LFxuICAgICAgMTk2LFxuICAgICAgMjEzLFxuICAgICAgMTU3LFxuICAgICAgMTE4LFxuICAgICAgMTYwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNyxcbiAgICAgIDEzNCxcbiAgICAgIDIyNyxcbiAgICAgIDExLFxuICAgICAgMyxcbiAgICAgIDIwLFxuICAgICAgMTU1LFxuICAgICAgMjIxLFxuICAgICAgNTEsXG4gICAgICA0OCxcbiAgICAgIDYwLFxuICAgICAgMTUwLFxuICAgICAgMTY2LFxuICAgICAgMTMzLFxuICAgICAgMTM1LFxuICAgICAgMjM0LFxuICAgICAgMjMsXG4gICAgICAxODIsXG4gICAgICAyNDAsXG4gICAgICAyNTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiODRTQzRYSzRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQzNjA2Mjk3NToyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTc4MzMxODQwNDU4OTUwOjIzQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIuKalO+4j/Cfkp7wnZCMLfCdkIzwnZCA8J2Qi/CdkIjwnZCKLfCdkIrwnZCH8J2QgPCdkI3wn5Ke4pqU77iPXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSkt5eGFzRUVLcjNxck1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUdkV0akI0L2pYSVhCeVRYNUpTWXQrY2hIMGRZRmQvdEVuTmd1WVl0MWtjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIll1NloxbUZra2RiSDRrQjNxak12MVdGdEEwaFpGd0hHWlZiaUdvRzA3RktKeU1XRkJTWjlUMGMxOGdKVkQvSkxUcjU5QUw4WVVpTVYwWStlbDlueEJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkN6bkE3Q1NVUmljWDhWTmV1ZzMybkE4NFVGSnErSExuYjlGK2hSVTRGQUFxMUFNeVQ0VHhObmtTSm8wWHJRVzg2eXk1eDhvOUpDaHA5eTRCbUp1eURRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQzNjA2Mjk3NToyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTgyNzA4OTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGZlBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZmUC5qc29uIjogIntcImtleURhdGFcIjpcInRzYVlQb1ZIMEJJZDFuZDRoT3lHenU5OTRaeDhGYWp4N2VIU1oyZEdnL1E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE2NTA1NjI2NyxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
