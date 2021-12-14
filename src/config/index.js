require('dotenv').config();

const config = {
  token: process.env.DISCORD_TOKEN,
  host: process.env.BACKEND_HOST,
  path: process.env.BACKEND_PATH
}

module.exports = config;