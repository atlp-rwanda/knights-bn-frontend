import React from 'react';
import '../assets/styles/styles.scss';

const Footer = () => {
  const date = new Date();
  return (
    <footer className="text-center pt-3 footer">
      <h3>
        &copy; Copyright
        {date.getFullYear()}
        {' '}
        knights-barefoot-nomad.com
      </h3>
    </footer>
  );
};

export default Footer;
