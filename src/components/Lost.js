import React from 'react';
import '../assets/styles/styles.scss';

const Lost = () => (
  <div className="text-center pt-3">
    <h3
      className="align-middle mt-200"
      style={{ marginTop: '15%', color: 'red' }}
    >
      {localStorage.getItem('lost-message')
        ? localStorage.getItem('lost-message')
        : 'Something went wrong'}
    </h3>
  </div>
);

export default Lost;
