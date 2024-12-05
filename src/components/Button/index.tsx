import { type FC } from 'react';
import { classNames } from '../../utils/classNames.ts';
import { type ButtonProps } from './types.ts';

const Button: FC<ButtonProps> = ({ label, onClick, disabled = false, variant = 'primary' }) => {
  const buttonClass = classNames('button', `button--${variant}`, { 'button--disabled': disabled });
  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled} aria-label={label}>
      <span className="button__label">{label}</span>
    </button>
  );
};

export default Button;
