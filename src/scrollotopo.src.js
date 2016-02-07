var ScrolloTopo = function(options) {

    var elems,
        CLASS_MAIN = 'scrollTopo',
        CLASS_SHOW = CLASS_MAIN + '-show',
        EVT_CLICK = 'click',
        EVT_SCROLL = 'scroll';

    //utils
    function _hasClass(elem, className) {
        return elem.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    }

    function _addClass(elem, className) {
        if (!_hasClass(elem, className)) elem.className += " " + className;
    }

    function _removeClass(elem, className) {
        if (_hasClass(elem, className)) elem.className = elem.className.replace(" "+className,'');
    }

    function _toggleClass(elem, className, toggle){
        toggle ? _addClass(elem, className) : _removeClass(elem, className);
    }

    function _watchWindowScrollPos() {
        window.addEventListener( EVT_SCROLL, _toggleScrollButtons, false);
    }

    function _toggleScrollButtons(evt) {
       _editAllinArray(elems, _toggleScrollButton);
    }

    function _getWindowScrollPos(){
        return options.target ? options.target.scrollTop : window.pageYOffset || document.scrollTop;
    }

    function _toggleScrollButton(elem) {
        var toggle = _getWindowScrollPos() >= (options.location || 100) ? true : false;
        _toggleClass( elem, CLASS_SHOW, toggle );
    }

    function _editAllinArray(elements, callback) {
        for (var i = elements.length - 1; i >= 0; i--) {
            callback(elements[i]);
        }
    }

    function scrollToY(scrollTargetY, speed, easing) {

        var scrollItem = options.target || window;

        var scrollY = scrollItem.scrollY,
            scrollTargetY = scrollTargetY || 0,
            speed = speed || 2000,
            easing = easing || 'easeOutSine',
            currentTime = 0,
            time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8)),
            PI_D2 = Math.PI / 2,
            easingEquations = {
                easeOutSine: function(pos) {
                    return Math.sin(pos * (Math.PI / 2));
                },
                easeInOutSine: function(pos) {
                    return (-0.5 * (Math.cos(Math.PI * pos) - 1));
                },
                easeInOutQuint: function(pos) {
                    if ((pos /= 0.5) < 1) {
                        return 0.5 * Math.pow(pos, 5);
                    }
                    return 0.5 * (Math.pow((pos - 2), 5) + 2);
                }
            };

        function tick() {
            currentTime += 1 / 60;

            var p = currentTime / time;
            var t = easingEquations[easing](p);

            if (p < 1) {
                requestAnimFrame(tick);
                scrollItem.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
            } else {
                scrollItem.scrollTo(0, scrollTargetY);
            }
        }

        tick();
    }

    function _scrollWindowTo(place) {
        scrollToY(place, 2000, 'easeOutSine');
    }

    function _scrollTop(i) {
        _scrollWindowTo(0);
    }

    function _applyHandler(elem) {
        elem.addEventListener(EVT_CLICK, _scrollTop, false);
    }

    function _getElems(className) {
        return document.getElementsByClassName(className);
    }

    function _createButton(){
        var Button = document.createElement('div');
        Button.className = 'scrollTopo';
        document.body.appendChild( Button );
    }

    function _addStuff(){
        _createButton();

        window.requestAnimFrame = (function() {
            return window.requestAnimationFrame ||
                   window.webkitRequestAnimationFrame ||
                   window.mozRequestAnimationFrame ||
                    function(callback) {
                        window.setTimeout(callback, 1000 / 60);
                    };
        })();

        elems = _getElems(CLASS_MAIN);
        _editAllinArray(elems, _applyHandler);

        _watchWindowScrollPos();
    }

    function _init() {
         document.addEventListener('DOMContentLoaded', function(){
            _addStuff();
        });
    }

    return {
        init: _init
    }

};
