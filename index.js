require('dotenv').config()

const express =require('express')
const app = express()
const PORT = process.env.PORT || 3000
const homeRouter =require('./src/routes/home');
const userRouter =require('./src/routes/user');
const db = require('./src/config/database')

app.use("/", homeRouter);
app.use("/user", userRouter);

if (!db){
console.lo ("Failed connect to database")
}else{
console.log("Connected to database")
}

app.listen(PORT, ()=>{
console.log(`server running on PORT;${PORT}`)
})
