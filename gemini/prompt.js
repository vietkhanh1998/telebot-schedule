const axios = require('axios');

const receivePrompt = async (prompt, key, bot, chatID) => {
  let data = JSON.stringify({
    "contents": [
      {
        "role": "user",
        "parts": [
          {
            "text": prompt
          }
        ]
      }
    ]
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${key}`,
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };

  await axios.request(config)
  .then((response) => {
    bot.telegram.sendMessage(chatID, response.data.candidates[0].content.parts[0].text , {})
  })
  .catch((error) => {
    console.log(error);
  });
}

module.exports = receivePrompt