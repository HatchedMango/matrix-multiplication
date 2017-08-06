import React from 'react';
import Matrix from './Matrix';

export default class OperationSpace extends React.Component {
  render() {
    const expressionDisplay = createExpression(this.props);
    const resultDisplay = createResultWhenReady(this.props.resultMatrix);

    return (
      <div id='operation-space'>
        <div id='expression'>
          {expressionDisplay}
        </div>
        <div id='equals'>=</div>
        {resultDisplay}
      </div>
    );
  }
}

function createExpression(props) {
  return props.operands.map((matrix, index) => (
      <Matrix 
        cells={matrix.cells}
        columnCount={matrix.columnCount}
        handleCellChange={(cellIndex, event) =>
          props.handleCellChange(matrixIndex, cellIndex, event)}
      />
    ));
}

function createResultWhenReady(resultMatrix) {
  return (
    <div id='result'>
      <Matrix 
        cells={resultMatrix.cells}
        columnCount={resultMatrix.columnCount}
      />
    </div>
  );
}
