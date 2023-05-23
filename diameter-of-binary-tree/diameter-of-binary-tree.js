/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let ans = 0
    
    let heightOfNode = (node) => {
        if (!node) {
            return 0
        }
        
        let leftHeight = heightOfNode(node.left)
        let rightHeight = heightOfNode(node.right)
        
        let diameterThroughNode = leftHeight + rightHeight
        
        ans = Math.max(ans, diameterThroughNode)
        
        return Math.max(leftHeight, rightHeight) + 1
    }
    
    heightOfNode(root)
    
    return ans
};