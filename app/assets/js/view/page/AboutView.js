define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/page/aboutTpl.html'
], function ($, _, Backbone, tpl) {

    var AboutView = Backbone.View.extend({
        el: $("#content"),
        template: _.template(tpl),
        render: function () {
            this.$el.html(this.template).trigger('create');
            return this;
        }
    });

    return AboutView;
});