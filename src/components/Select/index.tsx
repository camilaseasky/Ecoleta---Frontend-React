import React, { useRef, useEffect, useState, useCallback } from 'react';
import ReactSelect, { OptionTypeBase, Theme,
  Props as SelectProps,
} from 'react-select';
import { CustomSelect } from './styles';
import { useField } from '@unform/core';

interface Props extends SelectProps<OptionTypeBase> {
  name: string;
}


const Select: React.FC<Props> = ({ name, ...rest }) => {

  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  function customTheme(theme: Theme) {
    return {
      ...theme,
      colors: {
        ...theme.colors,        
        primary25: '#f5f5f5',
        primary: '#34CB79',
      }
    }
  }

  
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option: OptionTypeBase) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);
  return (
    <CustomSelect
      defaultValue={defaultValue}
      ref={selectRef}
      classNamePrefix="react-select"
      theme={customTheme}    
      {...rest}
    />
  );
};
export default Select;


