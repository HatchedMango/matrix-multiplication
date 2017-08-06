import React from 'react';
import OperationSpace from './OperationSpace';
import { multiplyMatrixList } from './matrixOperations'

export default class App extends React.Component {
  constructor() {
    super();
    const createDefaultMatrix = () => {
      return {
        cells: Array(9).fill(null),
        rowCount: 3,
        columnCount: 3
      }
    };

    this.state = {
      operands: [createDefaultMatrix(), createDefaultMatrix()],
      resultMatrix: createDefaultMatrix(),
      storedMatrices: []
    };

    this.onCellChange = this.onCellChange.bind(this);
    this.onClickCalculate = this.onClickCalculate.bind(this);
  }

  render() {
    return (
      <div id='matrix-space'>
        <OperationSpace
          operands={this.state.operands}
          resultMatrix={this.state.resultMatrix}
          handleCellChange={(matrixIndex, cellIndex, event) => 
            this.onCellChange(matrixIndex, cellIndex, event)}
        />
        <button className='calculate' onClick={this.onClickCalculate}>Calculate</button>
      </div>
    );
  }

  onCellChange(matrixIndex, cellIndex, event) {
    const operands = this.state.operands.slice();
    
    operands[matrixIndex].cells[cellIndex] = event.target.value;
    this.setState({ operands: operands });
  }

  onClickCalculate() {
    const operands = this.state.operands.slice();
    const result = multiplyMatrixList(operands);

    this.setState({ resultMatrix: result });
    this.forceUpdate();
  }
}
