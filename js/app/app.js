define(function (require) {
    "use strict";

    var Marionette = require("marionette");

    var App = new Marionette.Application();

    App.methods = {
        start: function () {
            App.start();
        }
    };

    App.on("start", function() {
        Backbone.history.start();

    });

    return App;
});