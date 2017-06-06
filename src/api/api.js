import data from '../data.json';

function getTwoLists(json){
    var array = json.slice(0);
    var val = Math.floor(array.length / 2);
    var newArray = array.splice(0, val);
    return [array, newArray]
}

export const getTwoItems = getTwoLists(data);
