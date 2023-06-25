const http=require('http');

const server = http.createServer((req,res)=>{
    console.log(req.method)
    res.setHeader('Content-Type','text/plain')
    res.write('Hello ninja')
    res.end()
})

server.listen(8000,'localhost',()=>{
    console.log('listening for requests on port 8000')
})