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
 * @return {string}
 */
var smallestFromLeaf = function (root) {
  let str = null;

  function traverse(node, path) {
    if (!node) return;

    path = String.fromCharCode(97 + node.val) + path;

    if (!node.left && !node.right) {
      if (str === null || path < str) {
        str = path;
      }
    }

    traverse(node.left, path);
    traverse(node.right, path);
  }

  traverse(root, "");
  return str;
};
