import React from 'react'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../constants/colors'

export const FloatBtn = (props) => {
    let { sizeIcon, nameIcon, colorIcon } = props
    return (
        <Btn {...props} >
            <Icon active color={colorIcon || colors.blue} size={sizeIcon || 44} name={nameIcon || 'plus'} />
        </Btn>
    )
}

const Btn = styled.TouchableOpacity`
    position: absolute;
    width: 50px;
    height: 50px;
    align-items: center;
    justifyContent: center;
    right: 30px;
    bottom: 30px;
    background-color:${props => props.bgBtn || colors.lightBlue};
    border-radius:30px;
    opacity:0.45;
`;