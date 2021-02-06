import React from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'
import { BR, TextTitle, TextBold, Touch, SrollForm, Card, Text, Center, CR, Content, Cycle, FlexRow } from '../../components/utils'
import { InlineText } from '../../components/Text/InlineText'
import { utils } from '../../constants/utils'

export const CardNote = (props) => {

    let { data: { title, description, hour }, type, pageNoteBook } = props

    let onPress = props.onPress || (() => { })
    let deleteAction = props.delete || (() => { })
    let moveAction = props.move || (() => { })

    let showAction = props.show || (() => { })

    return (
        <ClikHere onPress={() => onPress()} >
            <BR />
            <Card jc='flex-start'>
                <BR />
                <TextTitle size={14} colorTitle={colors.black} left='10'> {title} </TextTitle>
                <BR val='0.2' />
                <InlineText bg={colors.black} size={13} text={description} />
                {!pageNoteBook ? <Hour>
                    <InlineText bg={colors.black} size={13} text={hour} />
                </Hour> :
                    <FlexRow>
                        <Space />
                        <Move onPress={() => moveAction()} >
                            {type === utils.todo && <InlineText bg={colors.blue} size={13} text='move to done' />}
                        </Move>
                        <Show onPress={() => showAction()}>
                            <InlineText bg={colors.blue} size={13} text='show' />
                        </Show>
                        <Delete onPress={() => deleteAction()}>
                            <InlineText bg={colors.red} size={13} text='delete' />
                        </Delete>
                        <Date>
                            <InlineText bg={colors.black} size={13} text={hour} />
                        </Date>
                    </FlexRow>}
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
const Space = styled.View`
    width:13%;
`;
const Move = styled.TouchableOpacity`
    width:25%;
`;
const Delete = styled.TouchableOpacity`
    width:15%;
`;
const Date = styled.View`
    width:35%;
`;
const Show = styled.TouchableOpacity`
    width:12%;
`;

const ClikHere = styled.TouchableOpacity`
    align-items:center;
`;



