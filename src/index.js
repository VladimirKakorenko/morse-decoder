const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let str = '';
    for (let i = 0; i < expr.length; i+=10){
        let code = ''
        let partStr = expr.substr(i, 10);
        if (partStr === '**********'){
            code += ' ';
        }
        for (let y = 0; y < partStr.length; y += 2){
            if (partStr.substr(y, 2) === '10'){
                code += '.';
            }else if (partStr.substr(y, 2) === '11'){
                code += '-';
            }else if (partStr.substr(y, 2) === '00'){
                code += '';
            }
        }
        if (code === ' '){
            str += ' ';
        }else {
            str += MORSE_TABLE[code];
        }
    }
    return str;
}

module.exports = {
    decode
}
