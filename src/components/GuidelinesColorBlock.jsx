import React from 'react';

export default (props) => (
  <div className="GuidelinesColorBlock">
    <div
      className="GuidelinesColorBlock__swatch"
      style={{ backgroundColor: props.hexCode }}
    />
    <h5>{props.colorName}</h5>
    <p>{props.hexCode}</p>
  </div>
);
