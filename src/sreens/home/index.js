/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../constants/colors'
import WavyHeader from '../../components/header'
import { BR, TextTitle,FlatList, TextBold, Touch, SrollView, Card, Text, Center, CR, Content, Cycle, FlexRow } from '../../components/utils'
import { InlineText } from '../../components/Text/InlineText'
import { FloatBtn } from '../../components/buttons/floatBtn'
import { CardNote } from '../../components/cardNote'
import { NOTES } from '../../constants/fakeData'
import { utils } from '../../constants/utils'

export default function Home({ navigation: { navigate, goBack } }) {

    useEffect(() => {
    }, [])

    const showNote = (note) => {
        navigate('ShowNote', { note: note })
    }

    return (
        <Content>
            <WavyHeader top={30} height={50} />
            <BR />
            <FlexRow>
                <Touch
                    onPress={() => alert("ok")}
                >
                    <IconLeft>
                        <Icon active color={colors.white} size={24} name='format-align-left' />
                    </IconLeft>
                </Touch>
                <TextTitle left={25}> {utils.NoteBook} </TextTitle>
            </FlexRow>
            <BR val={6} />
            <SrollView>
                <TextTitle size={18} colorTitle={colors.black} left='10'> Todo </TextTitle>
                <Center>
                    <Card borderColor={colors.red} bg={colors.pink} height={300} >
                        <Text size="15" position='justify' color={colors.black}>{"\t"} Your notes to do </Text>
                        <Center> 
                            <FlatList
                                data={NOTES}
                                extraData={null}
                                keyExtractor={(item, index) => index + ''}
                                renderItem={({ item, index }) => <CardNote
                                    data={item}
                                    onPress={() => showNote(item)}
                                />}
                                removeClippedSubviews={true}
                                onScroll={() => null}
                            />
                        </Center>
                    </Card>
                </Center>
                <BR val={2} />
                <TextTitle size={18} colorTitle={colors.black} left='10'> Done </TextTitle>
                <Center>
                    <Card borderColor={colors.lightGreen} bg={colors.lightGreen} height={300} >
                        <Text size="15" position='justify' color={colors.black}>{"\t"} You finished notes</Text>
                        <Center>
                            <FlatList
                                data={NOTES}
                                extraData={null}
                                keyExtractor={(item, index) => index + ''}
                                renderItem={({ item, index }) => <CardNote
                                    data={item}
                                    onPress={() => showNote(item)}
                                />}
                                removeClippedSubviews={true}
                                onScroll={() => null}
                            />
                        </Center>
                    </Card>
                </Center>
                <BR val={3} />
            </SrollView>

            <FloatBtn onPress={() => console.log('okx')} >
                <Icon active color={colors.blue} size={44} name='plus' />
            </FloatBtn>

        </Content>
    );
}



const IconLeft = styled.View`
    justify-content:center;
    align-items: flex-start;
    width:100%;
    margin-left:10px;
`;
const Hour = styled.View`
    justify-content:center;
    align-items:flex-end;
    padding:5px;
`;

