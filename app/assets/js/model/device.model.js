var Device = Backbone.Model.extend ({
    device_status_info: 'No network connection',
    initialize: function() {
        this.onDeviceReady();
    },
    onDeviceReady: function() {
        var connection = this.checkConnection();
        this.device_status_info = connection;
    },
    checkConnection: function() {
        var networkState = navigator.connection.type;
        var states = {};
        states[Connection.UNKNOWN] = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI] = 'WiFi connection';
        states[Connection.CELL_2G] = 'Cell 2G connection';
        states[Connection.CELL_3G] = 'Cell 3G connection';
        states[Connection.CELL_4G] = 'Cell 4G connection';
        states[Connection.NONE] = 'No network connection';
        return states[networkState];
    }
});