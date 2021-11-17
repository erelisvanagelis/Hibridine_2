const initialState = {
    users: [],
}

export const usersReducer = (state = initialState, action) => {
    console.log(action.type)
    switch(action.type) {
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
        case 'GET_USERS':
            const users = [...state.users]
            users.map(user => console.log(user))
            return {
                users: [...state.users]
            }
        default: 
            return state;
    }
}