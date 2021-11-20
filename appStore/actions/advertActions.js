import { insertAdvert, updateAdvert, deleteAdvert, selectAdvertsByUserId, selectInnerJoinAdvertsUser } from '../../src/helper/db';

export function addAdvert(title, description, price, userId, callback) {
    return async (dispatch) => {
        var result = "SUCESS"
        try {
            await insertAdvert(userId, title, description, price);
            dispatch({ type: 'ADD_ADVERT', title: title, description: description, price: price, userId: userId });
        } catch (err) {
            result = "FAILURE"
            console.log(err);
            throw err;
        }
        callback(result)
    };
}

export function getAdverts() {
    return async (dispatch) => {
        try {
            const result = await selectInnerJoinAdvertsUser();
            console.log(result);
            dispatch({ type: 'GET_ADVERTS', rows: result.rows })
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
}

export function getUserAdverts(userId) {
    return async (dispatch) => {
        try {
            const result = await selectAdvertsByUserId(userId);
            console.log(result);
            dispatch({ type: 'GET_ADVERTS', rows: result.rows })
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
}

export function updateAdvertD(id, title, description, price) {
    return async (dispatch) => {
        try {
            const dbResult = await updateAdvert(id, title, description, price);
            console.log(dbResult);
            dispatch({ type: 'UPDATE_ADVERT',id: id, title: title, description: description, price: price});
        } catch (err) {
            console.log(err);
            throw err;
        }
    };
}

export function deleteAdvertD(id) {
    return async (dispatch) => {
        try {
            const result = await deleteAdvert(id);
            console.log(result);
            console.log(id);
            dispatch({ type: 'DELETE_ADVERT', id: id })
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
}