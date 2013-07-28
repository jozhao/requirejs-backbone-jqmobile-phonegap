define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/generic/headerTpl.html'
], function ($, _, Backbone, tpl) {

    var HeaderView = Backbone.View.extend({
        el: $("#header"),
        template: _.template(tpl),
        render: function () {
            this.$el.html(this.template).trigger( "create" );
            return this;
        }
    });

    return HeaderView;
});