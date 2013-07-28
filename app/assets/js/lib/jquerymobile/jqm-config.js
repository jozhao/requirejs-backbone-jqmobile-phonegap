$(document).on('mobileinit', function () {
    $.mobile.ajaxEnabled = false;
    $.mobile.linkBindingEnabled = false;
    $.mobile.hashListeningEnabled = false;
    $.mobile.pushStateEnabled = false;
    $.mobile.allowCrossDomainPages = true;
    $.mobile.phonegapNavigationEnabled = true;
    $.mobile.defaultPageTransition = 'slide';
    $.mobile.buttonMarkup.hoverDelay = 100;
    $.mobile.pageContainer = $('#container');
    $.support.cors = true;
});