/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { StatusBar } from 'react-native'
import { useDispatch } from 'react-redux'
import Loader from '../../components/loader'
import colors from '../../constants/colors'
import Storage from '../../helpers/Storage'
import { utils } from '../../constants/utils'
import Navigation from '../../service/NavigationService'
import { addNode } from '../../actions/todo'


export default function Splash({ navigation }) {
    const dispatch = useDispatch()

    const redirect = (route) => {
        Navigation.goTo(navigation, route)
    }



    useEffect(() => {
        Storage.get(utils.todo).then(data => {
            if (data) addNode(data, dispatch)
            redirect('Home')
        })
            .catch(
                err => console.log(err))
    }, [])

    return (
        <Content>
            <StatusBar backgroundColor={colors.stausBarColor} barStyle='default' />
            <TextSplah> Loading, please wait... </TextSplah>
            <Loader propreties={{ size: 80, color: colors.blue }} />
        </Content>

    );
}


const TextSplah = styled.Text`
    font-size: 14px;
    text-align:center;
  `;

const Content = styled.View`
  justify-content:center;
  flex:1;
  align-items: center;
`;