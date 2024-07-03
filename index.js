
const express = require('express')
const app = express()
const cron = require('node-cron');
const {WebSocket, WebSocketServer} = require("ws")
require('dotenv').config();
const botTele = new Telegraf(process.env.BOT_TOKEN_TELEGRAM);
const { Telegraf } = require('telegraf');

app.use(express.static('static'))
app.use(express.json());





// const coin = 'lrcusdt';

// const ws = new WebSocket(`wss://fstream.binance.com/ws/${coin}@trade`);

// const job = new CronJob(
// 	'00 01 * * * *', // cronTime
// 	function () {
//         console.log(123123);
//         botTele.telegram.sendMessage(1766285817, "ping" , {})
// 	}, // onTick
// 	null, // onComplete
// 	true, // start
// 	'Asia/Ho_Chi_Minh' // timeZone
// );

// job.start()

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

cron.schedule('* * * * *', () => {
  botTele.telegram.sendMessage(1766285817, "ping" , {})
});

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3000, () => console.log("Server ready on port 3000."));
  
bot.launch()
