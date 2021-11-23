import { insertAdvert, updateAdvert, deleteAdvert, selectAdvertsByUserId, selectInnerJoinAdvertsUser, selectMaxAdvert } from '../../src/helper/db';

export function addAdvert(title, description, price, userId, name, surname, phone, callback) {
    return async (dispatch) => {
        var result = "SUCESS"
        try {
            console.log('insertAvert')
            const resultA = await insertAdvert(userId, title, description, price);
            console.log('after insertAvert')
            console.log('selectMaxAvert')
            const resultD = await selectMaxAdvert()
            console.log('after selectMaxtAvert')
            dispatch({ 
                type: 'ADD_ADVERT', 
                id: resultD.rows.item(0),
                title: title, 
                description: description, 
                price: price, 
                userId: userId,
                name: name,
                surname: surname,
                phone: phone
             });
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
            // console.log(result);
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
            // console.log(result);
            dispatch({ type: 'GET_USER_ADVERTS', rows: result.rows })
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
            // console.log(id);
            dispatch({ type: 'DELETE_ADVERT', id: id })
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
}