const mongoose = require("mongoose");
mongoose.connect(`mongodb://localhost/${process.env.MONGO_DATABASE}`, { useNewUrlParser: true});

const MONGODB_CONNECTION =
    process.env.MONGODB_ATLAS ||
    `mongod://localhost/${process.env.MONGO_DATABASE}`;

    mongosee
    .connect(MONGODB_CONNECTION,{
        useNewUrlParser:true
    })

    .catch(error =>{
        console.log("error happened when to reach mongodb connection", error);
    });
const db = mongoose.connection;

module.exports = db;