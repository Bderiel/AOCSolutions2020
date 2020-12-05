function countTrees(trees, right, down) {
    let count = 0;
    let rowIdx = 0;
    let colIdx = 0;

    while (rowIdx < trees.length) {
        colIdx = (colIdx + right) % trees[rowIdx].length;
        rowIdx += down;
        if (trees[rowIdx] && trees[rowIdx][colIdx] === '#') {
            count++
        }
    }

    return count;
}

  // console.log(
// countTrees(input3, 3, 1)
// )
// console.log(
// countTrees(input3, 1, 1) * countTrees(input3, 3, 1) * countTrees(input3, 7, 1) * countTrees(input3, 1, 2) * countTrees(input3, 5, 1)
// )