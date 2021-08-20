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


app.use('/user', require('./router/user'))
app.use('/fan', require('./router/fan'))
app.use('/learning_center', require('./router/learning_center'))
app.use('/mentor', require('./router/user'))
app.use('/user', require('./router/user'))
app.use('/user', require('./router/user'))
app.use('/user', require('./router/user'))
app.use('/user', require('./router/user'))
app.use('/user', require('./router/user'))
app.use('/user', require('./router/user'))
app.use('/user', require('./router/user'))
app.use('/user', require('./router/user'))
app.use('/user', require('./router/user'))

app.listen(4000, () => {
    console.log("server start")
})