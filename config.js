const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "zzQGQDiT#5ZKiu5XEjgFhv5RurJBR8PC5w-QbvfY2L9hGpP29yG4",
MONGODB: process.env.MONGODB || "mongodb://mongo:Kx3SgXwvW4AkhXZQMDwx@containers-us-west-48.railway.app:5828",
ALIVE_IMG: process.env.ALIVE_IMG || "https://avatars.githubusercontent.com/u/140577992?v=4.jpg",
MODE: process.env.MODE || "public"

};

