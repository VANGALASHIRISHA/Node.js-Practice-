var http=require('http');
var data=require('./users');
const { json } = require('stream/consumers');

var userslist=data.getAll();
const server=http.createServer((req,res)=>{
    if(req.url=="/users" && req.method=="GET"){
        res.end(JSON.stringify(userslist));
    }
    if(req.url=="/registration" && req.method=="POST"){
        let user="";
        req.on('data',(chunk)=>{
            user+=chunk;
        })
        req.on('end',()=>{
            userslist.push(JSON.parse(user));
            res.end(JSON.stringify({"message":"registration Successfully"}));
        })
    }
    if(req.url=="/login" && req.method=="POST"){
        let user="";
        req.on('data',(chunk)=>{
            user+=chunk;

        })
        req.on('end',()=>{
            user=JSON.parse(user);
            var reguser=userslist.find((u)=>u.username==user.username);
            if(reguser){
                if(reguser.password==user.password){
                 if (reguser.role == "admin") {
                    res.end("Admin Login Success");
                }
                else if (reguser.role =="user") {
                    res.end("User Login Success");
                }

            } else {
                res.end("Username or Password Incorrect");
            }
        } else {
            res.end("User Not Found");
        }
        });
}
 if(req.url.startsWith("/users/")&&req.method=="DELETE"){
        var username=req.url.split("/")[2];
        var index=userslist.findIndex((u)=>u.username==username);
        if(index!=-1){
            userslist.splice(index,1);
            res.end("Product Deleted Sucessfully");
        }
    }
if(req.url.startsWith("/users/")&&req.method=="GET"){
    var username=req.url.split("/")[2];
    var user=userslist.find((u)=>u.username==username);
    if(user){
        res.end(JSON.stringify(user));
    }
    else {
        res.end(JSON.stringify({ message: "User Not Found" }));
    }
}
 if(req.url=="/changePassword"&&req.method=="PUT"){
    let user="";
    req.on('data',(chunk)=>{
        user+=chunk;
    })
    req.on('end',()=>{
        user=JSON.parse(user);
        var index=userslist.findIndex((u)=>u.username==user.username);
        if(index!=-1){
            var userdetail=userslist[index];
            if(userdetail.password==user.currentpassword){
                userdetail.password=user.newpassword;
                userslist.splice(index,1,userdetail);
                res.end(JSON.stringify({"message":"password Updated"}));
            }
            else{
                res.end(JSON.stringify({"message":"password mismatched"}));
            }
        }
        else{
            res.end(JSON.stringify({"message":"user not found"}));
        }
    })

}
 if(req.url.startsWith("/update/")&&req.method=="PUT")
{
    var username=req.url.split("/")[2];
    var index=userslist.findIndex((u)=>u.username==username);
    let newuser="";
    req.on('data',(chunk)=>{
        newuser+=chunk;
    })
    req.on('end',()=>{
        if(index!=-1){
        userslist.splice(index,1,JSON.parse(newuser));
        res.end("users values are Updated");
        }
        else{
            res.end("user not found")

        }
    })
}


 
})
var port=3000;
server.listen(port,()=>{
    console.log(`server running at :http://localhost:${port}/`);
})