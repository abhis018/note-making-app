import { CHANGE_TITLE, CHANGE_DESCRIPTION, REQUEST_DATA, CHANGE_SEARCHFIELD, CHANGE_DATE, NEW_SORT, OLD_SORT, FILTER_PRODUCT} from './constants.js';
import store from './index';
import { fetchData, sortData} from './controller';

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
    
    let data = {title: store.getState().title, description: store.getState().description, date:store.getState().date};
    // console.log(data);
    console.log(store.getState().result.title);
    return {
        type: REQUEST_DATA,
        payload: data
    }
}

export const setSearchField = (text) => {
    return{
        type: CHANGE_SEARCHFIELD,
        payload: text
    }
}

export const setDate = (date) => {
    return {
        type: CHANGE_DATE,
        payload: date
    }
}

export const setSort = (sortState) => {
    console.log(sortState);
    let sortedData = sortData(sortState);
    return {
        type: NEW_SORT, 
        payload: sortedData
    }
}

export const filterdata = (filterWeek, filterYear, filterMonth) => {
    console.log("Inside filter data", filterWeek, filterYear, filterMonth)
    let getproduct = fetchData(filterWeek, filterYear, filterMonth);
    return {
        type: FILTER_PRODUCT,
        payload: getproduct
    }
}