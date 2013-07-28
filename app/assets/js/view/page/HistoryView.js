define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/page/historyTpl.html'
], function ($, _, Backbone, tpl) {

    var HistoryView = Backbone.View.extend({
        el: $("#content"),
        template: _.template(tpl),
        render: function () {
            this.$el.html(this.template).trigger('create');
            return this;
        }
    });

    return HistoryView;
});