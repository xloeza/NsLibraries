require('./array-linq');

StringBuilder = (function () {
    var buffer = [];

    return {
        cat: function (...val) {
            val.flatten().each(obj => { typeof obj === "function" ? buffer.push(obj()) : buffer.push(obj) });
            return this;
        },
        bufferSize: function () {
            return buffer.length;
        },
        clear: function () {
            buffer = [];
        },
        string: function () {
            return buffer.join('');
        },
        rep: function (howManyTimes, ...val) {
            var i;
            for(i = 0; i< howManyTimes; i += 1){
                this.cat(val);
            }
            return this;
        }
    };
} ());
module.exports = StringBuilder;