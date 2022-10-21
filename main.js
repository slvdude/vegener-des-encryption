const alphabetEng =  'abcdefghigklmnopqrstuvwxyz'.split('')

// function generateVenegerSquare(alphabet) 
// {
//     let arr = []

//     for (let i = 0; i < alphabet.length; i++) 
//     {
//         arr[i] = alphabet.slice(i).concat(alphabet.slice(0, i))
//     }

//     return arr
// }

function formatKeyword(key, expression) 
{
    let keyIndexes = getIndexes(key)

    let iter = 0
    let formatedKey = []

    for (let i = 0; i < expression.length; i++) 
    {
        formatedKey[i] = keyIndexes[iter]
        iter++

        if (iter >= keyIndexes.length) {
            iter = 0
        }
    }

    return formatedKey
}


function getIndexes(exp) {
    let arr = []

    for (let i = 0; i < exp.length; i++) {
        arr.push(alphabetEng.indexOf(exp[i]))
    }

    return arr
} 

function encrypt(key, expression) 
{

    let expIndexses = getIndexes(expression)
    let formatedKey = formatKeyword(key, expression)

    let encryptedIndexes = []
    let encryptedWord = ''

    for (let i = 0; i < expression.length; i++) {
        encryptedIndexes[i] = (formatedKey[i] + expIndexses[i]) % 26
    } 

    for (let i = 0; i < encryptedIndexes.length; i++) {
        encryptedWord += alphabetEng[encryptedIndexes[i]]
    }

    return encryptedWord
}

function decrypt(key, expression)
{
    let expIndexses = getIndexes(expression)
    let formatedKey = formatKeyword(key, expression)
    
    let decryptedIndexes = []
    let decryptedWord = ''

    for (let i = 0; i < expression.length; i++) {
        let val = (expIndexses[i] - formatedKey[i]) % 26
        decryptedIndexes[i] = val > 0 ? val: (val + 26) % 26
    } 

    for (let i = 0; i < decryptedIndexes.length; i++) {
        decryptedWord += alphabetEng[decryptedIndexes[i]]
    }

    return decryptedWord
}

console.log(encrypt('lol', 'imfuckingretarded'))
console.log(decrypt('lol', 'taqfqvtbrcselfopr'))