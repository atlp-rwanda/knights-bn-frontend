import React from 'react';

export const Stats = ({
  length, titleText, className,
}) => (
  <div className={className}>
    <h5>{titleText}</h5>
    <span>
      (
      {length}
      )
    </span>
  </div>
);

export const TableHeader = ({
  thTitle,
}) => (
  <thead>
    <tr>
      {thTitle.map((title) => (<th key={title}>{title}</th>))}
    </tr>
  </thead>
);
