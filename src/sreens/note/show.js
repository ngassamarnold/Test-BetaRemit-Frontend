/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import MIcons from 'react-native-vector-icons/MaterialIcons';
import { Center, BR, Content, Options, SrollView, TextTitle, FlatList, Text, CR, HR, FlexRow, ImgTouchable } from '../../components/utils';
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
            <SrollView>
                <BR val="2" />
                <TextTitle size={20} colorTitle={colors.black} left='15'> {title} </TextTitle>
                <BR val="2" />
                <Center>
                    <DescriptionNote>
                        <Text size="15" position='justify' color={colors.black}>{"\t"} {description}</Text>
                    </DescriptionNote>
                </Center>
            </SrollView>
            <BR val="0.5" />


            {/* <Center> */}
            <ContentButton>
                <Center>
                    <Icon active color={ colors.black} size={24} name='edit' />
                </Center>
                <UpdateDate>
                    <Text size="15" position='justify' color={colors.black}>{"\t"} Dernière modification: {hour}</Text>
                </UpdateDate>
                <IconBar>
                    <MIcons active color={colors.black} size={24} name='delete-outline' />
                </IconBar>
            </ContentButton>
            {/* </Center> */}
        </Content>
    );
}

const DescriptionNote = styled.View`  
    width:90%;
`;
const IconBar = styled.View`
  width:12%;
`;
const UpdateDate = styled.View`
  width:88%;
  align-items:center;
  right:10px;
`;
const ContentButton = styled(FlexRow)`
  padding:10px;
  border: 1px ${colors.bg_input_text};
`;