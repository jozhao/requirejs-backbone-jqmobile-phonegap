define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/page/trackTpl.html'
], function ($, _, Backbone, tpl) {

    var TrackView = Backbone.View.extend({
        el: $("#content"),
        template: _.template(tpl),
        initialize: function() {
           // this.listenTo(this.model, 'change', this.render);
        },
        render: function () {
            this.$el.html(this.template).trigger('create');
            $('#btn_track_stop').parent().hide();
            return this;
        },
        events: {
            'click #btn_track_start': 'startTrack',
            'click #btn_track_stop': 'stopTrack'
        },
        startTrack: function() {
            console.log('start track');
            $('#btn_track_start').parent().hide();
            $('#btn_track_stop').parent().show();
        },
        stopTrack: function() {
            console.log('stop track');
            $('#btn_track_start').parent().show();
            $('#btn_track_stop').parent().hide();
        }

    });

    return TrackView;
});