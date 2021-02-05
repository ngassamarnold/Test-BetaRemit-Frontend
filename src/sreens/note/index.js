/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Center, BR, Content, Options, SrollView, TextTitle, FlatList, Text, CR, HR, FlexRow, ImgTouchable } from '../../components/utils';
import colors from '../../constants/colors';
import HeaderGoback from '../../components/header/headerInline'
import { CardNote } from '../../components/cardNote'
import { NOTES } from '../../constants/fakeData'


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
                            onPress={() => showNote(item)}
                        />}
                        removeClippedSubviews={true}
                        onScroll={() => null}
                    />
                </Center>
            </SrollView>
        </Content>
    );
}
