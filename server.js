const express = require('express')
const app = express()
const mongoose = require('mongoose')
const MongoURI = 'mongodb://localhost:27017/crm';

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





app.listen(4000, () => {
    console.log("server start")
})