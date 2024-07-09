const pingNewWords = (chatId, schedule, bot) => {
    bot.telegram.sendMessage(chatId, `Bot running....!`, {});
    const wordsList = [
        ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon"],
        ["mango", "nectarine", "orange", "papaya", "quince", "raspberry", "strawberry", "tangerine", "ugli fruit", "vanilla"],
        ["watermelon", "xigua", "yam", "zucchini", "avocado", "blueberry", "cantaloupe", "durian", "eggplant", "feijoa"]
    ];
    
    const sendWords = (chatId, words) => {
        bot.telegram.sendMessage(chatId, `Here are your new words:\n${words.join(', ')}`, {});
    };
    
    schedule.scheduleJob('*/1 * * * *', () => sendWords(chatId, wordsList[0])); 
}

module.exports = pingNewWords
