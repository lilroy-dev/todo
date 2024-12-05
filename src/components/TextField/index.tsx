import { type FC } from 'react';
import { type TextFieldProps } from './types.ts';
import './styles.css';

const TextField: FC<TextFieldProps> = ({ id, label, onChange }) => {
  return (
    <div className="text-field">
      {label && (
        <label className="text-field__label" htmlFor={id}>
          {label}
        </label>
      )}
      <input className="text-field__input" type="text" id={id} onChange={onChange} />
    </div>
  );
};

export default TextField;
