module.exports = Lexer = text => {
    var tokens = []
    const charArray = text.split('')
    buffer = ''
    for (let i = 0; i <= charArray.length; i++) {

        const currentElement = charArray[i]
        const nextElement = charArray[i+1]

        if(i === charArray.length){
            tokens.push(Token(tokenTypes.EOF,undefined))
            return tokens
        }
        else if(currentElement>='0' && currentElement<='9'){
            buffer += currentElement
            if(!(nextElement>='0' && nextElement<='9')){
                tokens.push(Token(tokenTypes.INTEGER,buffer))
                buffer = ''
            }
            continue
        }
        else if(currentElement == '+'){
            tokens.push(Token(tokenTypes.PLUS,currentElement))
            continue
        }else{
            throw `Unexpected character '${currentElement}'`
        }
        
    }
}