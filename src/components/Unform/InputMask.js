import React, { useRef, useEffect } from 'react';
import { Text } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { useField } from '@unform/core';

function InputMask({ name, label, labelStyle, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue = '', error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: '_lastNativeText',
      getValue(ref) {
        return ref._lastNativeText || '';
      },
      setValue(ref, value) {
        ref.setNativeProps({ text: value });
        ref._lastNativeText = value;
      },
      clearValue(ref) {
        ref.setNativeProps({ text: '' });
        ref._lastNativeText = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      {label && <Text style={labelStyle}>{label}</Text>}
      <TextInputMask ref={inputRef} defaultValue={defaultValue} {...rest} />
    </>
  );
}

export default InputMask;
