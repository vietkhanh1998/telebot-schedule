const { Telegraf } = require('telegraf');
const express = require('express')
const schedule = require('node-schedule');
const app = express()
const pingNewWords = require("./api/cron/new_words_ping.js")
const receivePrompt = require("./gemini/prompt.js")

require('dotenv').config();

const PORT = process.env.PORT || 3000
const bot = new Telegraf(process.env.BOT_TOKEN_TELEGRAM);

app.use(express.static('static'))
app.use(express.json());

const chatId = process.env.BOT_CHAT_ID; 

// pingNewWords(chatId, schedule, bot)

bot.on('message', (msg) => {
  const receiveChat = msg.update.message.text;
  receivePrompt(receiveChat, process.env.GEMINI_API_KEY, bot, chatId)
});

app.get("/", (req, res) => {
  res.send("ok nodejs")
});

app.listen(PORT, () => console.log(`Server ready on port ${PORT}.`));

bot.launch()
