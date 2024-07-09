const { Telegraf } = require('telegraf');
const express = require('express')
const schedule = require('node-schedule');
const app = express()

require('dotenv').config();

const PORT = process.env.PORT || 3000
const bot = new Telegraf(process.env.BOT_TOKEN_TELEGRAM);

app.use(express.static('static'))
app.use(express.json());

const wordsList = [
  ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon"],
  ["mango", "nectarine", "orange", "papaya", "quince", "raspberry", "strawberry", "tangerine", "ugli fruit", "vanilla"],
  ["watermelon", "xigua", "yam", "zucchini", "avocado", "blueberry", "cantaloupe", "durian", "eggplant", "feijoa"]
];

const sendWords = (chatId, words) => {
  bot.telegram.sendMessage(chatId, `Here are your new words:\n${words.join(', ')}`, {});
};

const chatId = '1766285817'; // Replace with your chat ID

// bot.command('d', async ctx => {  
//   try {
//     const videoUrl = ctx.message.text.split(" ")[1];
//     const videoInfo = await ytdl.getInfo(videoUrl);
//     const audioFormats = ytdl.filterFormats(videoInfo.formats, "audioonly");
//     // audioFormats.map((item) => {
//     //   console.log(item);
//     //   // bot.telegram.sendMessage(ctx.chat.id, item.url, {})
//     // });

//     console.log(audioFormats[0].url, __dirname);
   
//   } catch (error) {
//     next(error);
//   }
  
// })

app.get("/", (req, res) => {
  res.send("ok nodejs")
});
app.listen(PORT, () => console.log(`Server ready on port ${PORT}.`));
schedule.scheduleJob('* * * * *', () => sendWords(chatId, wordsList[0])); 
// bot.launch()
