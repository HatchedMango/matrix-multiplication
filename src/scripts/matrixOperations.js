export function multiplyMatrixList(matrices) {
  return matrices.slice(1).reduce((result, matrix) =>
    multiplyTwoMatrices(result, matrix), matrices[0]);
}

function multiplyTwoMatrices(matrix1, matrix2) {
   const result = {
      cells: Array(matrix1.rowCount * matrix2.columnCount).fill(0),
      rowCount: matrix1.rowCount,
      columnCount: matrix2.columnCount
    };

    for (let i = 0; i < matrix1.rowCount; i++) {
      for (let j = 0; j < matrix2.cells.length; j++) {
        const rowNum2 = Math.floor(j / matrix2.columnCount);

        result.cells[(i * matrix1.columnCount) + j % matrix2.columnCount] += 
          matrix1.cells[(i * matrix1.columnCount) + rowNum2] * matrix2.cells[j];
      }
    }

    return result;
}
