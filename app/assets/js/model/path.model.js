var Path = Backbone.Model.extend ({
    defaults: function() {
        return {
            id: '0',
            title: 'Unkown path...',
            done: false
        };
    },
    toggle: function() {
        this.save({done: !this.get("done")});
    }
});

var Pathlist = Backbone.Collection.extend({
    model: Path,
    localStorage: new Backbone.LocalStorage("autologbook-paths"),
    comparator: 'id'
});