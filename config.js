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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_55_06_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMixcbiAgICAgICAgMjUxLFxuICAgICAgICA1NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTQsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjksXG4gICAgICAgIDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMixcbiAgICAgICAgNzksXG4gICAgICAgIDExNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDQ1LFxuICAgICAgICA1MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA2LFxuICAgICAgICA0OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDcxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTM0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTc4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTk3LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzIsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTc2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjA4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDM4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE2LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDM4LFxuICAgICAgICAxLFxuICAgICAgICAxODksXG4gICAgICAgIDk0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyLFxuICAgICAgICAxODYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDY3LFxuICAgICAgICA3NixcbiAgICAgICAgMTksXG4gICAgICAgIDU3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTkzLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDU2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDU2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTksXG4gICAgICAgIDE3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAzMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTU3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODMsXG4gICAgICAgIDksXG4gICAgICAgIDQsXG4gICAgICAgIDY3LFxuICAgICAgICA1MixcbiAgICAgICAgMzAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNSxcbiAgICAgICAgNTksXG4gICAgICAgIDIyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDYxLFxuICAgICAgICAzOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDkwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1LFxuICAgICAgICA2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjUwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTg2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMCxcbiAgICAgICAgNTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDgyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIit4Nm5oYjFESng4eEZYaStNZGY1SDY5YUczS0Q3YVhzNno2VEZRS2ZiVnM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk93Y3pRRXdFUlhlWGVscXY0ZTJid2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzRjYmFlZTYtMDkwOC00YjY0LTkyNjMtMzYzNDg1ZDZjZGM0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUzLFxuICAgICAgMjExLFxuICAgICAgMTc4LFxuICAgICAgMjQyLFxuICAgICAgMjI0LFxuICAgICAgMTU4LFxuICAgICAgNzcsXG4gICAgICAyMSxcbiAgICAgIDExMixcbiAgICAgIDkxLFxuICAgICAgMTg0LFxuICAgICAgMTUsXG4gICAgICA1NSxcbiAgICAgIDIwMSxcbiAgICAgIDIyMSxcbiAgICAgIDEzMCxcbiAgICAgIDQ3LFxuICAgICAgMjMzLFxuICAgICAgMTAsXG4gICAgICA0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MSxcbiAgICAgIDEyNCxcbiAgICAgIDE2NCxcbiAgICAgIDE2NSxcbiAgICAgIDEwNCxcbiAgICAgIDExNSxcbiAgICAgIDgzLFxuICAgICAgODksXG4gICAgICA2NyxcbiAgICAgIDIyMixcbiAgICAgIDE2NixcbiAgICAgIDExLFxuICAgICAgMjI4LFxuICAgICAgMTkxLFxuICAgICAgMTc5LFxuICAgICAgMTE2LFxuICAgICAgMTQ1LFxuICAgICAgMjgsXG4gICAgICAyMDksXG4gICAgICAzNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIRDVXMVhRTlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDM2MDYyOTc1OjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzgzMzE4NDA0NTg5NTA6MjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSlN5eGFzRUVONjkwYk1HR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUdkV0akI0L2pYSVhCeVRYNUpTWXQrY2hIMGRZRmQvdEVuTmd1WVl0MWtjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk9iNm4xck1qOTIrZk1Ba0dOQy9sdU90djFQZkh3U2ZXdmtzMGRybVROb2tMMWZoL2RiVm81aWsrcmRzbytZMzdQKzdZT0pObm1vNnpRbC8rUmNCUkR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImxPZi9CajVjZnVic3dMM3c5L3RRVTRsVVhYNFZ4Z2tXdUhXdFBKeHUvTUpoNzQ4VWRiM1N2bThGMXdmWTJvUmZtSXhoLy9PaWQ4TnVFREdvcmozSmhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQzNjA2Mjk3NToyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg5MDI1MDUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGZlBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZmUC5qc29uIjogIntcImtleURhdGFcIjpcInRzYVlQb1ZIMEJJZDFuZDRoT3lHenU5OTRaeDhGYWp4N2VIU1oyZEdnL1E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE2NTA1NjI2NyxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
