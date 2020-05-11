import React from 'react';
import { useTranslation } from 'react-i18next';

export const InputElement = ({
  type, name, value, palceholder, id,
  onchenge, className,
  error, testid,
}) => (
  <div className={className}>
    <input
      type={type}
      name={name}
      value={value}
      placeholder={palceholder}
      className={className}
      id={id}
      data-testid={testid}
      onChange={onchenge}
    />
    <span className="input-error">{error}</span>
  </div>
);

export const ButtonElememnt = ({
  value, onclick, id, className, testid,
}) => (
  <button
    type="submit"
    className={className}
    onClick={onclick}
    id={id}
    data-testid={testid}
  >
    {value}
  </button>

);

export const SocialLogin = ({
  id, className, href, icon, text, imgClass,
}) => (
  <a
    className={className}
    id={id}
    href={href}
  >
    <span className="social-text">{text}</span>
    <img className={imgClass} src={icon} />
  </a>

);
export const SelectInput = ({
  onchenge, className, testid,
  error,
}) => {
  const { t: translate } = useTranslation();
  return (
    <div className="gender">
      <select name="gender" data-testid={testid} onChange={onchenge} className={className}>
        <option value="0">{translate('choose.1')}</option>
        <option data-testid="select-option" value="male">{translate('Male.1')}</option>
        <option value="female">{translate('Female.1')}</option>
      </select>
      <span className="gender-err">{error}</span>
    </div>

  );
};
