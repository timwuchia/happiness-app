const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const openai = require('./config/openaiConfig');
const cors = require('cors');
const axios = require('axios');

//Initialize middleware
app.use(express.json({extended: false}));
app.use(bodyParser.urlencoded({extended: true}));

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, './client/build')));

app.post('/api/generate-response', async (req, res) => {
    const { word, feeling, personality } = req.body;
    const description = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'user',
                content: `Generate a Youtube search query for someone with a ${personality} personality type who has ${feeling} and currently wants some ${word}`
            }
        ],
        max_tokens: 30
    })
    const youtubePlayList = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?q=${description.data.choices[0].message.content}&key=${process.env.YOUTUBE_API_KEY}&type=video&part=snippet`
    )
    res.json({
        youtube: youtubePlayList.data
    })
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})