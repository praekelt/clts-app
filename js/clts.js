window.clts = {

    api: {
        //baseURL: 'http://qa.clts.praekeltfoundation.org/api/v1/',
        baseURL: 'http://localhost:8080/api/v1/',
        url: function() {
            var args = Array.prototype.slice.call(arguments);
            return window.clts.api.baseURL + args.join('/') + '/';
        }
    },
    
    storage: {
        prefix: 'clts.v1.',

        set: function(key, value) {
            console.log('- set', window.clts.storage.prefix, key);
            var d = JSON.stringify(value);
            window.localStorage.setItem(window.clts.storage.prefix + key, d);
        },

        get: function(key) {
            console.log('- get', window.clts.storage.prefix, key);
            var d = window.localStorage.getItem(window.clts.storage.prefix + key) || false;
            if (d === false) return false;
            return JSON.parse(d);
        },
    }
};

