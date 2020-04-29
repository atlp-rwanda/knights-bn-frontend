import React from 'react';
import '../assets/styles/styles.css';

const Line = (props) => (
  <svg className={props.className} viewBox="0 1 120.5 1">
    <path
      fill="transparent"
      stroke="rgba(231,231,231,1)"
      width="1px"
      linejoin="miter"
      linecap="square"
      miterlimit="10"
      rendering="auto"
      id="Line"
      d="M 0 1 L 120.5 1"
    />
  </svg>
);

export default Line;
