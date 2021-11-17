export function addAdvert(title, description, price, userId) {
    return { type: 'ADD_ADVERT', title: title, description: description, price: price, userId: userId }
}

export function getAdverts() {
    return { type: 'GET_ADVERTS' }
}

export function getUserAdverts(userId) {
    return { type: 'GET_USER_ADVERTS', userId: userId }
}

export function deleteAdvert(id) {
    return { type: 'DELETE_ADVERT', id: id }
}