const { Telegraf } = require('telegraf');
const express = require('express')
const axios = require("axios");
const app = express()
const cron = require('node-cron');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN_TELEGRAM);
app.use(express.static('static'))
app.use(express.json());

// 00 7 * * 0-6
cron.schedule('* * * * * *', () => {
  axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=loopring&vs_currencies=usd`)
  .then(response => {
    const message = `Hello, today the Loopring price is ${response.data.loopring.usd}USD`
      bot.telegram.sendMessage("1766285817", message, {
      })
  })
}, {
  scheduled: true,
  timezone: "Asia/Ho_Chi_Minh"
});

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3000, () => console.log("Server ready on port 3000."));
  
bot.launch()
