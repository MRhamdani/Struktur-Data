// Diberikan sebuah binary tree, tuliskan fungsi untuk melakukan inorder traversal (kiri, akar, kanan) dan kembalikan hasil traversal dalam bentuk list.
// Input :

// Membangun binary tree:
//   1
//    \
//     2
//    /
//   3

// const root = new TreeNode(1);
// root.right = new TreeNode(2);
// root.right.left = new TreeNode(3);
// console.log(inorderTraversal(root)); // Output: [1, 3, 2]

// PENYELESAIAN
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function inorderTraversal(root) {
  const result = [];
  function traverse(node) {
    if (!node) return;
    traverse(node.left);
    result.push(node.val);
    traverse(node.right);
  }
  traverse(root);
  return result;
}

// Contoh penggunaan
const root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);
console.log(inorderTraversal(root)); // Output: [1, 3, 2]
