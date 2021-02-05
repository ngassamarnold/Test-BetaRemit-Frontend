/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import { StatusBar } from 'react-native';
import colors from '../../constants/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Center, TextTitle, FlexRow } from '../../components/utils';
import { InlineText } from '../../components/Text/InlineText'


export default function HeaderGoback(props) {
    let { title, color, colorTitle, colorIcon, colorBar } = props;
    const onPress = props.onPress || (() => { });
    return (
        <ContentgoBack colorBar={colorBar}>
            <StatusBar backgroundColor={colors.stausBarColor} barStyle='default' />
            <FlexRow>
                <TouchIcon
                    onPress={() => onPress()}
                >
                    <IconLeft>
                        <Icon active color={colorIcon || colors.black} size={24} name='arrow-left' />
                    </IconLeft>
                </TouchIcon>
                <Center>
                    <ContentText>
                        <InlineText bg={colorTitle} size={18} text={title} /> 
                    </ContentText>
                </Center>
                {/* <TextTitle size="23" colorTitle={color || colors.black}> {title}</TextTitle> */}

            </FlexRow>
        </ContentgoBack>
    )
}
const ContentgoBack = styled.View`
    width: 100%;
    background-color: ${props => props.colorBar || colors.white};
    paddingTop: 5px;
    height:65px;
    justify-content:center;
`;
const TouchIcon = styled.TouchableOpacity`
width:10%;
`;
const ContentText = styled.View`
width:80%;
`;
const IconLeft = styled.View`
    justify-content:center;
    align-items: flex-start;
    width:100%;
    margin-left:10px;
`;