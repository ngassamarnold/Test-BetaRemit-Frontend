/* eslint-disable prettier/prettier */
export const deleteObjetInArray = (array, id) => {
    let index = array.findIndex(x => x.index === id);
    if (index !== undefined)
        array.splice(index, 1);
    return array;
};

export const findIndexObjetInArray = (array, id) => {
    let index = array.findIndex(x => x.index === id);
    if (index > -1)
        return index;
    return false;
};


