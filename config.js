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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
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
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_57_06_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODQsXG4gICAgICAgIDIzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjksXG4gICAgICAgIDgzLFxuICAgICAgICA5NixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwLFxuICAgICAgICA5NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM0LFxuICAgICAgICA5MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzksXG4gICAgICAgIDU5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgODYsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDYzLFxuICAgICAgICA2MSxcbiAgICAgICAgODksXG4gICAgICAgIDc5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjE2LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgODEsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDcyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAzLFxuICAgICAgICAyNyxcbiAgICAgICAgODQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM5LFxuICAgICAgICA3MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDY5LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDUwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTY4LFxuICAgICAgICA3NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjUxLFxuICAgICAgICA5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTExLFxuICAgICAgICA1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA4LFxuICAgICAgICA3MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDMsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgODUsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjA2LFxuICAgICAgICA3NixcbiAgICAgICAgNzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDksXG4gICAgICAgIDU1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzYsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiblBwdTRkNGZWcnNXakNVU2djZ1o5ZTkvUVZadktYT1h3dnViS2JGRFVzOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiN1VEQjkzR3ZRZnFrSXZ0SFoxUmVwZ1wiLFxuICBcInBob25lSWRcIjogXCJkMmM1ZGVhMS1iMDM3LTRjYTMtYWI1NS05Njk1YmY4NmFkZWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAyLFxuICAgICAgODcsXG4gICAgICAxNCxcbiAgICAgIDE1LFxuICAgICAgMjEwLFxuICAgICAgMTksXG4gICAgICAyMzgsXG4gICAgICAyNDMsXG4gICAgICAxODIsXG4gICAgICAxMjYsXG4gICAgICAxMTgsXG4gICAgICAxNCxcbiAgICAgIDEzLFxuICAgICAgODcsXG4gICAgICAxMzgsXG4gICAgICAxODEsXG4gICAgICAxNjMsXG4gICAgICAzMCxcbiAgICAgIDE5OSxcbiAgICAgIDY1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1LFxuICAgICAgNzgsXG4gICAgICAxODEsXG4gICAgICAxNDMsXG4gICAgICAyNDYsXG4gICAgICA2OCxcbiAgICAgIDIzMSxcbiAgICAgIDUzLFxuICAgICAgMTcsXG4gICAgICAyMDcsXG4gICAgICAxMTIsXG4gICAgICAxODAsXG4gICAgICA0NCxcbiAgICAgIDIwNSxcbiAgICAgIDQ5LFxuICAgICAgMjM1LFxuICAgICAgNzksXG4gICAgICA5NixcbiAgICAgIDcsXG4gICAgICAxODBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiU1pTUjFZMzVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQzNjA2Mjk3NToxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTc4MzMxODQwNDU4OTUwOjE4QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIuKalO+4j/Cfkp7wnZCMLfCdkIzwnZCA8J2Qi/CdkIjwnZCKLfCdkIrwnZCH8J2QgPCdkI3wn5Ke4pqU77iPXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXV5eGFzRUVMcnhwTE1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUdkV0akI0L2pYSVhCeVRYNUpTWXQrY2hIMGRZRmQvdEVuTmd1WVl0MWtjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjdPTFV6M2QxYlZhTjVCVXdFeFNHdnl6R3dVNTBDalM5Ti8zeEhreTUxc2Z1VCtoUVVzaXRIQnZVMnFmcngrRWRXWFdhNmpXNjRDOHVNNG41bVlBWEJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImJza210VFJ4V1RpdG1JbnQvRU9mampwcXM4ajF5bkorY2RGcTR6blRsV1o3L3hxVGRDWFBPMU82N214bFB3MW5OV1ZuQ0kyOTVqcmRkSlhWcEhQSGhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQzNjA2Mjk3NToxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTgxNzE4MzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGZkxcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZmTC5qc29uIjogIntcImtleURhdGFcIjpcIi85Si9kWjRTaUlyNXZOQU1mcG1VOTc1RElLQ0x0QU5POTZOZHo0Tk1iSDQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE2NTA1NjI2NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
