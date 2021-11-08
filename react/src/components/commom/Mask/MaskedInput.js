import React from 'react';
import InputMask from 'react-input-mask';
import { Mask } from './maskCss'


const onlyNumbers = (str) => str.replace(/[^0-9]/g, '');

const MaskedInput = ({ value, onChange, name, mask }) => {
  function handleChange(event) {
    onChange({
      ...event,
      target: {
        ...event.target,
        name,
        value: onlyNumbers(event.target.value)
      }
    });
  }

  return (
    <Mask>
        <InputMask className="input" input="usar" placeholder="Insira o seu número"
            name={name}
            mask="(99)99999-9999"
            value={value}
            onChange={handleChange}
        />
    </Mask>
    
  );
};

export default MaskedInput;
