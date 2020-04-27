import React from 'react';
import '../assets/styles/components/footer.scss';

const Footer = () => {
  const date = new Date();
  return (
    <footer>
      <div className="copy-right">
        <span className="date">
          {' '}
          &copy; Copyright
          {date.getFullYear()}
        </span>
        <span className="slogan-text">knights-barefoot-nomad.com. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
