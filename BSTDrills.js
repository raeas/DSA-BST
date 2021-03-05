const BinarySearchTree = require('./DSA-BST');
const { balancedBST, findHeight, isBST, thirdLargest, duplicateTrees } = require ('./DSA-Helper-Fns');

//3a. Create a BST class, insert 3,1,4,6,9,2,5,7
//5. Height of a BST
//6. Is it a BST?
//7. 3rd largest node
//8. Balanced BST
function main () {
  const BST = new BinarySearchTree();
  BST.insert(3),
  BST.insert(1);
  BST.insert(4);
  BST.insert(6);
  BST.insert(9);
  BST.insert(2);
  BST.insert(5);
  BST.insert(7);
  // console.log(BST)
  console.log('Height nums: ', findHeight(BST))
  console.log('Is Nums BST?: ', isBST(BST))
  console.log('Nums 3rd Lgst: ', thirdLargest(BST))
  console.log('Balanced? ', balancedBST(BST))
}
main()

//3b. Create a BST class, insert E A S Y Q U E S T I O N 
//5. Height of a BST
//6. Is it a BST?
//7. 3rd largest node
//8. Balanced BST
function main2 () {
  const BST = new BinarySearchTree();
  BST.insert('e'),
  BST.insert('a');
  BST.insert('s');
  BST.insert('y');
  BST.insert('q');
  BST.insert('u');
  BST.insert('e');
  BST.insert('s');
  BST.insert('i');
  BST.insert('o');
  BST.insert('n');
  // console.log(BST)
  console.log('Height letters ', findHeight(BST))
  console.log('Is Lts BST?: ', isBST(BST))
  console.log('Lts 3rd Lgst: ', thirdLargest(BST))
  console.log('Balanced? ', balancedBST(BST))  
}
main2()


//5. Height of a BST
//6. Is it a BST?
//7. 3rd largest node
//8. Balanced BST
function main3 () {
  const BST = new BinarySearchTree();
  BST.insert(1),
  BST.insert(1);
  BST.insert(1);
  BST.insert(1);
  BST.insert(2);
  BST.insert(2);
  BST.insert(2);
  BST.insert(2);
  // console.log(BST)
  console.log('Height 1s 2s: ', findHeight(BST))
  console.log('Is 1s 2s BST?: ', isBST(BST))
  console.log('!s 2s 3rd Lgst: ', thirdLargest(BST))
  console.log('Balanced? ', balancedBST(BST))
}
main3()

// 4. What does this program do?
function tree (t) {
  if (!t) {
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right);
}

//This function returns the sum of all values within the tree. It will have runtime O(n),
//since it will be called once on every node within the tree.

//9. Are they the same BSTs?
function main4 () {
  const arr1 = [3, 5, 4, 6, 1, 0, 2];
  const arr2 = [3, 1, 5, 2, 4, 6, 0];

  const arr3 = [3, 9, 5, 64, 1, 0, 2];
  const arr4 = [3, 11, 5, 2, 4, 7, 0];

  console.log(duplicateTrees(arr1, arr2));
  console.log(duplicateTrees(arr3, arr4));
}
main4();