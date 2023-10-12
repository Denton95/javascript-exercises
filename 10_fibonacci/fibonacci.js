const fibonacci = function(x) {
    if (x < 1)return "OOPS";
    if (x === 0 ) return 0;
    let array = [];
    let value = 0;
    let newValue = [];
    for(i = 0 ; i < x ; i++){
        if(i<2){
           array[i] = 1;
        }
        else
        {
        newValue = array.slice(i-2, i);
        value = newValue.reduce((total, currentValue)=> {
            return (total + currentValue);
        },0);
        array[i] = value;
        };
    };
    return array[x-1];
};

// Do not edit below this line
module.exports = fibonacci;
