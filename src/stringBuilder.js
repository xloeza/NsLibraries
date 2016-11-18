require('./array-linq');

StringBuilder = (function () {
    var buffer = [];

    return {
        cat: function (...val) {
            val.flatten().each(obj => { typeof obj === "function" ? buffer.push(obj()) : buffer.push(obj) });
            return this;
        },
        len: function () {
            return buffer.length;
        },
        clear: function () {
            buffer = [];
        },
        string: function () {
            return buffer.join('');
        }
    };
} ());
module.exports = StringBuilder;