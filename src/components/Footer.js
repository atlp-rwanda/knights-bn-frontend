import React from 'react';
import Proptypes from 'prop-types';
import '../assets/styles/styles.scss';

const Footer = ({ className }) => {
  const date = new Date();
  return (
    <footer className={`${className} text-center pt-3 footer`}>
      <h3>
        &copy; Copyright
        {' '}
        {date.getFullYear()}
        {' '}
        knights-barefoot-nomad.com
      </h3>
    </footer>
  );
};
Footer.propTypes = {
  className: Proptypes.string,
};
Footer.defaultProps = {
  className: '',
};
export default Footer;
