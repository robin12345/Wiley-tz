define(function (require) {
    "use strict";

    var Marionette = require("marionette");

    var Router = require("app/router"),
        Controller = require("app/controller");

    var App = new Marionette.Application();

    App.methods = {
        start: function () {
            App.start();
        }
    };

    App.router = new Router({
        controller : new Controller()
    });

    App.on("start", function() {
        Backbone.history.start();

    });

    return App;
});