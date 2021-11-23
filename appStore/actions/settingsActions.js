import { insertObject, getObject } from "../../src/helper/storage";

export function setAutoLogin(object) {
    insertObject('autoLogin', object)
    return { type: 'SET_AUTOLOGIN', object: object }
}

export function getAutoLogin() {
    return async (dispatch) => {
        const result = await getObject('autoLogin');
        if (result === null) {
            object = {
                active: false,
                name: '',
                password: '',
            }
            insertObject('autoLogin', object)
            dispatch({ type: 'SET_AUTOLOGIN', object: object })
        }
        else {
            dispatch({ type: 'SET_AUTOLOGIN', object: result })
        }
    }
}