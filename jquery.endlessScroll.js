/*
 * Plugin endlessScroll for simple scroll pagination
 * Author: @igor_yanosh
 */

;
(function ($, window, document, undefined) {

    // our plugin constructor
    var EndlessScroll = function (elem, options) {
        this.elem = elem;
        this.$elem = $(elem);
        this.options = options;

        // This next line takes advantage of HTML5 data attributes
        // to support customization of the plugin on a per-element
        // basis. For example,
        // <div class=item' data-endlessScroll-options='{scrollTrigger:0.5}'></div>
        this.metadata = this.$elem.data('endlessScroll-options');
    };

    // the plugin prototype
    EndlessScroll.prototype = {
        defaults: {
            scrollTrigger: 0.77,
            loader: '.loader',
            loaderHtml: '<div class="loader"></div>',
            nextLink: '.next'
        },
        settings: {
            reachEnd: false,
            isLoadingData: false,
            page: 1
        },

        init: function () {
            // Introduce defaults that can be extended either
            // globally or using an object literal.
            var that = this;
            that.config = $.extend({}, that.defaults, that.options,
                that.metadata);

            // Sample usage:
            // Set the scrollTrigger per instance:
            // $('#elem').endlessScroll({ scrollTrigger: 0.5});
            // or
            // var p = new EndlessScroll(document.getElementById('elem'),
            // { scrollTrigger: 0.5}).init()
            // or, set the global default scrollTrigger:
            // EndlessScroll.defaults.scrollTrigger = 0.9


            //TODO: find better way for reset method
            that.reset();
            that.$elem.on('resetEndlessScroll', function () {
                that.reset();
            });

            that.initScroll();
            return that;
        },

        initScroll: function () {
            var that = this;

            $(window).scroll(function () {
                var winTop = $(window).scrollTop(),
                    docHeight = $(document).height(),
                    winHeight = $(window).height();

                if (!that.settings.reachEnd && !that.settings.isLoadingData &&
                    ((winTop / (docHeight - winHeight)) > that.config.scrollTrigger)) {
                    that.loadMore();
                }
            });

        },

        loadMore: function () {
            if (this.$elem.html().length === 0) {
                return false;
            }
            var that = this;

            that.settings.isLoadingData = true;
            that.insertLoader();

            that.settings.page += 1;
            var url = this.$elem.next(that.config.nextLink).attr('href');
            $.ajax({
                type: "GET",
                url: url + '/page:' + that.settings.page,
                cache: false,
                success: function (response) {
                    that.removeLoader();
                    if (response.length === 0) {
                        that.settings.reachEnd = true;
                        that.settings.isLoadingData = false;
                        return false;
                    }
                    that.$elem.append(response);
                    that.settings.isLoadingData = false;
                }
            });

        },
        /**
         * Insert loader div
         */
        insertLoader: function () {
            this.$elem.append(this.config.loaderHtml);
            this.$elem.find(this.config.loader);
        },
        /**
         * Remove loader div
         */
        removeLoader: function () {
            this.$elem.find(this.config.loader).remove();
        },
        /** Reset settings to defaults
         * */
        reset: function () {
            this.settings = {
                reachEnd: false,
                isLoadingData: false,
                page: 1
            };
        }
    };

    EndlessScroll.defaults = EndlessScroll.prototype.defaults;

    $.fn.endlessScroll = function (options) {
        return this.each(function () {
            new EndlessScroll(this, options).init();
        });
    };

    //optional: window.EndlessScroll = EndlessScroll;

})(jQuery, window, document);