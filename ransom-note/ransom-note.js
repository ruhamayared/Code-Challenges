/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) { 
    let magazineMap = new Map()
    for (const i of magazine) {
        magazineMap.set(i, (magazineMap.get(i) || 0) + 1)
    }
    
    for (let i = 0; i < ransomNote.length; i++) {
        let charFreq = magazineMap.get(ransomNote[i])
        if (charFreq === undefined || charFreq === 0) {
            return false
        }
        magazineMap.set(ransomNote[i], charFreq - 1)
    }
    
    return true
    
};