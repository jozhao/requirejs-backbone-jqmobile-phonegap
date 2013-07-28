define([
        'jquery', 
        'underscore', 
        'backbone',
        'config/router',
        'jqmconfig',
        'jqm'
        ], function($, _, Backbone, Router){
	var initialize = function(){
		Router.initialize();
	};

	return { initialize: initialize };
});