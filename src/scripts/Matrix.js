import React from 'react';

export default function Matrix(props) {
  const cellDisplays = createCells(props);

  return (
    <div className='matrix'>
      <div className='left-bracket'></div>
        <div className='matrix-content'>
          {cellDisplays}
        </div>
      <div className='right-bracket'></div>
    </div>
  );
}

function createCells(props) {
  return props.cells.map((cell, index) => {
    const rowNum = Math.floor(index / props.columnCount);
    const className = `cell row-${rowNum}`

    return (
      <input key={index} className={className} value={cell} onChange={(event) => props.handleChange(index, event)}>
      </input>
    );
  })
}