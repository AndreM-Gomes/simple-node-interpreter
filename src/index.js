const prompt = require('prompt-sync')({sigint:true});
const Interpreter = require('./Interpreter')
while(1){
    text = prompt('>')
    if(text.length >= 0){
        console.log(Interpreter(text))
    }else{
        continue
    }
}
