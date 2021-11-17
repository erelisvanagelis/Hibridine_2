export function addUser(name, surname, password, phone) {
    return { type: 'ADD_USER', name: name, surname: surname, password: password, phone: phone }
}

export function getUsers() {
    return { type: 'GET_USERS' }
}