define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/page/trackTpl.html',
    'model/path.model'
], function ($, _, Backbone, tpl) {
    var Paths = new Pathlist;
    var TrackView = Backbone.View.extend({
        el: $("#content"),
        template: _.template(tpl),
        initialize: function() {
            this.currentPosition();
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
            this.input = this.$("#track_id");
            if (!this.input.val()) return;
            // Start the track.
            Paths.create({id: this.guid(), title: this.input.val(), done: false});
            this.input.val('');
            $('#btn_track_start').parent().hide();
            $('#btn_track_stop').parent().show();
        },
        stopTrack: function() {
            console.log('stop track');
            $('#btn_track_start').parent().show();
            $('#btn_track_stop').parent().hide();
        },
        currentPosition: function() {
            var onSuccess = function(position) {
                alert('Latitude: '          + position.coords.latitude          + '\n' +
                    'Longitude: '         + position.coords.longitude         + '\n' +
                    'Altitude: '          + position.coords.altitude          + '\n' +
                    'Accuracy: '          + position.coords.accuracy          + '\n' +
                    'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
                    'Heading: '           + position.coords.heading           + '\n' +
                    'Speed: '             + position.coords.speed             + '\n' +
                    'Timestamp: '         + position.timestamp                + '\n');
            };
            function onError(error) {
                alert('code: '    + error.code    + '\n' +
                    'message: ' + error.message + '\n');
            }
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        },
        S4: function() {
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        },
        guid: function() {
            return (this.S4()+this.S4()+"-"+this.S4()+"-"+this.S4()+"-"+this.S4()+"-"+this.S4()+this.S4()+this.S4());
        }

    });

    return TrackView;
});