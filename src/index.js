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
    let arr = expr.split('')
    let result = [];
    for (let [ key, value ] of Object.entries(MORSE_TABLE)) {
        for (let i = 0; i < arr.length; i++){
            if (arr[i].includes(value)) {
                result[i] = key;
            } else if (arr[i] === ' '){
                result[i] = arr[i]
            }
        }
    }
    let morse = result;
    // morse = morse.split('')
    console.log(morse)
    let decoder;
    for (let j = 0; j < morse.length; j++){
        if (morse[j].includes('.')){
            morse[j] = '10';
            // console.log(decoder)
        } else if (morse[j].includes('-')){
            morse[j] = '11';
        }else if (morse[j].includes(' ')){
            morse[j] = '**********'; 
        }
        if (morse[j].length < 10){
            morse[j] = morse[j].padStart(10, '0');
        }
        decoder += morse[j]
    }
    return decoder.replace('undefined', '')
}

module.exports = {
    decode
}