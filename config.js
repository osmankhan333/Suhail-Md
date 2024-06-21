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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_08_06_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTk1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3LFxuICAgICAgICA0MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNixcbiAgICAgICAgOTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzksXG4gICAgICAgIDIyNyxcbiAgICAgICAgNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI2LFxuICAgICAgICAxOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzLFxuICAgICAgICA4NSxcbiAgICAgICAgODgsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYyLFxuICAgICAgICA2NixcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODYsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjM5LFxuICAgICAgICA3NSxcbiAgICAgICAgNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDUzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTA1LFxuICAgICAgICA4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDksXG4gICAgICAgIDIzNixcbiAgICAgICAgNzksXG4gICAgICAgIDksXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgOCxcbiAgICAgICAgNTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDYzLFxuICAgICAgICA5OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDExLFxuICAgICAgICAxOTAsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDgxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyOCxcbiAgICAgICAgODksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcsXG4gICAgICAgIDU5LFxuICAgICAgICA5OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDksXG4gICAgICAgIDExLFxuICAgICAgICA4MixcbiAgICAgICAgNzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDM4LFxuICAgICAgICA5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjIxLFxuICAgICAgICA3NixcbiAgICAgICAgMTM5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjMzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjZpUFV6ZlY4YmdsOElkblZBeXp4Nno5aURvNHZuWThBVi94QWJsdUp4K0E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkVaYUdSN3NPUVFXT0NzSzR1TFdILWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTYzODBiNzMtZjUwMi00MmIxLTgwMGMtM2YwOTgzNWQ1ODU0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyOCxcbiAgICAgIDE1NixcbiAgICAgIDI0NixcbiAgICAgIDQyLFxuICAgICAgMzUsXG4gICAgICA5NixcbiAgICAgIDIyNSxcbiAgICAgIDE4MixcbiAgICAgIDIxNSxcbiAgICAgIDIxNyxcbiAgICAgIDIzOCxcbiAgICAgIDIsXG4gICAgICAzOCxcbiAgICAgIDEwNyxcbiAgICAgIDE0NyxcbiAgICAgIDEzOCxcbiAgICAgIDg0LFxuICAgICAgNzIsXG4gICAgICAxNjgsXG4gICAgICAyMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzQsXG4gICAgICAyMzYsXG4gICAgICAxMjcsXG4gICAgICAxMCxcbiAgICAgIDE3MCxcbiAgICAgIDkxLFxuICAgICAgNTQsXG4gICAgICAxNTksXG4gICAgICAxOTMsXG4gICAgICAyMDMsXG4gICAgICAxNzMsXG4gICAgICAxNzAsXG4gICAgICA3LFxuICAgICAgMTY1LFxuICAgICAgMTc1LFxuICAgICAgMTk1LFxuICAgICAgMjM2LFxuICAgICAgMTY5LFxuICAgICAgMTE5LFxuICAgICAgMTc4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldBWThaTFY2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0MzYwNjI5NzU6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3ODMzMTg0MDQ1ODk1MDozMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKU3l4YXNFRU9xUDJMTUdHQVlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlR2RXRqQjQvalhJWEJ5VFg1SlNZdCtjaEgwZFlGZC90RW5OZ3VZWXQxa2M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRTdheis3UWhBWDl5ZUwzdlB0eGhxNVNUaS9iVU9NdCtDWERvODdzN2t5WHZIMFlvdEdxcUkvZllYMk1PYU90WkE5UUtXSEJpNzdmSzlMZUx0Y1dXQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiY2ZrN283K280c2o3UnBjTlVWd3NqUGxYWjJjWUFVMnBsNFprd2ZNTnFLSWdLTTFpcVV4VHFYN3FrTFhWZU1TOHNucXk3cWdDSjBUcGxDVW5XYlFIaEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDM2MDYyOTc1OjMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTAxMTMxMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZmUFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRmZQLmpzb24iOiAie1wia2V5RGF0YVwiOlwidHNhWVBvVkgwQklkMW5kNGhPeUd6dTk5NFp4OEZhang3ZUhTWjJkR2cvUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTY1MDU2MjY3LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
