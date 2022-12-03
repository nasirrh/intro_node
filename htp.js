const http=require('http')
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page');
    }
    if(req.url === '/about'){
        res.end('Welcome to our about page');
    }
    res.end(`
    <h1>oops</h1>
    <p>we can't see this page</p>
    <a href="/">back home page </a>
    `)
})
server.listen(3000);