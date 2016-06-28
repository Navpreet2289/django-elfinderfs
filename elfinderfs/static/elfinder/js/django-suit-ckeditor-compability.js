(function() {
    "use strict";

    $(function() {
        if(window.location.search.indexOf('CKEditor') > -1) {
            $('#suit-left').remove();
            $('.suit-columns').css('paddingLeft', 0);
            $('#suit-center').css('float', 'none');
            $('#wrap').css('background', 'none');
        }
    });
})();
