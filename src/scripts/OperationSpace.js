import React from 'react';
import Matrix from './Matrix';

export default class OperationSpace extends React.Component {
  render() {
    const expressionDisplay = createExpression(this.props);
    const resultDisplay = createResultWhenReady(this.props.resultMatrix);

    return (
      <div id='operation-space'>
        {expressionDisplay}
        {resultDisplay}
      </div>
    );
  }
}

function createExpression(props) {
  return props.operands.map((matrix, index) => {
    return (
      <div id='expression' key={index}>
        <Matrix 
          cells={matrix.cells}
          columnCount={matrix.columnCount}
          handleChange={(cellIndex, event) => props.handleChange(cellIndex, event, index)}
        />
      </div>
    );
  })
}

function createResultWhenReady(resultMatrix) {
  if (!resultMatrix.cells.length)
    return <div id='result'></div>;
  else
    return (
      <div id='result'>
        <h2>Result</h2>
        <Matrix 
          cells={resultMatrix.cells}
          columnCount={resultMatrix.columnCount}
        />
      </div>
    );
}
