const initialState = {
    adverts: [],
    userAdverts: []
}

export const advertsReducer = (state = initialState, action) => {
    var index = 0
    var adverts = []
    console.log(action.type)
    switch (action.type) {
        case 'ADD_ADVERT':
            return {
                adverts: [
                    ...state.adverts,
                    {
                        id: action.id,
                        title: action.title,
                        description: action.description,
                        price: action.price,
                        phone: action.phone,
                        userId: action.userId
                    }
                ]
            }
        case 'UPDATE_ADVERT':
            index = state.adverts.findIndex((advert) => advert.id === action.id);
            adverts = [...state.adverts]
            adverts[index] = {
                title: action.title,
                description: action.description,
                price: action.price,
                phone: action.phone,
                userId: state.adverts[index].userId
            }
            return {
                adverts : [...adverts]
            }
        case 'GET_ADVERTS':
            for (let i = 0; i < action.rows.length; i++) {
                adverts.push(action.rows.item(i));
                console.log(action.rows.item(i));
            }
            return {
                adverts: [...adverts]
            };

        case 'DELETE_ADVERT':
            index = state.adverts.findIndex((advert) => advert.id === action.id);
            return {
                adverts: [...state.adverts.slice(0, index), ...state.adverts.slice(index + 1)]
            }
        default:
            return state;
    }
}