import React from 'react';
import '../assets/styles/styles.scss';

const SocialLoginIcon = (props) => {
  return (
    <div>
      <form className={props.formClass} action={props.action}>
        <props.icon className={props.class} />
        <button className={props.buttonClass} onClick={props.onClick}>
          {props.label}
        </button>
      </form>
    </div>
  );
};
export default SocialLoginIcon;
