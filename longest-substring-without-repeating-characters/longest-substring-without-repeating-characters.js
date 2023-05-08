/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let counts = new Map()
    let left = ans = 0
    
    for (let right = 0; right < s.length; right ++) {
        counts.set(s[right], (counts.get(s[right]) || 0) + 1)
        
        while (counts.get(s[right]) > 1) {
            counts.set(s[left], counts.get(s[left]) - 1)
            left++
        }
        
        ans = Math.max(ans, right - left + 1)
    }
    return ans
};