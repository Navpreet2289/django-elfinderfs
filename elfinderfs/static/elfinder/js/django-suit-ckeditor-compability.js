(function() {
    "use strict";

    $(function() {
        if(window.location.search.indexOf('CKEditor') > -1) {
            $('body').css('min-width', '400px');
            $('.suit-columns').css('padding', 0);
            $('#suit-left,#header, #footer,.breadcrumb,#push').hide();
            $('#wrap').css('background', 'none');
            $('#suit-center').css('padding', '10px');
            $('#suit-center').css({
                float: 'none',
                boxSizing: 'border-box',
            });
        }
    });
})();
