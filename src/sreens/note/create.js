/* eslint-disable prettier/prettier */

import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux'
import { Modalize } from 'react-native-modalize';
import colors from '../../constants/colors'
import { BR, Center, Text, TextTitle, HR, CR } from '../../components/utils'
import TextInput from '../../components/inputs/InputsText'
import Button from '../../components/buttons'
import font from '../../constants/font'
import Alert from '../../components/modals'
import Loading from '../../components/modals/loader'




export const AddNote = (props) => {
    const dispatch = useDispatch()

    const { visible, user, UpdataComponent3 } = props
    const { authorization_token } = user
    const modalizeRef = useRef(null);
    const [amount, SetAmount] = useState('');
    const [loading, SetLoading] = useState(false);
    const [textModal, setTextModal] = useState('');
    const [visibleModal, setVisibleModal] = useState(false);
    const [err, setErr] = useState(true);
    const [toggle, setToggle] = useState(true);
    const [flag, setFlag] = useState(defaultFlag);
    const [phone, setPhone] = useState('');
    const [phoneCode, setPhoneCode] = useState('237');
    const [transactionRef, setTransactionRef] = useState('');
    const [step, setStep] = useState('1');
    const [code, setCode] = useState('');
    const [statusTransaction, setStatutTransaction] = useState(false);
    const [finishScreen, setFinishScreen] = useState(false);
    const [codeUssd, setCodeUssd] = useState('')


    const _onPhoneChange = (val) => {
        setPhone(val)
    };

    const cleanState = () => {
        setPhone('')
        SetAmount('')
        setFinishScreen(false)
        setTextModal('')
        setErr(true)
        setCodeUssd('')
    }

    const desableModal = () => {
        setTextModal('')
        setVisibleModal(false)
        if (finishScreen) handleClose()
        if (statusTransaction) statusDeposit()
    }

    const statusDeposit = () => {
        Request.get(Routes.transaction.STATUS_DESPOSIT + transactionRef, authorization_token)
            .then(response => {
                setStatutTransaction(false)
                setTextModal(response.data.transaction_message);
                let status = response.data.transaction_status
                switch (status) {
                    case utils.FAILED:
                        setFinishScreen(true)
                        setErr(true)
                        setVisibleModal(true);
                        break;
                    case utils.CANCELED:
                        setFinishScreen(true)
                        setErr(true)
                        setVisibleModal(true);
                        break;
                    case utils.SUCCESS:
                        user.balance = response.data.user_balance
                        updateGloabalUser(user, dispatch)
                        setFinishScreen(true)
                        setErr(false)
                        setVisibleModal(true);
                        break;
                    default:
                        statusDeposit()
                        break;
                }

            })
            .catch(error => {
                setErr(true)
                SetLoading(false)
                setTextModal(error);
                setVisibleModal(true);
                setFinishScreen(true)
            });
    }

    const onChangeFlag = (val) => {
        setFlag(val.flag)
        setPhoneCode(val.code)
    }

    const _onDescriptionChange = (val) => {
        SetAmount(val)
    }

    const onCodeChange = (val) => {
        setCode(val)
        if (val.length > 3) _checkCode(val)
    }

    const TextUssd = (code) => {
        return (
            <Text size={14} color={colors.black}>
                Une fenêtre de paiement devrait s'afficher sur votre mobile, entrez votre code secret pour valider le paiement.La fenêtre ne s'affiche pas ? Composez
                <TextTitle size={16} colorTitle={colors.blue} > {code} </TextTitle>,puis entrez votre code secret pour valider la transaction.
            </Text>
        )
    }

    const _checkCode = (val) => {
        setCode('')
        SetLoading(true)
        Request.post(Routes.transaction.AUTHORIZE, { transaction_ref: transactionRef, code: val }, authorization_token)
            .then(response => {
                setErr(false)
                setStep('1')
                setTextModal(TextUssd(response.data.ussd))
                // setTextModal("Veuillez valider sur la fenêtre USSD qui serra affichée! \n Ou composez le ");
                // setCodeUssd(response.data.ussd)
                setVisibleModal(true);
                SetLoading(false)
                setStatutTransaction(true)
                setFinishScreen(true)
                //statusDeposit()
            })
            .catch(error => {
                setErr(true)
                SetLoading(false)
                setTextModal(error);
                setVisibleModal(true);
            });
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
        UpdataComponent3()
        setStep('1')
        if (modalizeRef.current) {
            modalizeRef.current.close();
        }
    };

    const Submit = () => {
        setFinishScreen(false)
        let body = { phone_number: phone, amount }
        Request.post(Routes.transaction.DEPOSIT, body, authorization_token)
            .then(response => {
                setErr(false)
                SetLoading(false)
                //si OPT
                if (response.data.action === utils.REQUIRE_OTP) {
                    setTextModal('Veuillez saisir le code à 4 chiffres reçu par sms');
                    setTransactionRef(response.data.transaction_ref)
                    setVisibleModal(true);
                    setStep('2')
                } else {
                    //sinon
                    setTransactionRef(response.data.transaction_ref)

                    setTextModal(TextUssd(response.data.ussd))

                    // setTextModal("Une fenêtre de paiement devrait s'afficher sur votre mobile, entrez votre code secret pour valider le paiement.La fenêtre ne s\'affiche pas ? Composez " + response.data.ussd + ", puis entrez votre code secret pour valider la transaction.");
                    // setCodeUssd(response.data.ussd)
                    setVisibleModal(true);
                    setFinishScreen(true)
                    // setStatutTransaction(true)
                }
            })
            .catch(error => {
                SetLoading(false)
                setTextModal(error);
                setVisibleModal(true);
            });
    }
    const CheckInfo = () => {
        let check = phone.length > 0 && amount.length > 0;
        switch (true) {
            case !check:
                setTextModal(I18n.t('fill_all_field'));
                setVisibleModal(true);
                break;
            case amount < utils.MinDeposit:
                setErr(true)
                setTextModal('Le montant doit être au moins de' + utils.MinDeposit + utils.xaf);
                setVisibleModal(true);
                break;
            case !Validations.isValidPhoneNumber(phoneCode + phone):
                setVisibleModal(true)
                setTextModal(I18n.t('phone_invalid'))
                break;
            default:
                SetLoading(true);
                Submit();
                break;
        }

        //handleClose();
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
                        onValueChange={_onDescriptionChange}
                        value={amount}
                    />
                    <BR val="1" />
                    <TextInput
                        placeholder='Description'
                        onValueChange={_onDescriptionChange}
                        value={amount}
                    />
                    <BR val="2" />
                    <Center>
                        <Button
                            // onPress={() => CheckInfo()}
                            title={I18n.t('depot')}
                            isloading={false}
                            width="100%"
                            weight={font.regular}
                            size="15"
                        />
                    </Center>
                </CR>
                <Loading visibleModal={loading} />
            </View>

            {/* <Alert text={textModal} codeUssd={codeUssd} visibleModal={visibleModal}
                onPressModal={() => desableModal()}
                err={err} /> */}
        </View>
    );

    useEffect(() => {
        // if (statusTransaction) checkStatutDeposit()
        if (visible) handleOpen();
        else if (visible === false) handleClose();
        else if (visible === 'done') handleOpen();
    });



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
