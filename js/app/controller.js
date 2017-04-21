define(function (require) {
    "use strict";

    var Marionette = require("marionette");

    var Controller;

    Controller = Marionette.AppRouter.extend({
        todoList :  function () {
            require(["../todo/view/layout"], function (MainLayout) {
                new MainLayout();
            });
        }
    });

    return Controller;
});
