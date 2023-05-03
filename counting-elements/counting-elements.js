/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    let numsSet = new Set(arr)
    let count = 0
    
    for (const num of arr) {
        if (numsSet.has(num + 1)){
            count += 1
        }
    }
    
    return count
};