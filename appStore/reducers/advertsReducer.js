const initialState = {
    adverts: []
}

const advertsReducer = (state = initialState, action) => {
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
                        userid: action.userId,
                        name: action.name,
                        surname: action.surname,
                    }
                ]
            }
        case 'UPDATE_ADVERT':
            index = state.adverts.findIndex((advert) => advert.id === action.id);
            console.log('updates')
            console.log(state.adverts[index])
            state.adverts[index] = {
                id: state.adverts[index].id,
                title: action.title,
                description: action.description,
                price: action.price,
                phone: action.phone,
                userid: state.adverts[index].userid,
                name: state.adverts[index].name,
                surname: state.adverts[index].surname,
                phone: state.adverts[index].phone,
            }
            console.log(state.adverts[index])
            return {
                adverts: [...state.adverts]
            }
        case 'GET_ADVERTS':
            for (let i = 0; i < action.rows.length; i++) {
                adverts.push(action.rows.item(i));
                // console.log(action.rows.item(i));
            }
            return {
                adverts: [...adverts]
            };
        case 'DELETE_ADVERT':
            index = state.adverts.findIndex((advert) => advert.id === action.id);
            return {
                adverts: [...state.adverts.slice(0, index), ...state.adverts.slice(index + 1)],
            }
        default:
            return state;
    }
}

export default advertsReducer