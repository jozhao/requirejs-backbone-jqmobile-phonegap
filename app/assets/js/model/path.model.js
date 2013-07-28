var Path = Backbone.Model.extend ({
    id: '',
    done: false
});

var Pathlist = Backbone.Collection.extend({
    model: Path,
    localStorage: new Backbone.LocalStorage("autologbook-paths")
});