/* eslint-disable prettier/prettier */
import { API_URL } from '../config';

const AUTH = 'auth/';
const TRANSACTION = 'transaction/';
const DEPOSIT = 'deposit';
const USER = 'user';
const USER_UPDATE = USER + '/update'
const KYC = 'kyc'
const PASSWORD = 'password'
const RESET_PASSWORD = 'reset-' + PASSWORD

export const Routes = {
    user: {
        LOGIN: API_URL + AUTH + 'login',
        REGISTER: API_URL + AUTH + 'register',
        CONFIRM: API_URL + AUTH + 'register/confirm',
        UPDATE_PROFIL: API_URL + USER_UPDATE,
        INFO: API_URL + USER + '/infos',
        RESET_PASSWORD: API_URL + AUTH + RESET_PASSWORD,
        CONFIRM_RESET_PASSWORD: API_URL + AUTH + RESET_PASSWORD + '/confirm',
        UPDATE_PASSWORD: API_URL + USER_UPDATE + '/' + PASSWORD,
    },
    transaction: {
        WITHDRAWAL: API_URL + TRANSACTION + 'withdrawal',
        SEND: API_URL + TRANSACTION + 'transfer',
        DEPOSIT: API_URL + TRANSACTION + DEPOSIT,
        AUTHORIZE: API_URL + TRANSACTION + DEPOSIT + '/authorize',
        STATUS_DESPOSIT: API_URL + TRANSACTION + DEPOSIT + '/status/',
        HISTORY: API_URL + 'history?page='
    },
    kyc: {
        UPDATE_KYC: API_URL + KYC + '/update'
    }
};