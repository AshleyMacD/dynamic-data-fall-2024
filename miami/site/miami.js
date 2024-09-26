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

const PORT = process.env.PORT || 3000
// Process routes before errors
app.get('/',(request,response)=>{
    response.render('landing', {
        title:"This is Miami.", 
        abstract:"Miami is a great place to live.",
        image:"miamibeach.jpg"})
})
app.get('/about', (request,response)=> {
    response.render('page', {
        title:"About Miami",
        abstract:"From the Miami Marlins to the Miami Heat, there's a lot to see."
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