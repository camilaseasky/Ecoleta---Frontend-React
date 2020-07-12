import React, { useEffect, useRef, useCallback} from 'react';
import ReactInputMask, {Props as InputProps} from 'react-input-mask';
import { useField } from '@unform/core';


interface Props extends InputProps {
  name: string;
}

const Input: React.FC<Props> = ({name, ...rest}) =>  {
  const inputRef = useRef(null);
  const {fieldName, defaultValue, error, registerField } = useField(name)
   

  useEffect(() => {
      registerField({
        name: fieldName,
        ref:  inputRef.current,   //vai criar uma referência para o elemento na Dom
        path: 'value',  //onde vai estar o valor da variável
        setValue(ref: any, value: string) {
          ref.setInputValue(value);
        },
        clearValue(ref: any) {
          ref.setInputValue('');
        },
      })
  }, [fieldName, registerField])

  return (
    <ReactInputMask
    ref={inputRef} 
    defaultValue={ defaultValue} 
    {...rest} 
    />
  );
}

export default Input;