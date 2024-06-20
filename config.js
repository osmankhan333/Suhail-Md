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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_42_06_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA3NixcbiAgICAgICAgMTAxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTksXG4gICAgICAgIDE0MixcbiAgICAgICAgNDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDcxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTg4LFxuICAgICAgICA4MyxcbiAgICAgICAgNTksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMixcbiAgICAgICAgNDAsXG4gICAgICAgIDg1LFxuICAgICAgICA1MixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDk4LFxuICAgICAgICA0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgODgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODAsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjEwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDkzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3OCxcbiAgICAgICAgMjksXG4gICAgICAgIDcxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDYyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDkxLFxuICAgICAgICAxODEsXG4gICAgICAgIDIsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTksXG4gICAgICAgIDEzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNixcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgODIsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDkxLFxuICAgICAgICAxODIsXG4gICAgICAgIDg2LFxuICAgICAgICA3MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjUxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU1LFxuICAgICAgICA4LFxuICAgICAgICA5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTAzLFxuICAgICAgICA1LFxuICAgICAgICA3NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDUsXG4gICAgICAgIDQ1LFxuICAgICAgICA0OCxcbiAgICAgICAgNDksXG4gICAgICAgIDc1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDMsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDU2LFxuICAgICAgICA4OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDM2LFxuICAgICAgICAxODksXG4gICAgICAgIDg2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE0LFxuICAgICAgICA1MixcbiAgICAgICAgMjgsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc0LFxuICAgICAgICA2NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTczLFxuICAgICAgICAxODksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDU4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDMwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjh2WC9uck85c0JweFJSZFZFOFRtM3RQMlpQckk0eUJYQnpyckpiZ3BXWU09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm9vSWRZT2FLVGJ1Tkd3NnMtOF9ZQndcIixcbiAgXCJwaG9uZUlkXCI6IFwiMWI3NDM1YzItZGNlMS00MTM4LWJkMDAtNmI0NGIxNGIyNzdlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcsXG4gICAgICAxMzAsXG4gICAgICAxMCxcbiAgICAgIDU0LFxuICAgICAgOTUsXG4gICAgICA4MixcbiAgICAgIDEwNSxcbiAgICAgIDE0MixcbiAgICAgIDE1MCxcbiAgICAgIDEzLFxuICAgICAgMTEwLFxuICAgICAgMjM3LFxuICAgICAgMTIsXG4gICAgICA0LFxuICAgICAgMTAxLFxuICAgICAgMzAsXG4gICAgICAyMzMsXG4gICAgICAyMixcbiAgICAgIDQ4LFxuICAgICAgMTg1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgxLFxuICAgICAgMjMzLFxuICAgICAgMTE5LFxuICAgICAgMTMxLFxuICAgICAgNjIsXG4gICAgICAyMTQsXG4gICAgICAxMSxcbiAgICAgIDQ5LFxuICAgICAgMTQ1LFxuICAgICAgNjcsXG4gICAgICAyNDksXG4gICAgICA3MCxcbiAgICAgIDMzLFxuICAgICAgMTg4LFxuICAgICAgMTg1LFxuICAgICAgMjI1LFxuICAgICAgMTQsXG4gICAgICA4NyxcbiAgICAgIDE0OSxcbiAgICAgIDE2MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGN1ZRVzdMVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDM2MDYyOTc1OjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzgzMzE4NDA0NTg5NTA6MjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSlN5eGFzRUVJR0p0N01HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUdkV0akI0L2pYSVhCeVRYNUpTWXQrY2hIMGRZRmQvdEVuTmd1WVl0MWtjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjlRYk5XRFlUVmk5YkFja0VUei9yeGFEa04wcFRZb1NxRWZWaENsU0owMFhxYm54K08vano5SGg1c0M4dWlHOWxpVjRqaDhMTTRHWktoNjQ0S0N5OERBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImQxaC81SDVnUW9lVElRR2VFQVRCVzh0dTc3NVpaU1hBN0ptTVpwUkZkcEpLUjcwM2FjQW1FUko5ckl6ZjhkTUpTOUhFQnhBOEpjb1UwSi84S0QyMENnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQzNjA2Mjk3NToyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg0Njk3NjQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGZlBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZmUC5qc29uIjogIntcImtleURhdGFcIjpcInRzYVlQb1ZIMEJJZDFuZDRoT3lHenU5OTRaeDhGYWp4N2VIU1oyZEdnL1E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE2NTA1NjI2NyxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
