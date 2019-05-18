import {types} from '../types' ;

export const actionCreators = {
    loginUser: (email) =>{
        return {
            type: types.LOGIN_USER,
            payload: email
        }
    },
    addItem: (storeName,menu,amount) => {
        return {
            type: types.ADD_ITEM,
            payload: {
                storeName: storeName,
                menu: menu,
                amount: amount
            }
        }
    },
    removeItem: (index) =>{
        return {
            type: types.REMOVE_ITEM,
            payload: index
        }
    },
    toggleItemCompleted: (index) =>{
        return { 
            type: types.TOGGLE_ITEM_COMPLETED,
            payload: index
        }
    },
    removeCompleted: () => {
        return {
            type: types.REMOVE_COMPLETED,
        }
    }
   }