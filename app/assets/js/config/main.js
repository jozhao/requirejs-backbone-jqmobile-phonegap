requirejs.config({
    baseUrl: 'app/assets/js',
    paths: {
    	'jquery': 'lib/jquery/jquery.min',
        'jqmconfig': 'lib/jquerymobile/jqm-config',
        'jqm': 'lib/jquerymobile/jquery.mobile.min',
    	'underscore': 'lib/underscore/underscore-min',
    	'backbone': 'lib/backbone/backbone-min',
        'localstorage': 'lib/backbone/backbone.localStorage-min',
    	'text': 'lib/require/text',
        'templates': '../tpl'
    },
    shim: {
        underscore: {
          exports: '_'
        },
        backbone: {
          deps: ['underscore', 'jquery'],
          exports: 'Backbone'
        },
        'jqm': {
            deps: ['jqmconfig', 'jquery']
        }
      }
});

require(['jquery', 'underscore', 'backbone', 'lib/require/domReady','config/app'], function($, _, Backbone, domReady, App){
	domReady(function() {
        function onDeviceReady(status) {
            App.initialize();
        }

        if (navigator.userAgent.match(/(iPad|iPhone|Android)/)) {
            document.addEventListener('deviceready', onDeviceReady(true), false);
        } else {
            onDeviceReady(true);
        }
	});
});