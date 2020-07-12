import React, {InputHTMLAttributes, useEffect, useRef} from 'react';
import { useField } from '@unform/core';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<InputProps> = ({name, ...rest}) =>  {
  const inputRef = useRef(null);
  const {fieldName, defaultValue, error, registerField } = useField(name)

  useEffect(() => {
      registerField({
        name: fieldName,
        ref:  inputRef.current,   //vai criar uma referência para o elemento na Dom
        path: 'value',  //onde vai estar o valor da variável
      })
  }, [fieldName, registerField])

  return (
    <input ref={inputRef} defaultValue={ defaultValue} {...rest} />
  );
}

export default Input;