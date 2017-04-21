define(function (require) {
    "use strict";

    var Marionette = require("marionette");

    var Router;

    Router = Marionette.AppRouter.extend({
        appRoutes: {
            "": "todoList"
        }
    });

    return Router;
});
