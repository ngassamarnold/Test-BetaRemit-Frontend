/* eslint-disable prettier/prettier */

import React from 'react';
import Modal from 'react-native-modal';
import styled from 'styled-components';
import colors from '../../constants/colors';
import { Text, Center, BR, TextTitle, CR, FlexRow } from '../../components/utils'
import Loader from '../../components/loader'


export default function Loading(props) {
    let { visibleModal,text } = props;
    return (
        <Modal
            isVisible={visibleModal}
            animationInTiming={500}
            animationOutTiming={800}
            backdropTransitionInTiming={800}
            backdropTransitionOutTiming={800}>
            <Center>

                <ContentModal>
                    <Center>
                        <FlexRow>
                            <Loader propreties={{ size: 60, color: colors.blue }} />
                            <Content>
                                <Text position='left' size='16'> {text || 'Veuillez patienter...'}</Text>
                            </Content>
                        </FlexRow>
                    </Center>
                </ContentModal>


            </Center>
        </Modal>
    );
}
const ContentModal = styled.View`
  background-color: #fafafa;
  border-radius:15px;
  border: 1px ${colors.blue};
  width:95%;
  height:80px;
  justify-content:center;
`;
const Content = styled.View`
    width:55%;
    justify-content:center;
    align-items:center;
`;