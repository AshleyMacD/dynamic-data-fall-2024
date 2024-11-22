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



// Process routes before errors

app.get('/',(request,response)=>{
    //console.log(gallery)
    const data = require("./data/home-data.json")
    response.render('category', {
        
        data
        })
})


app.get("/category/:category",(req,res)=>{
console.log(req.params.category)
let tempData = {}
    if(req.params.category == "cats") {
         tempData = require("./data/cat-data.json")
    } else if (req.params.category == "dogs") {
         tempData = require("./data/dog-data.json")
    } else if (req.params.category == "horses") {
         tempData = require("./data/horse-data.json")
    }

    res.render("category",{"data":tempData})


})



app.get('/about', (request,response)=> {
    //console.log(gallery)
    const data = require("./data/aboutus-data.json")
    response.render('about', {
       
        data
        })
})

app.get('/category/:category/details/:id', (req,response)=> {
    console.log(req.params.category)
    
    let data = {}

    if(req.params.category == "cats") {
        data = require("./data/cat-data.json")
   } else if (req.params.category == "dogs") {
        data = require("./data/dog-data.json")
   } else if (req.params.category == "horses") {
        data = require("./data/horse-data.json")
   }

   console.log(data)



    //Filter the data to get only the data that matches the ID

    var tempData = {"products":[]}
    

    tempData.products = data.products.filter((product)=>{
        return product.id = req.params.id 
    })

    response.render('details', {"data":data, "req":req })


})


let cart = {"products":[]}

app.get("/cart", (req,res)=> {

    if(typeof(req.query.id) != "undefined") {
        cart.products.push(req.query)
        console.log(req)
        console.log(req.query.name)
    } else {
        console.log(req)
        console.log(req.query.id)
        console.log(req.query.name)

    }


    res.render("cart", {"products":cart.products})
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
