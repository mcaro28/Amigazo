(function ($) {  
    $.Alert = function (options) {
        this.options = defaultOptions(options);
    };
 
    $.Alert.prototype = {
        open: function (options) {
            var _this = this;

            _this.options = defaultOptions(options);
            if (!_this.element) {

                var content = $('<div/>')
                    , alert = $('<div/>').attr({ class: 'alert fade in alert-' + _this.options.type })
                    , span = $('<span/>').attr({
                        'class': 'close'
                    }).text('\xD7')
                    , strong = $('<strong/>').text(this.options.text)
                    , body = $('body');

                body.append(content);
                content.append(alert).css({
                    position: 'fixed',
                    width: '500px',
                    top: '-50px',
                    left: '30%'
                });

                alert.append(strong);
                content.animate({ 'top': '1px' }, 1500, 'swing');
                if (_this.options.delay) {
                    setTimeout(function () {
                        content.animate({ 'top': '-100px' }, _this.options.delay, function () {
                            _this.element.remove();
                            _this.element = null;
                        });
                    }, 1500)
                } else {
                    span.click(function () {
                        _this.close()
                    });
                    span.prependTo(alert);
                }
                this.element = content;
            }

            $(document).keydown(function (e) {
                var key = e.which;
                if (key === 27) {
                    _this.close();
                }
            });

            return _this;
        },
        close: function () {
            var _this = this;
            if (_this.element) {
                _this.element.animate({ 'top': '-100px' }, 1500, function () {
                    setTimeout(function () {
                        _this.element.remove();
                        _this.element = null;
                    }, 1000);
                });
            }
            return _this;
        }
    };

    defaultOptions = function (options) {

        return $.extend({
            text: 'Error no se a podido acceder a firebase SDK, por favor contactese con los desarrolladores de firebase para mas informacion',
            delay: null,
            type: 'danger',
        }, options);
    }

}(jQuery));

var alertMessage = new $.Alert();
