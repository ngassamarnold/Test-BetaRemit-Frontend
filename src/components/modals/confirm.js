/* eslint-disable prettier/prettier */
import { Alert } from 'react-native';
import I18n from '../../localization/i18n';

export const ConfrimAlert = (title, description, Oncancel, Onconfirm, textCancel, textConfirm) =>
    Alert.alert(
        title,
        description,
        [{
            text: textConfirm || I18n.t('yes'),
            onPress: () => Onconfirm()
        }, {
            text: textCancel || I18n.t('no'),
            onPress: () => Oncancel(),
            style: "cancel"
        }],
        { cancelable: true }
    );