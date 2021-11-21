const initialState = {
    autoLogin: {
        active: false,
        name: '',
        password: '',
    }
}

const settingsReducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case 'SET_AUTOLOGIN':
            state.autoLogin = {
                active: action.object.active,
                name: action.object.name,
                password: action.object.password
            }
            return {
                autoLogin: state.autoLogin
            }
        default:
            return state;
    }
}

export default settingsReducer