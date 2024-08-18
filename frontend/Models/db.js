// userName: abhijeet21it pass:xWiNVpM4KtAjnN85
// mongodb+srv://abhijeet21it:xWiNVpM4KtAjnN85@cluster0.ooyptxy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
const mongoose = require('mongoose');
const mongo_url = process.env.MONGO_CONN;

mongoose.connect(mongo_url)
    .then(() => {
        console.log('MongoDB is Connected');
    }).catch((err) => {
        console.log('MongoDB Connnecton Error', err);
    })
