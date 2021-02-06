/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Center, BR, Content, Options, SrollView, TextTitle, FlatList, Text, CR, HR, FlexRow, ImgTouchable } from '../../components/utils';
import colors from '../../constants/colors';
import HeaderGoback from '../../components/header/headerInline'
import { CardNote } from '../../components/cardNote'
import { NOTES } from '../../constants/fakeData'
import { FloatBtn } from '../../components/buttons/floatBtn'

export default function ({ route: { params: { type } }, navigation: { goBack, navigate } }) {

    const showNote = (note) => {
        navigate('ShowNote', { note: note })
    }

    return (
        <Content>
            <HeaderGoback
                title={type}
                onPress={() => goBack()}
                colorBar={colors.blue}
                colorTitle={colors.white}
                colorIcon={colors.white}
            />
            <SrollView>
                <Center>
                    <FlatList
                        data={NOTES}
                        extraData={null}
                        keyExtractor={(item, index) => index + ''}
                        renderItem={({ item, index }) => <CardNote
                            data={item}
                            type={type}
                            pageNoteBook={true}
                            delete={() => alert(item.key)}
                            move={() => alert('move')}
                            show={() => alert('show')}
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
        </Content>
    );
}
