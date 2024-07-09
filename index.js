const { Telegraf } = require('telegraf');
const express = require('express')
const schedule = require('node-schedule');
const app = express()
const pingNewWords = require("./api/cron/new_words_ping.js")

require('dotenv').config();

const PORT = process.env.PORT || 3000
const bot = new Telegraf(process.env.BOT_TOKEN_TELEGRAM);

app.use(express.static('static'))
app.use(express.json());

const chatId = '1766285817'; // Replace with your chat ID

pingNewWords(chatId, schedule, bot)

app.get("/", (req, res) => {
  res.send("ok nodejs")
});

app.listen(PORT, () => console.log(`Server ready on port ${PORT}.`));

bot.launch()
