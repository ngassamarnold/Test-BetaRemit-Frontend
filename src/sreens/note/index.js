/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { useStore, useDispatch } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Center, BR, Content, Options, SrollView, TextTitle, FlatList, Text, CR, HR, FlexRow, ImgTouchable } from '../../components/utils';
import colors from '../../constants/colors';
import HeaderGoback from '../../components/header/headerInline'
import { CardNote } from '../../components/cardNote'
import { NOTES } from '../../constants/fakeData'
import { FloatBtn } from '../../components/buttons/floatBtn'
import Navigation from '../../service/NavigationService'
import { deletedNote } from '../../actions/todo'
import Alert from '../../components/modals'


export default function ({ route: { params: { type } }, navigation, navigation: { goBack, navigate } }) {
    const store = useStore();
    const { todo } = store.getState()
    const dispatch = useDispatch()

    const [textModal, setTextModal] = useState('');
    const [visibleModal, setVisibleModal] = useState(false);
    const [err, setErr] = useState(true);

   
    // console.log(todo)
    const delNote = (index) => {
        // alert(index)
        deletedNote(dispatch, todo, index)
        setErr(false)
        setTextModal('Successfully deleted');
        setVisibleModal(true);
        // Navigation.goTo(navigation, 'Home')
    }
    const showNote = (note) => {
        navigate('ShowNote', { note: note, type: type })
    }

    const desableModal = () => {
        setTextModal('')
        setVisibleModal(false)
    }

    return (
        <Content>
            <HeaderGoback
                title={type}
                // onPress={() => goBack()}
                onPress={() => Navigation.goTo(navigation, 'Home')}
                colorBar={colors.blue}
                colorTitle={colors.white}
                colorIcon={colors.white}
            />
            <SrollView>
                <Center>
                    <FlatList
                        data={todo}
                        extraData={null}
                        keyExtractor={(item, index) => index + ''}
                        renderItem={({ item, index }) => <CardNote
                            data={item}
                            type={type}
                            pageNoteBook={true}
                            delete={() => delNote(item.index)}
                            move={() => alert('move')}
                            show={() => showNote(item)}
                        // onPress={() => showNote(item)}
                        />}
                        removeClippedSubviews={true}
                        onScroll={() => null}
                    />
                </Center>
            </SrollView>

            <FloatBtn onPress={() => console.log('okx')} >
                <Icon active color={colors.blue} size={44} name='plus' />
            </FloatBtn>
            <Alert text={textModal} visibleModal={visibleModal} onPressModal={() => desableModal()} err={err} />
        </Content>
    );
}
