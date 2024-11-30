const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "33QGkbxY#RA0TENww2V5DhSIVvEPxUwhkKi6RD8LHnzsUt7LuA9E",
MONGODB: process.env.MONGODB || "mongodb://mongo:kSbfesNZJTcKFugNruFdhClchRYFMSnj@mongodb.railway.internal:27017",
ALIVE_IMG: process.env.ALIVE_IMG || "https://avatars.githubusercontent.com/u/140577992?v=4.jpg"
MODE: process.env.MODE || "public"

};

