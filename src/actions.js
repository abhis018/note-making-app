import { CHANGE_TITLE, CHANGE_DESCRIPTION, REQUEST_DATA} from './constants.js';
import store from './index';


export const setTitle = (text) => {
    // console.log(text)
    return {
        type: CHANGE_TITLE,
        payload: text
    }
}
    

export const setDescription = (text) => {
    // console.log(text)
    return {
        type: CHANGE_DESCRIPTION,
        payload: text
    }
}

export const requestData = (d) => {
    
    let data = {title: store.getState().title, description: store.getState().description};
    // console.log(data);
    console.log(store.getState().result.title);
    return {
        type: REQUEST_DATA,
        payload: data
    }
}