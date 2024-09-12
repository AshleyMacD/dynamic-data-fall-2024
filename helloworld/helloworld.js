//var name = "john"
// var name = "John"
// var age = 23
// let lastName = "Smith"
// const year = 2024

//JavaScript Object Notation AKA JSON
// var printer = {
//     color:"black",
//     size:"small",
//     price:29.99
// }

//GET POST PUT DELETE
//GET => READ OPERATION OF A DATABASE
//POST => CREATE "" ""
//PUT => UPDATE
//DELETE => DELETE

//Basic Conditions
/**
 * Equals: == (== because = is an assignment operator)
 * Not Equal: !=
 * Greater than: >
 * Less than: <
 * Greater than or equal: >=
 * Less than or equal: <=
 * 
 * And: &&
 */

//console.log(request)
//response.writeHead(200,{'Content-Type':'text/plain'})
// response.end('Hello World')

//console.log(request.url) 
//console.log(request.method)
//console.log("***********************************************")
//console.log("***********************************************")


const http = require('http')

const PORT = process.env.PORT || 3000;

//The callback is a function which executes after something else has completed
//Use the createServer() method to create an HTTP server
const server = http.createServer((request,response) => {
    //console.log("***********************************************")
    console.log("***********************************************")

    console.log(request.url) 
    console.log(request.method)
   
    //How to handle requests
    //ROUTING
    if (request.url == "/contact") {
        response.writeHead(200 , {"Content-Type" : "Text/Plain"})
        response.end("Contact Page")
        //execute the statement
    }

    else if (request.url == "/") {
        response.writeHead(200 , {"Content-Type" : "Text/Plain"})
        response.end("Home Page")
    }

    else if (request.url == "/about") {
        response.writeHead(200 , {"Content-Type" : "Text/Plain"})
        response.end("About Page")
    }

    else if (request.url == "/gallery") {
        response.writeHead(200 , {"Content-Type" : "Text/HTML"})
        response.end("<html><head><title>Page Title</title></head><body><h1>My first HTML response</h1><body></html>")
    } 
    
    else {
        response.writeHead(400, {"Content-Type" : "Text/Plain"})
        response.end("Page not found.")
    }



    console.log("Responding to request")

})

//Start the server
server.listen(PORT, ()=> console.log(`server started on port http://localhost:${PORT} press Ctrl-C to terminate.....`))


