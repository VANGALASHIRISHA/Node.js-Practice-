var fs=require('fs');
var allfile=fs.readdirSync('./');
// console.log(allfile);
fs.readFile('./hello.txt','utf8',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
    console.log(data);
    }
    })

var str="Mern Stack By Bhaskara"
fs.writeFile('./welcome.txt',str,(err) =>{
    if (err){
        console.log(err);
    }
    else{
        console.log("Written Successfully");
    }
});
// var str = "Mern Stack By Bhaskara";

// fs.writeFile('./welcome.txt',str, (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Written Successfully");
//     }
// });
