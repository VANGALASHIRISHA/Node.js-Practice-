const { stdin } = require('process');
var readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question('enter a Opertaor AS You Perform:',(Op)=>{
    rl.question('enter a First Number:',(a)=>{
        rl.question('enter a second Number:',(b)=>{
          let num1=Number(a);
          let num2=Number(b);
          let result;
          switch(Op){
            case'+':
            result=num1+num2;
            break;
            case'-':
            result=num1-num2;
            break;
            case'*':
            result=num1*num2;
            break;
            case'/':
            result=b!==0 ? num1/num2 :"Cannot Divide By Zeros";
            break;
            default:
                result="Invalid Operator";
            
          }
          console.log("Result is "+result);
          rl.close();

        });
    });
});