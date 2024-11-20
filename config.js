const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG ││ "https://camo.githubusercontent.com/0e8e5114bac1af7227569baa78a746b6c52b7f6fcfc8752a14c909712dcef66d/68747470733a2f2f692e696d6775722e636f6d2f6c614342786e612e706e67.png"
ALIVE_MSG: process.env.ALIVE_MSG ││ "I am Dark samuza"
};
