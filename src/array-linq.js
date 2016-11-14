Object.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};

Array.method('each', function(spec){
    var arrayLength = this.length;
    
    for(var x = 0; x < arrayLength; x++){
        spec(this[x], x);
    }
});

Array.method('where', function(spec){
    var filterArray = [];
    var arrayLength = this.length;
    for(var x = 0; x < arrayLength; x++ ){
        if(spec(this[x])){
            filterArray.push(this[x]);
        }
    }
    return filterArray;
});

Array.method('any', function(spec){    
    var arrayLength = this.length;
    for(var x = 0; x < arrayLength; x++ ){
        if(typeof spec === "function"){
            if(spec(this[x])){
                return true;
            }
        }
        else{
            var anyValuesArrayLenght = arguments.length;
            for(var y = 0; y < anyValuesArrayLenght; y++){
                if(this[x] === arguments[y]){
                    return true;
                }
            }
        }
    }
    return false;
});

