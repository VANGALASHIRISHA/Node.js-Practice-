var http=require('http');
var data=require('./products');
var productList=data.getProducts();

const server=http.createServer((req,res)=>{
    res.setHeader("Content-Type","application/json");
    if(req.url=="/hello" &&req.method=="GET"){
        res.end("Hello World");
    }
    else if(req.url=="/product" && req.method=="GET"){
        res.end(JSON.stringify(productList));
    }
    else if(req.url=="/addProduct" && req.method=="POST"){
        let newProduct= "";
        req.on('data',(chunk)=>{
            newProduct+=chunk;
        })
        req.on('end',()=>{
            productList.push(JSON.parse(newProduct));
             res.end("Product Added! SussessFully");
        })
    }
    else if(req.url.startsWith("/product/")&&req.method=="DELETE"){
        var pid=req.url.split("/")[2];
        var index=productList.findIndex((p)=>p.productId==pid);
        if(index!==-1){
            productList.splice(index,1);
            res.end("Product Deleted Sucessfully");
        }
    }
    else if(req.url.startsWith("/product/")&&req.method=="PUT"){
        var pid=req.url.split("/")[2];
        var index=productList.findIndex((p)=>p.productId==pid);
        let newProduct="";
        req.on('data',(chunk)=>{
            newProduct+=chunk;
        })
        req.on('end',()=>{
            productList.splice(index,1,JSON.parse(newProduct));
            res.end("Product valued Updated!...");
        })

    }
    else{
        res.statusCode=404;
        res.end("Page NotFound");
    }
    
})
var port=3000;
    server.listen(port,()=>{
        console.log(`server running at http://localhost:${port}/`);
    })