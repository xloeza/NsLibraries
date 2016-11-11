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