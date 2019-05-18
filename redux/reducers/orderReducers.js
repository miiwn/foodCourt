import { types } from '../types';


const initialState = {
    order: []
}

export const reducer = (state = initialState, action) => {
    const { type, payload } = action
    const { order } = state

    switch (type) {
        case types.ADD_ITEM: {
           return {
                ...state,
                order: [{ 
                    storeName: payload.storeName, 
                    name: payload.menu.name, 
                    price: payload.menu.price, 
                    amount: payload.amount },
                     ...order],
            }
        }
        case types.REMOVE_ITEM: {
            return {
                ...state,
                order: items.filter((item, i) => i !== payload)
            }
        }
        default: {
            return state
        }
    }
}
