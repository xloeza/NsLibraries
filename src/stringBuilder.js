require('./array-linq');

StringBuilder = (function() {
    var buffer = [];
    var wrappers = [];

    var concatenate = function(...val) {
        val.flatten().each(obj => typeof obj === "function" ? concatenate([obj()]) : buffer.push(obj.toString()));
    }

    var addPrefix = function() {
        wrappers.where(obj => obj.prefix.length > 0).each(obj => concatenate(obj.prefix));
    }

    var addSuffix = function() {
        wrappers.where(obj => obj.suffix.length > 0).reverse().each(obj => concatenate(obj.suffix));
    }

    return {
        cat: function(...val) {
            addPrefix();
            concatenate(val);
            addSuffix();
            return this;
        },
        bufferSize: function() {
            return buffer.length;
        },
        clear: function() {
            buffer = [];
            wrappers = [];
        },
        string: function() {
            return buffer.join('');
        },
        rep: function(howManyTimes, ...val) {
            var i;
            for (i = 0; i < howManyTimes; i += 1) {
                this.cat(val);
            }
            return this;
        },
        catIf: function(flag, ...val) {
            if (flag) {
                this.cat(val);
            }
            return this;
        },
        wrap: function(pre, suf) {
            wrappers.push({ prefix: arguments[0], suffix: arguments[1] })
            return this;
        },
        end: function(deep) {
            (deep === null || deep === undefined) ? wrappers.pop() : wrappers.splice(wrappers.length - deep, deep);
            return this;
        },
        prefix: function(...pre){
            wrappers.push({ prefix: pre, suffix: [] })
            return this;
        },
        suffix: function(...suf){
            wrappers.push({ prefix: [], suffix: suf })
            return this;
        }
    };
} ());
module.exports = StringBuilder;