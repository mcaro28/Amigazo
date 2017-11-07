(function ($) { //an IIFE so safely alias jQuery to $
    $.Loading = function (options) {
        this.options = defaultOptions(options);
    };

    //assigning an object literal to the prototype is a shorter syntax
    //than assigning one property at a time
    $.Loading.prototype = {
        open: function (options) {
            var _this = this;

            _this.options = defaultOptions(options);
            if (!_this.element) {

                var content = $('<div/>').attr({ id: 'content' })
                    , animate = $('<div/>').attr({ class: 'loading animate ' })
                    , span = $('<span/>').text(this.options.textMessage)
                    , body = $('body');

                body.append(content);
                content.append(animate).append(span);
                this.element = content;
            }

            if (_this.options.keyScape) {

                $(document).keydown(function (e) {
                    var key = e.which;
                    if (key === 27) {
                        if (_this.element) {
                            _this.element.remove();
                            _this.element = null;
                        }
                    }
                });
            }
            return _this;
        },
        close: function () {
            if (this.element) {
                this.element.remove();
                this.element = null;
            }
            return this;
        }
    };

    defaultOptions = function (options) {

        return $.extend({
            textMessage: 'Cargando por favor espere ...',
            keyScape: true,
        }, options);
    }

}(jQuery));

//so you can use it as:
var loading = new $.Loading();