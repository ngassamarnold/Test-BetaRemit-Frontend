/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import MIcons from 'react-native-vector-icons/MaterialIcons';
import { Center, BR, Content, Options, SrollView, TextTitle, FlatList, Text, CR, HR, FlexRow, ImgTouchable } from '../../components/utils';
import colors from '../../constants/colors';
import HeaderGoback from '../../components/header/headerInline'
import Navigation from '../../service/NavigationService'
import { AddNote } from '../note/create'



export default function showNote({ route, navigation, navigation: { navigate } }) {
    let { note: { description, title, hour }, type } = route.params;

    const [visible, setVisible] = useState(0);

    const editNote = () => {
        if (visible === 0) setVisible(1);
        else if (visible === 1) setVisible('done');
        else setVisible(1);
    }

    const UpdataComponent = () => {
        setVisible(false)
    }

    return (
        <Content>
            <HeaderGoback
                title={title}
                onPress={() => Navigation.goTo(navigation, 'Home')
                }
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


            <ContentButton>
                <Edit onPress={() => editNote()} >
                    <Icon active color={colors.black} size={24} name='edit' />
                </Edit>
                <UpdateDate>
                    <Text size="14" position='justify' color={colors.black}>{"\t"} Last update: {hour}</Text>
                </UpdateDate>
                <IconBar>
                    <MIcons active color={colors.black} size={24} name='delete-outline' />
                </IconBar>
            </ContentButton>
            <AddNote visible={visible} UpdataComponent={UpdataComponent} note={route.params} />

        </Content>
    );
}

const DescriptionNote = styled.View`  
    width:90%;
`;
const Edit = styled.TouchableOpacity`  
    align-items:center;
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