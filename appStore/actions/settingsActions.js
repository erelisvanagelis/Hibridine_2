import { insertValue, getValue } from "../../src/helper/storage";

export function setAutoLogin(value) {
    insertValue('autoLogin', value)
    return { type: 'SET_AUTOLOGIN', value }
}

export function getAutoLogin() {
    getValue('autoLogin').then((value) => {
        return { type: 'GET_AUTOLOGIN', value }
    })
}