'use strict';

const inverse = function(array, number = 0) {
    if (!Array.isArray(array) || !Number.isInteger(number)) {
        throw new TypeError();
    }
    
    const arr1 = array.slice(0, number);
    const arr2 = array.slice(number);

    return (number >= 0) ? arr1.concat(arr2.reverse()) : arr1.reverse().concat(arr2);
};
