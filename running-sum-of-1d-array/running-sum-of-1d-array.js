/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let runningSum = [nums[0]]
    for (let i = 1; i < nums.length; i++){
        runningSum[i] = nums[i] + runningSum[i - 1]
    }

    return runningSum
    
};