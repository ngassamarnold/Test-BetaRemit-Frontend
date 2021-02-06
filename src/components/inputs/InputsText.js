/* eslint-disable prettier/prettier */

import React from 'react';
import styled from 'styled-components';
import Colors from '../../constants/colors'
import { Center, FlexRow } from '../../components/utils'


export default function TextInput(props) {
    const { placeholder, width, autoFocus, value, secure, keyboard, colorPlaceholder } = props;
    const onValueChange = props.onValueChange || (() => { });
    return (<Center>
        <ContentInput {...props}>
            <Input
                autoFocus={autoFocus}
                placeholder={placeholder}
                value={value}
                onChangeText={newText => onValueChange(newText)}
                secureTextEntry={secure || false}
                keyboardType={keyboard || "default"}
                colorPlaceholder={colorPlaceholder}
                width={width}
            />
        </ContentInput>
    </Center>
    );
}
const Input = styled.TextInput.attrs(props => ({
    placeholderTextColor: props.colorPlaceholder ? props.colorPlaceholder : Colors.purple,
    //fontWeight: Font.bold,
}))`
    width: 90%;
  `;

const ContentInput = styled(FlexRow)`
    height: ${props => props.heightInput || 52}px;
    border-color: gray;
    border-radius:10px;
    borderWidth: 0.3px;
    padding-horizontal: 20px;
    font-size: 16px;
    opacity:0.7;
    background-color:${Colors.bg_input_text};
    width: ${props => props.width || '95%'};

`;