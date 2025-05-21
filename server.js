
import http from 'http';
// var server=http.createServer((request,response)=>{
//     response.write("<h1>welcome to node js</h1>")
//     response.end();
// })

// server.listen(8084,(error)=>{
//     if(error){
//         console.log("server not invoked")
//     }
//     else{
//         console.log("server invoked at the port 8084")
//     }
// })



http.createServer((req,res)=>{

//     res.write("<h1>welcome to node js</h1>")
//     res.write("welcome to our server")
//     res.end();

// }).listen(8084)
// console.log("server invoked")


if(req.url=='/home'|| req.url=='/'){
    res.write("welcome to home page")

}
else if(req.url=='/about') {
    res.write("welcome to about page")

}
else if(req.url=='/login'){
    res.write("welcomme to login page")
}
else{
    res.write("invalid url")
}


res.end();

}).listen(8084)
console.log("server invoked")