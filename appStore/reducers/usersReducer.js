const initialState = {
    loggedUser: {
        id: null,
        name: '',
        surname: '',
        password: '',
        phone: ''
    }
}

const usersReducer = (state = initialState, action) => {
    console.log(action.type)
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
        default:
            return state;
    }
}

export default usersReducer