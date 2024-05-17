# 1325. Delete Leaves With a Given Value

Medium
Topics
Companies
Hint
Given a binary tree root and an integer target, delete all the leaf nodes with value target.

Note that once you delete a leaf node with value target, if its parent node becomes a leaf node and has the value target, it should also be deleted (you need to continue doing that until you cannot).

Example 1:
![alt text](sample_1_1684.png)

Input: root = [1,2,3,2,null,2,4], target = 2
Output: [1,null,3,null,4]
Explanation: Leaf nodes in green with value (target = 2) are removed (Picture in left).
After removing, new nodes become leaf nodes with value (target = 2) (Picture in center).
Example 2:
![alt text](sample_2_1684.png)

Input: root = [1,3,3,3,2], target = 3
Output: [1,3,null,null,2]
Example 3:
![alt text](sample_3_1684.png)

Input: root = [1,2,null,2,null,2], target = 2
Output: [1]
Explanation: Leaf nodes in green with value (target = 2) are removed at each step.

Constraints:

The number of nodes in the tree is in the range [1, 3000].
1 <= Node.val, target <= 1000

Hint 1
Use the DFS to reconstruct the tree such that no leaf node is equal to the target. If the leaf node is equal to the target, return an empty object instead.

Interviewer and Interviewee Discussion
Interviewer: Let's discuss the problem about deleting leaf nodes in a binary tree. Given a binary tree and an integer target, we need to remove all the leaf nodes that have the value equal to target. If, after deletion, the parent nodes become leaves and also match the target, they should also be removed. The process continues until no more leaf nodes with the target value exist in the tree. How would you approach this problem?

Interviewee: To start with, I would consider a brute-force approach. We can perform a depth-first traversal and, each time, check if a node is a leaf node and whether its value matches the target. If it does, we remove it. We will also need to check the parent nodes and continue this process until no nodes are left that meet the criteria.

Interviewer: That sounds like a plan. Can you explain how you will remove a leaf node and also keep track of the parent nodes?

Interviewee: In a brute-force approach, during each traversal we can:

Check if a node is a leaf and its value is equal to the target.
If it is, we set the reference from its parent to null.
Perform depth-first traversal recursively to cover all nodes.
Repeat the above process starting from the root until there are no more deletions needed.
Brute Force Solution: Time and Space Complexity
Interviewer: That makes sense. What will be the time and space complexity for your approach?

Interviewee:

Time Complexity: Each pass of traversal through the tree will take (O(n)) time, where (n) is the number of nodes in the tree. In the worst case, we might need to pass through the tree multiple times, close to (n) times, making the worst-case time complexity (O(n^2)).
Space Complexity: The recursion stack will potentially go as deep as the height of the tree, which in the worst case (skewed tree) could be (n). Hence, the worst-case space complexity is (O(n)).
Optimizing the Solution
Interviewer: Can we optimize this approach further?

Interviewee:
One way to optimize is to handle the deletions in a single pass rather than multiple passes. We can modify our depth-first traversal to handle deletions seamlessly:

Traverse the tree using a post-order depth-first search.
At each node, first recursively process the left and right children.
After processing children, check if the node itself is now a leaf and needs to be deleted.
This way, each node is processed exactly once.

Optimized Solution: Time and Space Complexity
Interviewer: Great! What about the time and space complexity for this optimized approach?

Interviewee:

Time Complexity: Every node is visited exactly once, making the time complexity (O(n)).
Space Complexity: The space complexity remains (O(h)), where (h) is the height of the tree. In the worst case, it's (O(n)), but in balanced trees, it would be (O(\log n)).
Drawing Representation
Here's a visual representation illustrating the deletion process:

Initial Tree:
        1
      /   \
     2     3
    /     / \
   2     2   4

Step-by-Step Deletion:

1. Traverse to [2 (leaf with value = 2)], delete.
        1
      /   \
     2     3
    /     / \
  null   2   4

2. Now, [2 (leaf with value = 2)], delete.
        1
      /   \
     2     3
    /     / \
  null  null  4

3. Finally, [2 (leaf with value = 2)], delete.
        1
      /    \
  null     3
         /   \
       null   4

Final Tree:
   1
    \
     3
      \
       4
Good illustration helps in visualizing the deletions happening step-by-step.

Interviewer: Great job! This looks efficient, and your visual explanation clarifies the approach very well.
Let's implement the optimized solution in each of the provided languages. We'll use a post-order traversal approach to handle deletions in a single pass.
