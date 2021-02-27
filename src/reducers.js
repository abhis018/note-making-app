import { setDescription } from './actions.js';
import { CHANGE_TITLE, CHANGE_DESCRIPTION, REQUEST_DATA, CHANGE_SEARCHFIELD, CHANGE_DATE, NEW_SORT, FILTER_PRODUCT} from './constants.js';

const initialState = {
    title: '',
    description:'',
    result:[],
    searchField:'',
    date:'',
    week: '',
    year: '',
    month: '',
    sortState: '',
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
        case CHANGE_SEARCHFIELD:
            return{
                ...state,
                searchField: action.payload
            } 
        case CHANGE_DATE:
            return{
                ...state,
                date: action.payload
            }
        case NEW_SORT:
            return{
                ...state,
                result: action.payload
            }
        case FILTER_PRODUCT:
            return {
                ...state, 
                result: action.payload
            }      
        default:
            return state;    
    }
}