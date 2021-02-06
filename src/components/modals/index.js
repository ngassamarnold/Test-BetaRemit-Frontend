/* eslint-disable prettier/prettier */

import React from 'react';
import Modal from 'react-native-modal';
import styled from 'styled-components';
import colors from '../../constants/colors';
import Ion from 'react-native-vector-icons/Ionicons'
import { Text, Center, BR, TextTitle, CR, OutsideModal } from '../../components/utils'

export default function Modals(props) {
    let { visibleModal, text, err, codeUssd, componentModal } = props;
    const onPressModal = props.onPressModal || (() => { });

    return (

        <Modal
            isVisible={visibleModal}
            animationInTiming={500}
            animationOutTiming={800}
            backdropTransitionInTiming={800}
            backdropTransitionOutTiming={800}
            onRequestClose={() => onPressModal()}>
            <OutsideModal onPress={() => onPressModal()} />
            <Center>
                <ContentModal>
                    <BR val="1.5" />
                    {err ? (<CR>
                        <Ion name="close-circle" size={60} color={colors.red} />
                        <TextTitle size={16} colorTitle={colors.black} > Oups ! </TextTitle>
                    </CR>) :
                        <CR>
                            <Ion name="md-checkmark-circle-sharp" size={60} color={colors.green} />
                            <TextTitle size={16} colorTitle={colors.black} > Super ! </TextTitle>
                        </CR>}
                    <BR />
                    <ContentText>
                        <Text size={14} color={colors.black}>
                            {text}
                            {codeUssd && <TextTitle size={16} colorTitle={colors.blue} > {codeUssd} </TextTitle>}
                        </Text>
                        <BR />
                    </ContentText>

                    <ContentBtn
                        onPress={() => onPressModal()}>
                        <Text size={22} color={colors.white}>
                            OK
                        </Text>
                    </ContentBtn>
                </ContentModal>
            </Center>
            <OutsideModal onPress={() => onPressModal()} />
        </Modal>
    );
}


const ContentModal = styled.View`
  background-color: ${colors.white};
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-color: rgba(0, 0, 0, 0.1);
  width:95%;
  align-items:center;
`;
const ContentText = styled.View`
  width:85%;
`;

const ContentBtn = styled.TouchableOpacity`
  background-color: ${colors.blue};
  border-color: rgba(0, 0, 0, 0.1);
  width:100%;
  height:50px;
  border-bottom-left-radius: 15px;
  justify-content:center;`;