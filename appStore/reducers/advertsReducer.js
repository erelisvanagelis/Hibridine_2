const initialState = {
    adverts: [],
}

export const advertsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_ADVERT':
            console.log(action.id)
            return {
                adverts: [
                    ...state.adverts, 
                    {
                        title: action.title, 
                        description: action.description, 
                        price: action.price,
                        phone: action.phone,
                        userId: action.userId
                    }
                ]
            }
        case 'GET_ADVERTS': 
            return {
                adverts: [...state.adverts]
            }
        case 'GET_USER_ADVERTS':
            return {
                adverts: [...state.adverts]
            }
        case 'DELETE_ADVERT':
            const index = state.adverts.findIndex((advert) => advert.id === action.id);
            return {
                adverts: [...state.adverts.slice(0, index), ...state.adverts.slice(index+1)]
            }
        default: 
            return state;
    }
}