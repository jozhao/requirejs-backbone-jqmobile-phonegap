define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/page/trackTpl.html'
], function ($, _, Backbone, tpl) {

    var TrackView = Backbone.View.extend({
        el: $("#content"),
        template: _.template(tpl),
        render: function () {
            this.$el.html(this.template).trigger('create');
            return this;
        }
    });

    return TrackView;
});