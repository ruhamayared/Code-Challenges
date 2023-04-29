/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let n = nums.length
    let ans = []
    let left = 0
    let right = n - 1
    let i = n - 1
    
    while (left <= right) {
        let leftSquare = nums[left] ** 2
        let rightSquare = nums[right] ** 2
        if (leftSquare >= rightSquare) {
            ans[i] = leftSquare
            left ++
        } else {
            ans[i] = rightSquare
            right --
        }
        i --
        
    }
    
    return ans
    
};