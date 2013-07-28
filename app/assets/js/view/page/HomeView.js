define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/page/homeTpl.html',
    'model/device.model',
], function ($, _, Backbone, tpl) {
    var device = new Device();
    var HomeView = Backbone.View.extend({
        el: $("#content"),
        template: _.template(tpl),
        render: function () {
            this.$el.html(_.template(tpl, device)).trigger( "create" );
            return this;
        }
    });

    return HomeView;
});