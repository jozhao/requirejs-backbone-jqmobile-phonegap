// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'view/page/HomeView',
  'view/page/TrackView',
  'view/page/HistoryView',
  'view/page/SettingView',
  'view/page/AboutView',
  'view/generic/HeaderView',
  'view/generic/FooterView'
], function($, _, Backbone, HomeView, TrackView, HistoryView, SettingView, AboutView, HeaderView, FooterView) {
	// Define the route.
	var AppRouter = Backbone.Router.extend({
		routes: {
			'': 'home',
            'home': 'home',
            'setting': 'setting',
            'track': 'track',
            'track/:id': 'trackDetail',
            'history': 'history',
            'about': 'about'
		    },
        initialize:function () {
            // Handle back button throughout the application.
            $('.back').on('click', function(event) {
                event.preventDefault();
                window.history.back();
                return false;
            });
            this.firstPage = true;
        },
        changePage:function (page) {
            page.render();
        }
	});
	// Init the app.
	var initialize = function(){
		var app_router = new AppRouter();

        var headerView = new HeaderView();
        headerView.render();

        app_router.on('route:home', function () {
            var homeView = new HomeView();
            app_router.changePage(homeView);
        });

        app_router.on('route:track', function () {
            var trackView = new TrackView();
            app_router.changePage(trackView);
        });

        app_router.on('route:trackDetail', function (id) {
            console.log(id);
            var trackView = new TrackView();
            app_router.changePage(trackView);
        });

        app_router.on('route:history', function () {
            var historyView = new HistoryView();
            app_router.changePage(historyView);
        });

        app_router.on('route:setting', function () {
            var settingView = new SettingView();
            app_router.changePage(settingView);
        });

        app_router.on('route:about', function () {
            var aboutView = new AboutView();
            app_router.changePage(aboutView);
        });

		var footerView = new FooterView();
        footerView.render();

		Backbone.history.start();
        return app_router;
	}
	return { initialize: initialize };
});