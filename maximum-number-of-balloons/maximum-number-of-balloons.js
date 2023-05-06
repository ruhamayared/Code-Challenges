/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let counts = new Map()

    for (let i = 0; i < text.length; i++) {
            counts.set(text[i], (counts.get(text[i]) || 0) + 1)
    }

        let bCount = counts.get('b') || 0;
        let aCount = counts.get('a') || 0;
        let lCount = Math.floor(counts.get('l') / 2) || 0;
        let oCount = Math.floor(counts.get('o') / 2) || 0;
        let nCount = counts.get('n') || 0;

        return Math.min(bCount, aCount, lCount, oCount, nCount)
};