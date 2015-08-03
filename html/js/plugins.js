/* global window, document */
(function(window, document, $) {
    $.fn.extend({

        freezeHeight: function () {
            var $t = this;
            if ($t.length > 1) {
                $t.each(function (args) {
                    $(this).defaultValue(args);
                });
                return $t;
            }
            $t.css('height', $t.outerHeight());
            return $t;
        }

    });
    
})(window, document, window.jQuery);