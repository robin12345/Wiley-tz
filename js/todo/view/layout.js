define(function (require) {
    "use strict";

    var template = require("text!../templates/layout.tpl"),
        Marionette = require("marionette");

    var MainLayout;

    MainLayout = Marionette.View.extend({
        el: "#main-region",
        template: _.template(template),

        regions: {
            listRegion: '#region-list'
        },

        initialize: function () {

        },

        events: {

        }
    });

    return MainLayout;
});