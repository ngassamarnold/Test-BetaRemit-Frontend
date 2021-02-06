/* eslint-disable prettier/prettier */

import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useDispatch, useStore } from 'react-redux'
import { Modalize } from 'react-native-modalize';
import colors from '../../constants/colors'
import { BR, Center, Text, TextTitle, HR, CR } from '../../components/utils'
import TextInput from '../../components/inputs/InputsText'
import Button from '../../components/buttons'
import font from '../../constants/font'
import Alert from '../../components/modals'
import Loading from '../../components/modals/loader'
import { addNode } from '../../actions/todo'




export const AddNote = (props) => {
    const { visible, UpdataComponent } = props
    const modalizeRef = useRef(null);
    const [amount, SetAmount] = useState('');
    const [title, SetTitle] = useState('');
    const [description, SetDescription] = useState('');

    const dispatch = useDispatch()
    const store = useStore();
    const { todo } = store.getState()
    // console.log("todo")
    // console.log(todo)
    // console.log("todo")

    const [loading, SetLoading] = useState(false);
    const [textModal, setTextModal] = useState('');
    const [visibleModal, setVisibleModal] = useState(false);
    const [err, setErr] = useState(true);
    const [toggle, setToggle] = useState(true);
    const [phone, setPhone] = useState('');
    const [phoneCode, setPhoneCode] = useState('237');
    const [transactionRef, setTransactionRef] = useState('');
    const [step, setStep] = useState('1');
    const [code, setCode] = useState('');
    const [statusTransaction, setStatutTransaction] = useState(false);
    const [finishScreen, setFinishScreen] = useState(false);




    const cleanState = () => {
        setFinishScreen(false)
        setTextModal('')
        setErr(true)
    }

    const desableModal = () => {
        setTextModal('')
        setVisibleModal(false)
        if (finishScreen) handleClose()
    }
    useEffect(() => {
        if (visible) handleOpen();
        else if (visible === false) handleClose();
        else if (visible === 'done') handleOpen();
    });



    const _onDescriptionChange = (val) => {
        SetDescription(val)
    }
    const _onTitleChange = (val) => {
        SetTitle(val)
    }

    const handleClosed = () => {
        // if (modalizeRef.current) {
        //     modalizeRef.current.close();
        // }
        // alert('ferme')
        // Navigation.dismissOverlay(componentId);
    };

    const handleOpen = () => {
        if (modalizeRef.current) {
            modalizeRef.current.open();
        }
    };

    const handleClose = () => {
        cleanState()
        UpdataComponent()
        if (modalizeRef.current) {
            modalizeRef.current.close();
        }
    };


    const CheckInfo = () => {
        let check = title.length > 0 && description.length > 0;
        if (!check) {
            setTextModal('Please fill in all fields');
            setVisibleModal(true);
        }
        else {
            setErr(false)
            setFinishScreen(true)
            setTextModal('Note added successfully');
            setVisibleModal(true);
            // console.log(title, description)
            let newtitle = title + todo.length
            let newdescrip = description + todo.length
            addNode([{ title: newtitle, description: newdescrip, index: todo.length }], dispatch, todo)
        }
    }

    const renderContent = () => (
        <View style={s.content}>
            <View style={s.header} >
                <View style={s.close} >
                    <TouchableOpacity onPress={handleClose}>
                        <Text position="left" left="20" size="14" color={colors.blue}> Fermer </Text>
                    </TouchableOpacity>
                </View>
                <View style={s.infoBeneficiary} >
                    <Text position="left" size="14" color={colors.blue}> Add todo note </Text>
                </View>
            </View>
            <HR />
            <View style={s.content_input}>
                <CR>
                    <Text size="16" color={colors.gray}> Please fill in all fields</Text>
                    <BR val="1" />
                    <TextInput
                        placeholder='Title'
                        onValueChange={_onTitleChange}
                        value={title}
                    />
                    <BR val="1" />
                    <TextInput
                        placeholder='Description'
                        heightInput={100}
                        onValueChange={_onDescriptionChange}
                        value={description}
                    />
                    <BR val="2" />
                    <Center>
                        <Button
                            onPress={() => CheckInfo()}
                            title='Create'
                            isloading={false}
                            width="95%"
                            weight={font.regular}
                            size="15"
                            br={15}
                        />
                    </Center>
                </CR>
                <Loading visibleModal={loading} />
            </View>
            <Alert text={textModal} visibleModal={visibleModal} onPressModal={() => desableModal()} err={err} />
        </View>
    );





    return (
        <Modalize
            ref={modalizeRef}
            onClosed={handleClosed}
            adjustToContentHeight={toggle}
            scrollViewProps={{
                showsVerticalScrollIndicator: false,
                keyboardShouldPersistTaps: "always"
            }}>
            {renderContent()}
        </Modalize>
    );
};

const s = StyleSheet.create({
    content: {
        flex: 1,
    },
    content__icon: {
        width: 32,
        height: 32,

        marginBottom: 20,
    },
    header: {
        flexDirection: 'row',
        height: 50,
        alignItems: "center"
    },
    content_input: {
        padding: 20,
    },
    close: {
        width: "25%",
    },
    infoBeneficiary: {
        width: "75%",
    },
    content__subheading: {
        marginBottom: 2,

        fontSize: 16,
        fontWeight: '600',
        color: '#ccc',
    },

    content__heading: {
        fontSize: 24,
        fontWeight: '600',
        color: '#333',
    },

    content__description: {
        paddingTop: 10,
        paddingBottom: 10,

        fontSize: 15,
        fontWeight: '200',
        lineHeight: 22,
        color: '#666',
    },



    content__button: {
        paddingVertical: 15,

        width: '100%',

        backgroundColor: '#333',
        borderRadius: 6,
    },

    content__buttonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '600',
        textAlign: 'center',
    },
});
