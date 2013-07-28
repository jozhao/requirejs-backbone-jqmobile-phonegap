define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/page/settingTpl.html'
], function ($, _, Backbone, tpl) {

    var SettingView = Backbone.View.extend({
        el: $("#content"),
        template: _.template(tpl),
        render: function () {
            this.$el.html(this.template).trigger('create');
            return this;
        },
        events: {
            'click #btn_setting_clear_storage': 'clearStorage'
        },
        clearStorage: function() {
            if (navigator.userAgent.match(/(iPad|iPhone|Android)/)) {
                navigator.notification.confirm(
                    'All the tracks saved in local storage will be destroyed!',
                    this.doConfirm,
                    'Clear the local storage.',
                    ['Yes','No']
                );
            } else {
                alert('All the tracks saved in local storage have been destroyed!');
                window.localStorage.clear();
            }
        },
        doConfirm: function(buttonIndex) {
            if (buttonIndex == 1) {
                window.localStorage.clear();
            } else {
                return;
            }
        }
    });

    return SettingView;
});