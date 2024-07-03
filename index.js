
const express = require('express')
const expressApp = express()
const { CronJob } = require("cron")
const axios = require("axios");
const path = require("path")
const {WebSocket, WebSocketServer} = require("ws")
const port = process.env.PORT || 8888;
expressApp.use(express.static('static'))
expressApp.use(express.json());
const app = express();
require('dotenv').config();

// const { Telegraf } = require('telegraf');

// const bot = new Telegraf(process.env.BOT_TOKEN);

// const coin = 'lrcusdt';

// const ws = new WebSocket(`wss://fstream.binance.com/ws/${coin}@trade`);

// const job = new CronJob(
// 	'00 01 * * * *', // cronTime
// 	function () {
//         console.log(123123);
//         bot.telegram.sendMessage(1766285817, "ping" , {})
// 	}, // onTick
// 	null, // onComplete
// 	true, // start
// 	'Asia/Ho_Chi_Minh' // timeZone
// );

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3000, () => console.log("Server ready on port 3000."));


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
  
// bot.launch()
