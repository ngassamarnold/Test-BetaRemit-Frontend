/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Center, BR, Content, SrollForm, TextTitle, FlatList, Text, CR, HR, FlexRow, ImgTouchable } from '../../components/utils';
import colors from '../../constants/colors';
import HeaderGoback from '../../components/header/headerInline'



export default function showNote({ route, navigation: { goBack } }) {
    let { note: { description, title, hour } } = route.params;
    return (
        <Content>
            <HeaderGoback
                title={title}
                onPress={() => goBack()}
                colorBar={colors.blue}
                colorTitle={colors.white}
                colorIcon={colors.white}
            />
            <BR val="2" />
            <TextTitle size={20} colorTitle={colors.black} left='15'> {title} </TextTitle>
            <BR val="2" />
            <Center>
                <DescriptionNote>
                    <Text size="15" position='justify' color={colors.black}>{"\t"} {description}</Text>
                </DescriptionNote>
            </Center>
        </Content>
    );
}

const DescriptionNote = styled.View`  
    width:90%;
`;