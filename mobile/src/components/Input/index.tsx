import React, { useState } from 'react';

import { useTheme } from 'styled-components';

import { 
  Container, 
  InputN, 
  IconInput,
  ButtonVisiblePassword, 
  IconVisiblePassword,
  BoxInput,
} from './styles';

import { Props } from './types';

export function Input({
  iconName, 
  secureTextEntry,
  ...props} : Props) {
  const theme = useTheme();

  const [sec, setSec] = useState(secureTextEntry)
  const [borda, setBorda] = useState(theme.colors.shape)
  
  return (
    <Container>
      
      <BoxInput>
      <InputN
        colorBorda={borda}
        underlineColorAndroid="transparent"
        secureTextEntry={sec}
        color={theme.colors.white}
        placeholderTextColor={theme.colors.white}
        {...props}
        onBlur={() => setBorda(theme.colors.shape)}
        onFocus={() => setBorda(theme.colors.primary)}
      />

      <IconInput name={iconName} />

      {secureTextEntry && (
      <ButtonVisiblePassword
        onPress={() => setSec(!sec)}
      >
        <IconVisiblePassword name={sec ? "eye" : "eye-off"}/>
      </ButtonVisiblePassword>
      )}

    </BoxInput>

    </Container>
    
  );
}