import moment from 'moment';
import store from './index';


// let result = store.getState().result;

export const fetchData = function fetchdata(weekfilter, yearfilter, monthfilter){
    let result = store.getState().result;
    console.log(result);
    console.log(weekfilter, yearfilter, monthfilter)
    let res = [];
    switch(true){
        case !(weekfilter === '' || weekfilter === undefined):
            for(let i=0; i<result.length; i++){
                if(moment(result[i].date, 'YYYY-MM-DD').week() === Number(weekfilter)){
                    res.push(result[i])
                }
            }
            break;
        default:
            res = result;
    }
    console.log(res)
    let out = [];
    switch(true){
        case !(yearfilter === '' || yearfilter === undefined):
            for(let i=0; i<res.length; i++){
                if(moment(res[i].date, 'YYYY-MM-DD').year() === Number(yearfilter)){
                    out.push(res[i])
                }
            }
            break;
        default:
            out = res;
    }
    console.log(out)
    let output= [];
    switch(true){
        case !(monthfilter === '' || monthfilter === undefined):
            for(let i=0; i<out.length; i++){
                if(moment(out[i].date).format('MMMM') === monthfilter){
                    output.push(out[i])
                }
            }
            break;
        default:
            output = out;
    }
    console.log(output)
    return output;
}

export const sortData = function sortData(sortState) {
    console.log("inside sortData", sortState)
    let allEntries = store.getState().result;
    if (sortState === 'ascending') {
        allEntries.sort(function(a,b){
            return new Date(b.date) - new Date(a.date);
          });
    } else if (sortState === 'descending') {
        allEntries.sort(function(a,b){
            return new Date(a.date) - new Date(b.date);
          });
    }
    console.log(allEntries)
    return allEntries;
}
    