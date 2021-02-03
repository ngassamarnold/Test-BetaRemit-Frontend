/* eslint-disable prettier/prettier */

import * as RootNavigation from '../navigation/RootNavigation';
import { Alert } from 'react-native'
import Storage from '../helpers/Storage'
import { errorParser } from '../service/apiErrorParser'
import { utils } from '../constants/utils'
import lang from '../localization/i18n'


export default {
    get(route, token = null, params) {
        return this.request('GET', route, token, params, {});
    },
    post(route, data, token = null, formData = false, params = {},) {
        return this.request('POST', route, token, params, data, formData);
    },
    put(route, data, token = null, params = {}) {
        return this.request('PUT', route, token, params, data);
    },
    request(method = '', route = '', token, params = {}, data = {}, formData = false) {

        const headerFromData = {
            'Authorization-Token': `${token}`,
            'User-Agent': utils.UserAgent,
            // 'cache-control': 'no-cache',
            // accept: 'application/json',
            // 'contentType': false,
            'content-type': 'multipart/form-data',
            // 'mimeType': 'multipart/form-data',
        }
        const req = {
            method,
            headers: {
                // Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization-Token': `${token}`,
                'User-Agent': utils.UserAgent,
            },
        };
        if (method !== 'GET' && method !== 'HEAD' && formData) {
            req.body = JSON.stringify(data);
            req.headers = headerFromData;
        }
        else if (method !== 'GET' && method !== 'HEAD' && !formData) req.body = JSON.stringify(data);
        if (params) {
            let i = 0;
            for (let key in params) {
                if (params.hasOwnProperty(key)) {
                    route += (!i ? '?' : '&') + `${key}=${params[key]}`;
                    i++;
                }
            }
        }
        let url = route;
        console.log(url)
        const matches = url.match(/{{[a-zA-Z0-9_]+}}/g);
        if (matches) {
            matches.forEach(param => {
                const key = param.slice(2, -2);
                url = url.replace(param, params[key] || data[key]);
            });
        }
        return new Promise((resolve, reject) => {
            fetch(url, req)
                .then(response => response.json())
                .then(responseJSON => {
                    if (responseJSON.status === 'success')
                        resolve(responseJSON);
                    else if (responseJSON.message === 'NOT AUTHENTICATED') {
                        reject('Votre session a expiré, \nveuillez vous reconnecter.');
                        //Alert.alert('Votre session a expiré, \nVeuillez vous reconnecter.')
                        Storage.remove('userData');
                        RootNavigation.navigate('SingIn');
                    }
                    // //status 403
                    // else if (responseJSON.status === 'error')
                    //     reject(responseJSON)
                    else reject(responseJSON.message)
                    console.log(responseJSON)

                })
                .catch(error => {
                    if (error.message === utils.network_fail) reject(lang.t('network_err'))
                    reject(error.message)
                })
        });
    },
};