const removeFromArray = function(array, ...args) {
    args.forEach((arg) => {
        //find the index of the argument in the array
        const index = array.indexOf(arg);
        if(index > -1){
            array.splice(index, 1);
        }
    });
    return array
}
// Do not edit below this line
module.exports = removeFromArray;
