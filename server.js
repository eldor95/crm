const express = require('express')
const app = express()
const session = require("express-session");
const mongoose = require('mongoose')
const cookieParser = require("cookie-parser");
// const cors = require('cors')
const MongoURI = 'mongodb://localhost:27017/crm';
const MongoDBSession = require("connect-mongodb-session")(session);


app.use(express.json())
app.use(express.urlencoded({
    extended: false
}));

mongoose.connect(MongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDb connected! ');
});
// app.use(cors());

app.locals.moment = require("moment");

const store = new MongoDBSession({
    uri: MongoURI,
    collection: "MYSession",
});

app.use(cookieParser());

app.use(
    session({
        secret: "odiloveldor",
        saveUninitialized: false,
        store: store,
        resave: false,

        cookie: {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 2,
            sameSite: "strict",
        },
    })
);


app.use('/chat_answer', require('./router/chat/chat_answer'))
app.use('/chat_question', require('./router/chat/chat_question'))
app.use('/chat', require('./router/chat/chat'))

app.use('/user', require('./router/user'))
app.use('/fan', require('./router/fan'))
app.use('/learning_center', require('./router/learning_center'))
app.use('/mentor', require('./router/mentor'))
app.use('/mentors_audio', require('./router/mentors_audio'))
app.use('/mentors_collection', require('./router/mentors_collection'))
app.use('/mentors_form', require('./router/mentors_form'))
app.use('/mentors_group', require('./router/mentors_group'))
app.use('/mentors_theme', require('./router/mentors_theme'))
app.use('/mentors_video', require('./router/mentors_video'))
app.use('/mentors_test', require('./router/mentors_test'))
app.use('/tuman', require('./router/tuman'))
app.use('/viloyat', require('./router/viloyat'))

app.listen(4000, () => {
    console.log("server start")
})