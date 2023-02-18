const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};


function numDecoder(str) {

    let result = '';
    let arr = [];

    for (let i = 0; i < str.length; i = i + 10) {
        result = '';
        let strArr = str.split('');
        let num = strArr.slice(i, (i + 10)).join(''); // Number(strArr.slice(i, (i+10)).join('')).toString();
        if (num[0] == '*') {
            // result = `${result} `;
            arr.push(' ')
        } else if (num[0] == 1 || num[0] == 0) {
            num = Number(num).toString();

            // вырезает 10 символов и сразу желает их числом убирая ноли впереди, тут же делаем строкой, чтобы перебирать по символу

            for (let a = 0; (a < num.length); a = a + 2) { // перебор числа, то есть закодированной буквы
                if (num[a] + num[a + 1] == 10) {
                    result = `${result}.`;
                    // arr.push(result);

                } else if (num[a] + num[a + 1] == 11) {
                    result = `${result}-`;
                    // arr.push(result);

                }

            }
            arr.push(result);
        }
    }
    return arr; // [ '--', '.' ]
}

function morseDecoder(arr) {
    debugger
    let result = '';
    let morseCodeArr = Object.keys(MORSE_TABLE); // получаем массив с ключами объекта, то есть с закодированными буквами 
    for (let i = 0; i < arr.length; i++) { // перебор массива с символами
        if (arr[i] === ' ') {
            result = `${result} `;
        }
        for (let a = 0; a < morseCodeArr.length; a++) { // перебор массива с ключами
            if (arr[i] == morseCodeArr[a]) {
                result = `${result}${MORSE_TABLE[arr[i]]}`
                break;
            }

        }

    }
    return result;
}
function decode(expr) {
    return morseDecoder(numDecoder(expr));
}



module.exports = {
    decode
}

let str = '00000011110000000010**********00000011110000000010';
let strArr = str.split('')
console.log(decode(str))
