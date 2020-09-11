
import {CLICK} from './action';
import {initialState} from './initialState'




const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CLICK : 
        return {
            ...state,
            CLICK: state.click + 1
        }

        default : 
    }
    return state;
};

export default reducer