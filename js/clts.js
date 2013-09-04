window.clts = {

    api: {
        baseURL: 'http://localhost:8080/api/v1/',
    },

    storage: {
        prefix: 'clts.v1.',
    },

    module: angular.module('clts', []),
};

window.clts.storage.get = function(key) {
    console.log('- get', window.clts.storage.prefix, key);
    var d = localStorage.getItem(window.clts.storage.prefix + key) || false;
    if (d === false) return false;
    return JSON.parse(d);
};

window.clts.storage.set = function(key, value) {
    console.log('- set', window.clts.storage.prefix, key);
    var d = JSON.stringify(value);
    localStorage.setItem(window.clts.storage.prefix + key, d);
};

window.clts.api.url = function() {
    var args = Array.prototype.slice.call(arguments);
    return window.clts.api.baseURL + args.join('/') + '/';
};
