/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length
    let rangeSum = (n* (n + 1)) / 2
    let sumNums = nums.reduce((a,b) => a + b, 0)
    
    return rangeSum - sumNums
    
    
};