/* eslint-disable prettier/prettier */
import { utils } from '../constants/utils'
import colors from '../constants/colors'
import { Share, Linking } from "react-native";

export const deleteObjetInArray = (array, id) => {
    let index = array.findIndex(x => x.index === id);
    if (index !== undefined)
        array.splice(index, 1);
    return array;
};

export const findIndexObjetInArray = (array, id) => {
    let index = array.findIndex(x => x.index === id);
    if (index > -1)
        return index;
    return false;
};

export const truncate = (str, max) => {
    if (str === undefined || str === null || str.length <= max) return str;
    return str.substr(0, max - 2) + '...';
};

export const validPassWord = (pass, ConfPass) => {
    let res = pass.localeCompare(ConfPass);
    return !res;
};

export const to2Digits = int => (int < 10 ? '0' + int : int);

export const getIconStatus = (status) => {
    let nameIconColor = {};
    switch (status) {
        case utils.CANCELED:
            nameIconColor = { name: 'times-circle-o', color: colors.gray }
            break;
        case utils.FAILED:
            nameIconColor = { name: 'exclamation-circle', color: colors.red }
            break;
        case utils.PENDING:
            nameIconColor = { name: 'exclamation-circle', color: colors.yellow }
            break;
        case utils.INITIALIZED:
            nameIconColor = { name: 'question-circle-o', color: colors.blue }
            break;
        case utils.SUCCESS:
            nameIconColor = { name: 'check-circle-o', color: colors.green }
            break;
        case utils.STAND_BY:
            nameIconColor = { name: 'question-circle-o', color: colors.blue }
            break;
        default:
            break;
    }
    return nameIconColor
}

export const transactionSign = (sign) => (sign === true ? '+' : sign === false ? '-' : '')

export const DetailsImageUpload = (image) => {
    let filename = image.split('/').pop();
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    return { uri: image, name: filename, type }
}

export const DateMonth = (date) => {
    let day = date.split('-')[2].split(' ')[0]
    let mm = getMonth(date.split('-')[1])
    return day + ' ' + mm + HourByDate(date)
}

export const HourByDate = (date) => {
    let hourSec = date.split('-')[2].split(' ')[1]
    let hour = hourSec.split(':')[0] + ':' + hourSec.split(':')[1]
    return ' à ' + hour
}

export const oneDay = 60 * 60 * 24 * 1000;
// seconds * minutes * hours * milliseconds = 1 day 


export const DateToFr = (date) => {
    let day = date.split('-')[2].split(' ')[0]
    let mm = date.split('-')[1]
    let y = date.split('-')[0]
    return day + '/' + mm + '/' + y + HourByDate(date)
}

const getMonth = (mm) => (mm == 1 ? 'jan.' :
    mm == 2 ? 'fév.' :
        mm == 3 ? 'mar.' :
            mm == 4 ? 'avr.' :
                mm == 5 ? 'mai' :
                    mm == 6 ? 'ju.' :
                        mm == 7 ? 'jul.' :
                            mm == 8 ? 'août' :
                                mm == 9 ? 'sept.' :
                                    mm == 10 ? 'oct.' :
                                        mm == 11 ? 'nov.' :
                                            mm == 12 ? 'déc.' : '');

export const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

export const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

export const openLinkRs = (url) => {
    Linking.canOpenURL(url)
        .then((supported) => {
            if (!supported) {
            } else {
                Linking.openURL(url);
            }
        })
        .catch((err) => {
            console.error('An error occurred', err)
        });
}

export const onShare = async () => {
    try {
        const result = await Share.share({
            title: utils.MyCoolPay,
            message: utils.shareApp,
        });
        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                // shared with activity type of result.activityType
                // alert('shared with activity type of result.activityType')
            } else {
                // shared
                // alert('shared')
            }
        } else if (result.action === Share.dismissedAction) {
            // dismissed 
            // alert('dismissed')
        }
    } catch (error) {
        // alert('error')
    }
};

export const removeSpace = (str) => (str.replace(/\s/g, ''))