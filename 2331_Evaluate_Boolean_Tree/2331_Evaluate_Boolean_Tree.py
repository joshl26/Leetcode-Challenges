class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def evaluateTree(root: TreeNode) -> bool:
    if root.val == 0:
        return False
    if root.val == 1:
        return True
        
    left_val = evaluateTree(root.left)
    right_val = evaluateTree(root.right)
    
    if root.val == 2:  # OR operation
        return left_val or right_val
    if root.val == 3:  # AND operation
        return left_val and right_val

# Example usage:
# Tree: [2, 1, 3, null, null, 0, 1]
#      2
#     / \
#    1   3
#       / \
#      0   1
root = TreeNode(2, TreeNode(1), TreeNode(3, TreeNode(0), TreeNode(1)))
print(evaluateTree(root))  # Output: True

# Time Complexity: O(n) - where n is the number of nodes in the tree.
# Space Complexity: O(h) - where h is the height of the tree due to the recursion stack.