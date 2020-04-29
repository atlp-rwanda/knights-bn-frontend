import React from 'react';
import '../assets/styles/styles.scss';

const SocialLoginIcon = (props) => (
  <div>
    <form action={props.action}>
      <button type="submit" className={props.formClass}>
        <props.icon className={props.class} />
        {props.label}
      </button>
    </form>
  </div>
);
export default SocialLoginIcon;
