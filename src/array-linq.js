Object.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};

Array.method('each', function (spec) {
    var arrayLength = this.length;

    for (var x = 0; x < arrayLength; x = x + 1) {
        spec(this[x], x);
    }
});

Array.method('where', function (spec) {
    var filterArray = [];
    this.each((element, index) => {

        if (spec(element)) {
            filterArray.push(element);
        }
    });

    return filterArray;
});

Array.method('any', function (spec) {
    var arrayLength = this.length;
    for (var x = 0; x < arrayLength; x = x + 1) {
        if (typeof spec === "function") {
            if (spec(this[x])) {
                return true;
            }
        }
        else {
            var anyValuesArrayLenght = arguments.length;
            for (var y = 0; y < anyValuesArrayLenght; y++) {
                if (this[x] === arguments[y]) {
                    return true;
                }
            }
        }
    }
    return false;
});

Array.method('select', function (spec) {
    var selectArray = [];

    this.each((element, index) => {
        selectArray.push(spec(element))
    });

    return selectArray;
});

Array.method('take', function (howMany, spec) {
    var taked = [];

    var arrayLength = this.length;
    if (howMany > 0) {
        if (spec === undefined) {
            for (var x = 0; x < arrayLength && x < howMany; x = x + 1) {
                taked.push(this[x]);
            }
        }
        else {
            return this.where(spec).take(howMany);
        }

    }

    return taked;
});

Array.method('skip', function (howMany) {
    var taked = [];
    var arrayLength = this.length;
    if(howMany === 0)
    {
        return this;
    }    
    if (arrayLength > howMany) {        
        taked = this.slice(howMany, arrayLength);
    }
        
    return taked;
});

Array.method('first', function (spec) {
    var first = null,
        element = null,
        arrayLength = 0,
        count = 0;
    if(this !== null){
        if(spec === undefined){
            first = this[0]
        }
        else{   
            var arrayLength = this.length;

            while(count < arrayLength && first === null){
                element = this[count]
                if (spec(element)) {
                    first = element;                    
                }
                count = count + 1;
            };            
        }
    }
        
    return first;
});

Array.method('last', function (spec) {
    var last = null,
        element = null,
        arrayLength = 0,
        count = 0;
    if(this !== null){
        var arrayLength = this.length;
        if(spec === undefined){
            last = this[arrayLength-1]
        }
        else{           
            count = arrayLength - 1;
            while(count >= 0 && last === null){
                element = this[count]
                if (spec(element)) {
                    last = element;                    
                }
                count = count - 1;
            };            
        }
    }
        
    return last;
});


Array.method('count', function (spec) {
    var count = 0,
    arrayLength = 0;
    if(this !== null){     
        arrayLength = this.length;   
        if(spec === undefined){
            count = arrayLength;
        }
        else{           
            for (var x = 0; x < arrayLength; x = x + 1) {
                if(spec(this[x])){
                    count = count + 1
                }
            }        
        }
    }
        
    return count;
});

Array.method('index', function (spec) {
    var indexId = -1,
        count = 0,
        element = null;
    if(this !== null){
        var arrayLength = this.length;
        while(count < arrayLength && indexId === -1){
                element = this[count]
                if (typeof spec === "function"){
                    if (spec(element)) {
                        indexId = count;                    
                    }
                }
                else{
                    if (element === spec) {
                        indexId = count;                    
                    }
                }
                count = count + 1;
        };  
    }
        
    return indexId;
});
