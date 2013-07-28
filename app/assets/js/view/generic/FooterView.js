define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/generic/footerTpl.html'
], function ($, _, Backbone, tpl) {

    var FooterView = Backbone.View.extend({
        el: $("#footer"),
        template: _.template(tpl),
        render: function () {
            this.$el.html(this.template).trigger( "create" );
            return this;
        }
    });

    return FooterView;
});