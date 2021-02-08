/* eslint-disable prettier/prettier */

import React from 'react'
import styled from 'styled-components';
import Colors from '../../constants/colors'
import { Text } from '../../components/utils'
import Font from '../../constants/font';
import Loader from '../../components/loader'

export default function Button(props) {
    let { isloading, title } = props;
    return (
        <ButtonTouchable {...props}>
            {isloading && <Loader propreties={{ size: 20, color: Colors.white }} />}
            {<ButtonText {...props}>
                {isloading ? 'Traitment en cours...' : title}
            </ButtonText>}
        </ButtonTouchable>
    );
}

const ButtonTouchable = styled.TouchableOpacity`
  background-color: ${props => props.bg || Colors.blue};
  border: ${props => props.border || 1}px ${props => props.borderColor || Colors.blue};
  width: ${props => props.width || '85%'} ;
  height: ${props => props.height || 50}px;
  border-radius: ${props => props.br || 30}px;
  justify-content: center;
  align-items: center;
  flex-direction:row;
`;

const ButtonText = styled(Text)`
  font-size: ${props => props.size !== undefined ? props.size : 11}px;
  color: ${props => props.textColor || 'white'};
  font-weight: ${props => props.weight || Font.bold};
  opacity: ${props => props.opacity ? 0.6 : 1}
`;
