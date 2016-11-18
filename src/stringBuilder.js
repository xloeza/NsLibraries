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
        }
    };
} ());
module.exports = StringBuilder;