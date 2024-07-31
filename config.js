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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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
global.SESSION_ID = process.env.SESSION_ID ||  "
  SUHAIL_03_24_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDk0LFxuICAgICAgICAyNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjIyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNixcbiAgICAgICAgMzMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTkyLFxuICAgICAgICA4NixcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExLFxuICAgICAgICAyNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDkyLFxuICAgICAgICA3NCxcbiAgICAgICAgMzksXG4gICAgICAgIDQyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg4LFxuICAgICAgICA0MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDksXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjksXG4gICAgICAgIDUwLFxuICAgICAgICA0MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDk2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODMsXG4gICAgICAgIDI5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTMzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjAyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDM4LFxuICAgICAgICA5MixcbiAgICAgICAgMjMsXG4gICAgICAgIDUyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg2LFxuICAgICAgICA3NSxcbiAgICAgICAgODMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNyxcbiAgICAgICAgMTEwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTk4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDUxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDU1LFxuICAgICAgICA0NyxcbiAgICAgICAgMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDM0LFxuICAgICAgICAyNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDkzLFxuICAgICAgICAxODcsXG4gICAgICAgIDExLFxuICAgICAgICAyNDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNixcbiAgICAgICAgMzcsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjIxLFxuICAgICAgICA1MixcbiAgICAgICAgOTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE5LFxuICAgICAgICA0NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDY4LFxuICAgICAgICAyMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTYyLFxuICAgICAgICA2MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDU1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAzNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgODUsXG4gICAgICAgIDc3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTk2LFxuICAgICAgICA1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTAyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwLFxuICAgICAgICAyMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjksXG4gICAgICAgIDk4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ0bGtyWVVUQ1dva2VLc3FocVBwUXpoRC9LS0FUdzFjVmNNWE9SZFJFSnNJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJLS3ZLazRJSFJhNjYtTXlIdUx1REFBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQyZjc5ZTVkLWM4MjgtNGMwNC1hMWM3LTIzOWMxMWFjMGI2MFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NixcbiAgICAgIDc0LFxuICAgICAgNzMsXG4gICAgICAxOTUsXG4gICAgICAxMjMsXG4gICAgICAxNjgsXG4gICAgICA2OCxcbiAgICAgIDEwMCxcbiAgICAgIDE0MyxcbiAgICAgIDY2LFxuICAgICAgMTYxLFxuICAgICAgMjUyLFxuICAgICAgOTgsXG4gICAgICAxODEsXG4gICAgICAzMyxcbiAgICAgIDE2MCxcbiAgICAgIDEzMCxcbiAgICAgIDE3NixcbiAgICAgIDE4NixcbiAgICAgIDY0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMixcbiAgICAgIDEyLFxuICAgICAgMTg4LFxuICAgICAgMjA1LFxuICAgICAgMTAsXG4gICAgICA3OSxcbiAgICAgIDI0NCxcbiAgICAgIDEzMCxcbiAgICAgIDEwNSxcbiAgICAgIDU5LFxuICAgICAgMjEyLFxuICAgICAgMTEwLFxuICAgICAgMTI0LFxuICAgICAgNjYsXG4gICAgICA4NyxcbiAgICAgIDkxLFxuICAgICAgMjE5LFxuICAgICAgMTAyLFxuICAgICAgMTcsXG4gICAgICAxOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVlBXSEhHWjFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzU1MDM3MTc5MDoyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIktlbHZpbiBEYXRzYVwiLFxuICAgIFwibGlkXCI6IFwiMTMxNTg5NTI2ODIyOTgyOjIyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ042WHQ5VUdFTi9jcHJVR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTWVQTHE5OUpxVnMxemJUaVkwVmQwemtZKytGbFZpMjZIZzJlRFZYK1N6dz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJqaXJ4ZEZIZk4zdDduTmMreEpnT3ZaMFE1MG90S2ZOODBxamRiRHU4ZlJ1SkM4OVdFeUZhMy90Mm1IaEtKZWlWTU9HTmJoaDNSaEVpcWFoS2hGWitDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJBb3NVaTlTYSthZldEVjd1KzJMaEhjalRQbG10SHZCOFhRcnZJSHBtUEFMZTZ4aGxwOUVEQlFJSndyeXh6ZW1zWGlHSTBGVDNOSVJkT3IwRGpVb09qQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzM1NTAzNzE3OTA6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA2MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMzk2MjU5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
