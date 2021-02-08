/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import { StatusBar } from 'react-native';
import colors from '../../constants/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Center, TextTitle, FlexRow } from '../../components/utils';
import { InlineText } from '../../components/Text/InlineText'


export default function HeaderGoback(props) {
    let { title, color, colorTitle, colorIcon, colorBar, numberOfLines } = props;
    const onPress = props.onPress || (() => { });
    return (
        <ContentgoBack colorBar={colorBar}>
            <StatusBar backgroundColor={colors.stausBarColor} barStyle='default' />
            <FlexRow>
                <Space/>
                <TouchIcon
                    onPress={() => onPress()}
                >
                    {/* <IconLeft> */}
                        <Icon active color={colorIcon || colors.black} size={24} name='arrow-left' />
                    {/* </IconLeft> */}
                </TouchIcon>
                {/* <Center> */}
                    <ContentText>
                    <InlineText bg={colorTitle} left={0} size={18} text={title} numberOfLines={numberOfLines || 1} />
                    </ContentText>
                {/* </Center> */} 
            </FlexRow>
        </ContentgoBack>
    )
}
const ContentgoBack = styled.View`
    width: 100%;
    background-color: ${props => props.colorBar || colors.white};
    height:65px;
    justify-content:center;
`;
const TouchIcon = styled.TouchableOpacity`
    width:5%;
    justify-content:center;
`;
const ContentText = styled.View`
    width:90%;
`;
const Space = styled.View`
    width:5%;
`;