/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const englishLetters = "abcdefghijklmnopqrstuvwxyz".split("")
    
    // let sentenceSet = new Set(sentence)
    let found = new Set()
    
    for (const letter of sentence) {
        found.add(letter)
    }
    return found.size === englishLetters.length
};