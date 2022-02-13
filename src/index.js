/*  
    Retrieves an flatten array, given an arbitrarily nested array of values
    ES6 feature equivalent: arr.flat(Infinity)
    * @param arr array with different nested levels
    * @returns returns a flattened array
*/
export const flatten = (arr) => {
    const response = [];

    if (!Array.isArray(arr)) {
        return new Error('Input must be an instance of Array.')
    }

    arr?.forEach(item => {
        if (Array.isArray(item)) {
            response.push(...flatten(item));
        } else {
            response.push(item);
        }
    });

    return response;
}

