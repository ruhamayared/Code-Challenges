/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function(nums) {
    let counts = new Map()
    let unique = new Set()
    let ans = -1
    
    for (let num of nums) {
        counts.set(num, (counts.get(num) || 0) + 1)
        
        if (counts.get(num) === 1){
            unique.add(num)
        } else {
            unique.delete(num)
        }
    }
    
    for (let num of unique) {
            if (num > ans) {
                ans = num
            }
        }
    
    return ans
    
};