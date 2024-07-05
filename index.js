const { Telegraf } = require('telegraf');
const express = require('express')
const axios = require("axios");
const app = express()
const cron = require('node-cron');
require('dotenv').config();


const PORT = process.env.PORT || 3000
const bot = new Telegraf(process.env.BOT_TOKEN_TELEGRAM);
app.use(express.static('static'))
app.use(express.json());

// cron.schedule('00 7 * * *', () => {
//   axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=loopring&vs_currencies=usd`)
//   .then(response => {
//     const message = `Hello, today the Loopring price is ${response.data.loopring.usd}USD`
//     bot.telegram.sendMessage("1766285817", message, {})
//   })
// }, {
//   scheduled: true,
//   timezone: "Asia/Ho_Chi_Minh"
// });

cron.schedule('* * * * *', () => {
  const message = `123`
  bot.telegram.sendMessage("1766285817", message, {})
}, {
  scheduled: true,
  timezone: "Asia/Ho_Chi_Minh"
});

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(PORT, () => console.log(`Server ready on port ${PORT}.`));
  
bot.launch()
