const Lexer = require('./Lexer')
const Token = require('./Token')
const tokenTypes = require('./TokenTypes')

const eat = (tokens,tokenType) => {
    token = tokens.shift()
    if(token.type === tokenType){
        return token
    }else{
        throw `Invalid token ${this.currentToken}`
    }
}

module.exports = Interpreter = text => {
    const tokens = Lexer(text)

    const left = eat(tokens,tokenTypes.INTEGER)
    
    const op = eat(tokens,tokenTypes.PLUS)

    const right = eat(tokens,tokenTypes.INTEGER)
    

    return Number.parseInt(left.value) + Number.parseInt(right.value)
}