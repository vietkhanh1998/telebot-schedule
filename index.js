const { Telegraf } = require('telegraf');
const express = require('express')
const axios = require("axios");
const app = express()
const cron = require('node-cron');
const bot = new Telegraf(process.env.BOT_TOKEN_TELEGRAM);
require('dotenv').config();

app.use(express.static('static'))
app.use(express.json());


// const coin = 'lrcusdt';

// const ws = new WebSocket(`wss://fstream.binance.com/ws/${coin}@trade`);

// ws.on('message', (data) => {
//     if (data) {
//         const trade = JSON.parse(data); 
//         if (trade.p < 0.175) {
//             bot.telegram.sendMessage(1766285817, trade.p, {
//             })
//         }
//     }
// });

// const wss = new WebSocketServer({ port: 8080 });

// wss.on('connection', function connection(ws) {
//   ws.on('message', function message(data) {
//     console.log('received: %s', data);
//   });

//   ws.send('something');
// });
// 00 7 * * 0-6
cron.schedule('* * * * *', () => {
  axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=loopring&vs_currencies=usd`)
  .then(response => {
    console.log(response.data)
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
