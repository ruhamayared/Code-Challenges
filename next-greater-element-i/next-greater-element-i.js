/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let ans = []
    let stack = []
    let map = {}
    
    for (const num of nums2) {
        while (stack.length && stack[stack.length - 1] < num) {
            const stackTop = stack.pop()
            map[stackTop] = num
        }
        
        stack.push(num)
    }
    
    while (stack.length) {
        const stackTop = stack.pop()
        map[stackTop] = -1
    }
    
    for (const num of nums1) {
        ans.push(map.hasOwnProperty(num) ? map[num] : -1)
    }
    
    return ans
};