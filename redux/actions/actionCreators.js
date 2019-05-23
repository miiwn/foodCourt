import {types} from '../types' ;

export const actionCreators = {
    loginUser: (email) =>{
        return {
            type: types.LOGIN_USER,
            payload: email
        }
    },
    addItem: (storeName,menu,amount,note) => {
        return {
            type: types.ADD_ITEM,
            payload: {
                storeName: storeName,
                menu: menu,
                amount: amount,
                note: note
            }
        }
    },
    removeItem: (index) =>{
        return {
            type: types.REMOVE_ITEM,
            payload: index
        }
    },
    clearOrder: ()=>{
        return {
            type :types.CLEAR_ITEM
        }
    }
   }