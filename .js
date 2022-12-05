// required libs : mongoose | colors
// run the following command
// npm i mongoose colors

const colors = require('colors');
const mongoose = require('mongoose')
mongoose.connect(process.env.URI , { useNewUrlParser : true, useUnifiedTopology : true})
.then((res)=>console.log('> Connected...'.bgCyan))
.catch(err=>console.log(`> Error while connecting to mongoDB : ${err.message}`.underline.red ))

const mongoose = require('mongoose')    
const Schema Name = mongoose.Schema({
    name : {
        type : String,
        default : 'default txt',
    },
})
module.exports =  mongoose.model( 'model name' , Schema Name)

// you need to require Model first
// e.g >> const Model = require('./models/Model')
try { 
    const doc = new Model({
     // document data as an object here
}) 
    const result = await doc.save() 
    console.log(result) 
  } catch (error) { 
    console.log(error.message) 
  } 

res.status(403).send('forbidden >_<')

app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})