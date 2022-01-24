import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

const users = []
const tweets = []

app.post('/sign-up', (req, res) => {
    const user = req.body;
    users.push(user)
    res.send('OK')
})

app.post('/tweets', (req, res) => {
    const tweet = req.body;
    tweets.push(tweet)
    res.send('OK')
})

app.get('/tweets', (req, res) => {
    let newTweets = []
    let avatar = ''
    for (let i = tweets.length-1; i >= tweets.length-10; i--){
        if (i < 0){
            break
        }
        avatar = users.find(user => user.username === tweets[i].username);
        newTweets.push(tweets[i])
        newTweets[newTweets.length-1].avatar = avatar.avatar
    }
    res.send(newTweets)
})

app.listen(5000)