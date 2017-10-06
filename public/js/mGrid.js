(function () {
    this.mGrid = function () {

        // Define option defaults
        this.defaults = {
            container: null,
            className: 'fade-and-drop',
            headers: null,
            data: null
        }

        // Create options by extending defaults with the passed in arugments
        if (arguments[0] && typeof arguments[0] === "object") {
            this.options = extendDefaults(this.defaults, arguments[0]);
        }
    }

    mGrid.prototype.log = function () {
        console.log(this.defaults);
    }

    mGrid.prototype.create = function () {
        this.options = extendDefaults.call(this.defaults, arguments[0]);
        var _ = this;
        var options = this.options;
        if (!options.container) {
            console.error('undefined container mGrid');
            return;
        }

        if (!options.headers) {
            console.error('undefined headers mGrid');
            return;
        }

        if (typeof options.headers !== 'object') {
            console.error('not object headers mGrid');
            return;
        }

        var container = typeof options.container === 'string' ? document.getElementById(options.container) : options.container;
        if (container.children[0]) {
            container.children[0].remove();
        }

        var table = document.createElement('table');
        var trHeaders = document.createElement('tr');

        for (keys in Object.keys(options.headers)) {
            var header = options.headers[keys];
            var title = header.title || header.name;
            var th = document.createElement('th');
            var thText = document.createTextNode(title);
            th.appendChild(thText);
            trHeaders.appendChild(th);
        }

        table.appendChild(trHeaders);

        if (options.data && typeof options.data === 'object') {
            for (key in Object.keys(options.data)) {
                var trData = document.createElement('tr');
                for (keys in Object.keys(options.headers)) {
                    var name = options.headers[keys].name;
                    var data = options.data[key];
                    var td = document.createElement('td');
                    var tdText = document.createTextNode(data.hasOwnProperty(name) ? data[name] : '');
                    td.appendChild(tdText);
                    trData.appendChild(td);
                }
                table.appendChild(trData);
            }
        }
        container.appendChild(table);


    }
    function extendDefaults(source, properties) {
        var property;
        for (property in properties) {
            if (properties.hasOwnProperty(property)) {
                source[property] = properties[property];
            }
        }
        return source;
    }
}());

var mGrid = new mGrid();