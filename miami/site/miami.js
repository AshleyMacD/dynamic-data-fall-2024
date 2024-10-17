// Imports express into our project
const express = require("express")
const app = express()


// Specify static routes
app.use(express.static('public'))


// Import a package for handlebars
const expressHandlebars = require('express-handlebars')


// Make express use the hadlebars template engine
app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',
}))
app.set('view engine','handlebars')

// Set the PORT
const PORT = process.env.PORT || 3000

// Import App-wide data
const gallery = require("./data/gallery.json")


// Process routes before errors

app.get('/',(request,response)=>{
    console.log(gallery)
    const data = require("./data/home-data.json")
    response.render('landing', {
        gallery,
        data
        })
})
app.get('/lodging', (request,response)=> {
    console.log(gallery)
    const data = require("./data/lodging-data.json")
    response.render('landing', {
        gallery,
        data
        })
})

app.get('/nightlife', (request,response)=> {
    console.log(gallery)
    const data = require("./data/nightlife-data.json")
    response.render('landing', {
        gallery,
        data
        })
})


app.get('/food', (request,response)=> {
    console.log(gallery)
    const data = require("./data/food-data.json")
    response.render('landing', {
        gallery,
        data
        })
})
app.get('/wildlife', (request,response)=> {
    console.log(gallery)
    const data = require("./data/wildlife-data.json")
    response.render('landing', {
        gallery,
        data
        })
})



// Handle the errors first
// Not using proper parameter names triggers an error



// NOT FOUND
app.use((request,response)=>{
    response.render('404')
    response.status(404)
    
 } )
 

 // SERVER ERROR :(
 app.use((error,request,response,next)=>{
    console.log(error.message)
    response.status(500)
    response.render('500')
 } )

 app.listen(PORT, () =>{
    console.log(`Express is running on http://localhost:${PORT} `)
    console.log('Press ctrl-c to terminate')
 })
