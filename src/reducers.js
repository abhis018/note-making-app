import { setDescription } from './actions.js';
import { CHANGE_TITLE, CHANGE_DESCRIPTION, REQUEST_DATA} from './constants.js';

const initialState = {
    title: '',
    description:'',
    result:[],
}

export const enterNotes = (state = initialState, action = {}) => {
    switch(action.type){
        case CHANGE_TITLE :
            return {
                ...state,
                title: action.payload
            }
        case CHANGE_DESCRIPTION:
            return{
                ...state,
                description: action.payload
            }
        case REQUEST_DATA:
            return{
                ...state,
                result: state.result.concat(action.payload)
            }    
        default:
            return state;    
    }
}