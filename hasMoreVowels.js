//let word = prompt("This machine calculates if your word has more vowels than consonants. What is your word?");



function vowelFind(word) {
    let newVowels = []
    let consonants = []
    let vowels = ['a','e','i','o','u']
    let wordSplitted = word.split('')
    for (let i = 0; i < wordSplitted.length; i++) {
        if (vowels.includes(wordSplitted[i])) {
            newVowels.push(wordSplitted[i])
        } else {
            consonants.push(wordSplitted[i])
        }
    } 
    if (newVowels.length > consonants.length) {
        return true
    } else {
        return false
    }
}
let vowelThing = vowelFind("bananaa")
console.log(vowelThing)