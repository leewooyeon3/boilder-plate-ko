const express = require('express')
const app = express()
const port = 5000
//const {User} = require("./models/User");
//const bodyParser = require('body-parser');
//application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({extended: true}));
//application/json
//app.use(bodyParser.json());
//const config = require('./condif/key')
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://leewooyeon3:861212@cluster0.cnnai.mongodb.net/<dbname>?retryWrites=true&w=majority',
{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
    
}).then(() => console.log('MongoDB Connect...')).catch(err => console.log(err))

app.get('/', (req, res) => {
    
  res.send('Hello World~~~안녕하세요.')
})
/*
app.post('/register', (req, res) => {
    const user = new User(req.body)
    //console.log({user});
    user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err })
        return res.status(200).json({success:true
        })
    })
})
*/
app.listen(port, () => 
  console.log(`Example app listening at http://localhost:${port}`))