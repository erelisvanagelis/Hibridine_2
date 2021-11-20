const initialState = {
    users: [],
    loggedUser: {
        id: null,
        name: null,
        surname: null,
        password: null,
        phone: null
    }
}

export const usersReducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case 'ADD_USER':
            const user = {
                name: action.name,
                surname: action.surname,
                password: action.password,
                phone: action.phone,
            }
            console.log(user)

            return {
                users: [...state.users, user]
            }
        default:
            return state;
    }
}

export const userLogin = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            state.loggedUser = {
                id: action.id,
                name: action.name,
                surname: action.surname,
                password: action.password,
                phone: action.phone
            }
            console.log("Kvieciamas userLogin")
            console.log(state.loggedUser);
            return {
                loggedUser: state.loggedUser
            }

        case 'LOGED_USER':
            return {
                loggedUser: state.loggedUser
            }
        default:
            return state;
    }
};