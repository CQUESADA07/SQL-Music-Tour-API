
const express = require('express')
const { Sequelize } = require('sequelize')
const app = express()

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



// SEQUELIZE CONNECTION
const sequelize = new Sequelize({
    storage: process.env.PG_URI,
    dialect: 'postgres',
    username: 'postgres',
    password: process.env.PG_PASS
})

try {
    sequelize.authenticate() 
    console.log("Connected with postgres!🐘") 
} catch(err) {
    console.log(`Unable to connect to postgress: ${err}`) 
}

// ROOT 
app.get('/',(req,res)=>{
    res.status(200).json({
message:"welcome to the tour api"
    })
})

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`);
  });



















// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})