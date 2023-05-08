/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let stoneMap = new Map()
    
    let count = 0
    
    for (const i of stones) {
        stoneMap.set(i, (stoneMap.get(i) || 0) + 1)
    }
    
    for (const i of jewels) {
        let charFreq = stoneMap.get(i)
        
        if (charFreq !== undefined || charFreq > 0) {
            count += charFreq
        }
    }
    
    return count
};