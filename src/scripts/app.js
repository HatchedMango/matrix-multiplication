import React from 'react';
import OperationSpace from './OperationSpace';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      operands: [
        {
          cells: [1,2,3,4,5,6,7,8,9],
          columnCount: 3,
          rowCount: 3
        },
        {
          cells: [9,3,4,2,1,4,2,3,4],
          columnCount: 3,
          rowCount: 3
        },
        {
          cells: [9,3,4,2,1,4,2,3,4],
          columnCount: 3,
          rowCount: 3
        }
        ,
        {
          cells: [9,3,4,2,1,4,2,3,4],
          columnCount: 3,
          rowCount: 3
        }
      ],
      resultMatrix: {
          cells: [],
          columnCount: 0,
          rowCount: 0
        },
      storedMatrices: []
    };

    this.myFunction = this.myFunction.bind(this);
  }

  render() {
    return (
      <div id='matrix-space'>
        <OperationSpace 
          operands={this.state.operands}
          resultMatrix={this.state.resultMatrix}
          handleChange={(cellIndex, event, matrixIndex) => this.onChange(cellIndex, event, matrixIndex)}
        />
        <button className='myButton' onClick={this.myFunction}>Click me</button>
      </div>
    );
  }

  onChange(cellIndex, event, matrixIndex) {
    const operands = this.state.operands.slice();
    
    operands[matrixIndex].cells[cellIndex] = event.target.value;
    this.setState({ operands: operands });
  }

  myFunction() {
    const operands = this.state.operands.slice();
    const result = multiplyMatrixList(operands);

    this.setState({ resultMatrix: result });
    this.forceUpdate();
  }
}

function multiplyMatrixList(matrices) {
  const identityMatrix = {
      cells: [1, 0, 0, 0, 1, 0, 0, 0, 1],
      columnCount: 3,
      rowCount: 3
    }; 
    
  return matrices.reduce((result, matrix) =>
    multiplyTwoMatrices(result, matrix), identityMatrix);
}

function multiplyTwoMatrices(matrix1, matrix2) {
   const result = {
      cells: Array(9).fill(0),
      columnCount: 3,
      rowCount: 3
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
