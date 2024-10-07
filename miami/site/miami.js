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
    response.render('landing', {
        gallery,
        title:"This is Miami.", 
        abstract:"Miami is a great place to live.",
        image:"miamibeach.jpg"})
})
app.get('/about', (request,response)=> {
    response.render('page', {
        title:"About Miami",
        abstract:"Miami, known for its vibrant culture and year-round sunshine, is a city like no other. From the art deco architecture of South Beach to the multicultural vibrancy of Little Havana, Miami offers something for every traveler. Its beaches are world-renowned, with golden sands and turquoise waters, perfect for relaxation or adventure. Miami is also a hub for arts, home to galleries, museums, and an electric music scene. Whether you're here for its famed nightlife, diverse cuisine, or the natural beauty of its surrounding wildlife, Miami offers a unique blend of experiences that captivate visitors."
    })
})

app.get('/nightlife', (request,response)=> {
    response.render('page', {
        title:"Miami at Night.",
        abstract:"Stay away from South Beach"
    })
})


app.get('/food', (request,response)=> {
    response.type('text/plain')
    response.send('Miami Food')
})
app.get('/wildlife', (request,response)=> {
    response.type('text/plain')
    response.send('Miami Wildlife')
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
