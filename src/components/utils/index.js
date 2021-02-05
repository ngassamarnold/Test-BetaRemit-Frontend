/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import colors from '../../constants/colors';
import Font from '../../constants/font';



const SrollForm = styled.ScrollView.attrs(props => ({
  keyboardShouldPersistTaps: 'always',
}))`
`;

const SrollVIew = styled.ScrollView.attrs(props => ({
  keyboardShouldPersistTaps: 'always',
}))`
    flex:1;
    background-color:${props => props.color || colors.white};
`;

const FlexRow = styled.View`
  flex-direction:row;
`;

const OutsideModal = styled.TouchableOpacity`
  flex: 1;
  justify-content:center;
`;


const CR = styled.View``;

const Text = styled.Text`
  color: ${props => props.color || colors.gray};
  font-size: ${props => props.size || 22}px; 
  text-align: ${props => props.position || 'center'};
  margin-left:${props => props.left || 0}px;
`;

const TextBold = styled.Text`
  color: ${props => props.color || colors.white};
  font-size: ${props => props.size || 22}px; 
  text-align: ${props => props.position || 'center'};
  margin-left:${props => props.left || 0}px;
 font-weight: ${Font.bold};

`;

const ContentProduct = styled.ScrollView.attrs(props => ({
  keyboardShouldPersistTaps: 'always',
}))`
    background-color:${colors.white};
  `;


const Center = styled.View`
    align-items: center;
`;


const TextTitle = styled.Text`
    font-size: ${props => props.size || 30}px;
    fontWeight: bold;
    color: ${props => props.colorTitle || colors.white};
    margin-left:${props => props.left || 0}px;
  `;

const HR = styled.View`
   border-bottom-color: ${props => props.color || colors.gray};
   border-bottom-width: 1px;
   opacity:0.2;
`;

const Cycle = styled.View`
    background-color:${colors.lightYellow};
    width: 125px;
    height: 125px;
    border-radius: 100px;
    justifyContent: center;
    alignItems: center;
`;

const Touch = styled.TouchableOpacity`
  width:10%;
  justifyContent: center;

`;

const Card = styled.View`
    background-color: ${props => props.bg || colors.white};
    width: ${props => props.width || '95%'};
    height:  ${props => props.height || 125}px;
    border-radius: 10px;
    justifyContent:${props => props.jc || 'center'} ;
    border: 0.55px ${props => props.borderColor || colors.blue};
`;

const BR = styled.View`
  margin-top:${props => props.val * 10 || 10}px;
`;

const Content = styled.View`
    background-color:${colors.white};
    flex:1;
`;

const ContentButton = styled.View`
  justify-content:flex-end;
  flex:1;
`;
const Options = styled.View`
  flex-direction:row; 
  flex:1;
  `;
const ImgTouchable = styled.TouchableOpacity`
  justify-content:center;
  align-items:center;
  background-color:${colors.white};
  border: 1px ${colors.border_pictute};
  height:${props => props.height || 85}px;
  width:${props => props.width || 85}px;
  border-radius:${props => props.br || 50}px;
`;
const FlatList = styled.FlatList.attrs(props => ({ keyboardShouldPersistTaps: 'always' }))`
  width:100%;
`;


export { SrollVIew, FlatList, SrollForm, Center, ImgTouchable, TextBold, BR, Touch,Content, FlexRow, Card, HR, Options, CR, TextTitle, ContentButton, ContentProduct, Cycle, Text, OutsideModal };