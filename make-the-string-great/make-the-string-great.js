/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let stack = []
    
    function isReacting(a, b) {
        // Check if characters 'a' and 'b' are the same letter with opposite cases
        return (a.toLowerCase() === b.toLowerCase()) && (a !== b);
        }
    
    for (const c of s) {
        const top = stack.length ? stack[stack.length -1] : null
        
        if (top && isReacting(top, c)) {
            stack.pop()
        }else {
            stack.push(c)
        }
    }
    
    const result = stack.join('')
    
    return result
    
};