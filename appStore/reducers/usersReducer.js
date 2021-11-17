const initialState = {
    users: [],
}

export const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_USER':
            console.log(action.id)
            return {
                users: [
                    ...state.users,
                    {
                        name: action.name,
                        surname: action.surname,
                        password: action.password,
                        phone: action.phone,
                    }
                ]
            }
        default: 
            return state;
    }
}