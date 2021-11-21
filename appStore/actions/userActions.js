import { insertUser, selectUserByNamePassword } from '../../src/helper/db';

export const addUser = (name, surname, password, phone, callback) => {
    return async (dispatch) => {
        try {
            const dbResult = await insertUser(name, surname, password, phone);
            console.log(dbResult);
            dispatch({ type: 'ADD_USER', name: name, surname: surname, password: password, phone: phone });
        } catch (err) {
            console.log(err);
            throw err;
        }
        callback()
    };
};

export const loginUser = (name, password) => {
    return async (dispatch) => {
        try {
            const dbResult = await selectUserByNamePassword(name, password);
            console.log(dbResult.rows.length);
            if (dbResult.rows.length > 0) {
                dispatch({
                    type: 'LOGIN_USER',
                    id: dbResult.rows.item(0).id,
                    name: name,
                    surname: dbResult.rows.item(0).surname,
                    password: password,
                    phone: dbResult.rows.item(0).phone,
                });
            } else {
                console.log('Blogi duomenys');
                dispatch({
                    type: 'LOGIN_USER',
                    id: null,
                    name: null,
                    surname: null,
                    password: null,
                    phone: null,
                });
            }
        } catch (err) {
            console.log('Klaida');
            throw err;
        }
    };
};