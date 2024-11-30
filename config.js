const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID ⎸⎸ "",
ALIVE_IMG process.env.ALIVE_IMG ⎸⎸"",
ALIVE_MSG process.env.ALIVE_MSG ⎸⎸"",
MONGODB: process.env.MONGODB ⎸⎸ "enter mongodb here",
MODE: pprocess.env.MODE ⎸⎸ "public"

};

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
