/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useStore } from 'react-redux'
import colors from '../../constants/colors'
import WavyHeader from '../../components/header'
import Button from '../../components/buttons'
import { BR, TextTitle, FlatList, TextBold, Touch, SrollView, Card, Text, Center, CR, Content, Cycle, FlexRow } from '../../components/utils'
import { InlineText } from '../../components/Text/InlineText'
import { FloatBtn } from '../../components/buttons/floatBtn'
import { CardNote } from '../../components/cardNote'
import { NOTES } from '../../constants/fakeData'
import { utils } from '../../constants/utils'
import { AddNote } from '../note/create'


export default function Home({ navigation, navigation: { navigate, goBack } }) {

    const [lastTodo, setLastTodo] = useState([]);
    // const [lastTodo, setLastTodo] = useState(NOTES.slice(0, 2));
    const [visible, setVisible] = useState(0);
    const store = useStore();
    const { todo, done } = store.getState()
    console.log(done)

    useEffect(() => {
        console.log(todo)
        console.log(todo.length)
        setLastTodo(todo.slice(0, 2))
    }, [])

    const showNote = (note, type) => {
        navigate('ShowNote', { note: note, type: type })
        // Navigation.goToTrough(navigation, 'ShowNote', 'ShowNote', { params: note })

    }
    const showNoteBook = (type) => {
        // Navigation.goToTrough(navigation, 'Notebook', 'Notebook', { type: type })
        navigate('Notebook', { type: type })
    }
    const createNote = () => {
        if (visible === 0) setVisible(1);
        else if (visible === 1) setVisible('done');
        else setVisible(1);
    }
    const UpdataComponent = () => {
        setVisible(false)
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
                <TextTitle size={18} colorTitle={colors.black} left='10'> {utils.todo} ({todo.length})</TextTitle>
                <Center>
                    <Card borderColor={colors.red} bg={colors.pink} height={300} >
                        <Text size="15" position='justify' color={colors.black}>{"\t"} Your notes to do  </Text>
                        <Center>
                            <FlatList
                                data={lastTodo}
                                extraData={null}
                                keyExtractor={(item, index) => index + ''}
                                renderItem={({ item, index }) => <CardNote
                                    data={item}
                                    onPress={() => showNote(item, utils.todo)}
                                />}
                                removeClippedSubviews={true}
                                onScroll={() => null}
                            />
                            <Button
                                onPress={() => showNoteBook(utils.todo)}
                                title={'see all'}
                                br={8}
                                size={15}
                                height={30}
                                isloading={false}
                                bg={colors.white}
                                borderColor={colors.blue}
                                textColor={colors.blue}
                                width="25%"
                            />
                        </Center>

                    </Card>
                </Center>
                <BR val={2} />
                <TextTitle size={18} colorTitle={colors.black} left='10'> {utils.done} </TextTitle>
                <Center>
                    <Card borderColor={colors.lightGreen} bg={colors.lightGreen} height={300} >
                        <Text size="15" position='justify' color={colors.black}>{"\t"} You finished notes</Text>
                        <Center>
                            <FlatList
                                data={lastTodo}
                                extraData={null}
                                keyExtractor={(item, index) => index + ''}
                                renderItem={({ item, index }) => <CardNote
                                    data={item}
                                    onPress={() => showNote(item, utils.done)}
                                />}
                                removeClippedSubviews={true}
                                onScroll={() => null}
                            />
                            <Button
                                onPress={() => showNoteBook(utils.done)}
                                title={'see all'}
                                br={8}
                                size={15}
                                height={30}
                                isloading={false}
                                bg={colors.white}
                                borderColor={colors.blue}
                                textColor={colors.blue}
                                width="25%"
                            />
                        </Center>
                    </Card>
                </Center>
                <BR val={3} />
            </SrollView>

            <FloatBtn onPress={() => createNote()} >
                <Icon active color={colors.blue} size={44} name='plus' />
            </FloatBtn>
            <AddNote visible={visible} UpdataComponent={UpdataComponent} />

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

