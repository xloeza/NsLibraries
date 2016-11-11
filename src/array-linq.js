Object.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};

Object.method('each', function(callback){
    var arrayLength = this.length;
    for(var x = 0; x < arrayLength; x++){
        callback(this[x], x);
    }
});

Object.method('where', function(callback){
    var filterArray = [];
    var arrayLength = this.length;
    for(var x = 0; x < arrayLength; x++ ){
        if(callback(this[x])){
            filterArray.push(this[x]);
        }
    }
    return filterArray;
});

Object.method('any', function(callback){    
    var arrayLength = this.length;
    for(var x = 0; x < arrayLength; x++ ){
        if(typeof callback === "function"){
            if(callback(this[x])){
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

