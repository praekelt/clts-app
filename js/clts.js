window.clts = {
    storage: {
        prefix: 'clts.v1.',
    },

    module: angular.module('clts', []),
};

window.clts.storage.get = function(key) {
    
    var d = localStorage.getItem(window.clts.storage.prefix + key) || false;
    if (d === false) return false;
    return JSON.parse(d);
};
