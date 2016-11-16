Object.prototype.method = function(name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
        return this;
    }
};

Object.prototype.defTrueSpecMethod = function(name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = function(spec) {
            return func.call(this, toDefTrueSpecMethod(spec))
        }
        return this;
    }
};

Object.prototype.defEqualSpecMethod = function(name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = function(spec) {
            return func.call(this, toDefEqualSpecMethod(spec))
        }
        return this;
    }
};

function toDefTrueSpecMethod(spec) {
    return (spec !== undefined) ? spec : obj => true;
}

function toDefEqualSpecMethod(spec) {
    return (typeof spec === "function") ? spec : obj => obj === spec;
}

if (typeof Array.isArray === "undefined") {
    Array.isArray = function(arg) {
        return Object.prototype.toString.call(arg) === "[object Array]";
    };
}

Array.method('each', function(spec) {
    var len = this.length;
    for (var index = 0; index < len; index += 1) {
        spec(this[index], index);
    }
});

Array.method('where', function(spec) {
    var result = [];
    this.each(obj => {
        if (spec(obj)) {
            result.push(obj);
        }
    });
    return result;
});

Array.defEqualSpecMethod('any', function(spec) {
    return this.index(spec) >= 0 ? true : false;
});

Array.method('select', function(spec) {
    return this.map(obj => spec(obj));
});

Array.method('take', function(howMany, spec) {
    return (spec === undefined) ? this.slice(0, howMany) : this.where(spec).take(howMany);
});

Array.method('skip', function(howMany) {
    return this.slice(howMany)
});

Array.defTrueSpecMethod('first', function(spec) {
    var len = this.length;
    for (var index = 0; index < len; index += 1) {
        if (spec(this[index])) {
            return this[index];
        }
    }
    return null;
});

Array.defTrueSpecMethod('last', function(spec) {
    var len = this.length;
    for (var index = len - 1; index >= 0; index -= 1) {
        if (spec(this[index])) {
            return this[index];
        }
    }
    return null;
});

Array.defTrueSpecMethod('count', function(spec) {
    return this.where(spec).length;
});

Array.defEqualSpecMethod('index', function(spec) {
    var len = this.length;
    if (len === 0) {
        return -1
    }
    for (var index = 0; index < len; index += 1) {
        if (spec(this[index])) {
            return index;
        }
    }
    return -1;
});

Array.method('pluck', function(prop) {
    return this.map(obj => obj[prop]);
});

Array.method('sum', function(spec) {
    return (spec === undefined) ? this.reduce((a, b) => a + b) : this.map(spec).reduce((a, b) => a + b);
});

Array.method('max', function(comparer) {
    return (comparer === undefined) ? this.reduce((a, b) => a > b ? a : b) : this.reduce((a, b) => comparer(a, b) > 0 ? a : b);
});

Array.method('min', function(comparer) {
    return (comparer === undefined) ? this.reduce((a, b) => a > b ? b : a) : this.reduce((a, b) => comparer(a, b) > 0 ? b : a);
});

Array.method('flatten', function(comparer) {
    var flattened = [];
    this.each(obj => {
        !Array.isArray(obj) ? flattened.push(obj) : flattened.push(...obj.flatten());
    });
    return flattened;
});
