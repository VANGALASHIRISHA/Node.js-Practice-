var readline=require('readline');
const rl=readline.createInterface({
input:process.stdin,
output:process.stdout
});
// rl.question('enter your name: ',(a)=>{
//     console.log(`Hello ${a} Welcome to Invokeit`);
//     rl.close();
// });
rl.question('enter a number:',(a)=>{
    rl.question('enter a second number:',(b)=>{
        let sum=Number(a)+Number(b);
        console.log(`Sum is: ${sum}`);
        rl.close();
    }
    )
})