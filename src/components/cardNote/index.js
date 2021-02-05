import React from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'
import { BR, TextTitle, TextBold, Touch, SrollForm, Card, Text, Center, CR, Content, Cycle, FlexRow } from '../../components/utils'
import { InlineText } from '../../components/Text/InlineText'

export const CardNote = (props) => {
    let { data: { title, description, hour } } = props
    let onPress = props.onPress || (() => { })
    return (
        <ClikHere onPress={() => onPress()} >
            <BR />
            <Card jc='flex-start'>
                <BR />
                <TextTitle size={14} colorTitle={colors.black} left='10'> {title} </TextTitle>
                <BR val='0.2' />
                <InlineText bg={colors.black} size={13} text={description} />
                <Hour>
                    <InlineText bg={colors.black} size={13} text={hour} />
                </Hour>
            </Card>
            <BR />
        </ClikHere>
    )
}
const Hour = styled.View`
    justify-content:center;
    align-items:flex-end;
    padding:5px;
`;
const ClikHere = styled.TouchableOpacity`
    align-items:center;
`;



