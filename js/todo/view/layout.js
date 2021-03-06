define(function (require) {
    "use strict";

    var template = require("text!../templates/layout.tpl"),
        FormModel = require("../model/item"),
        ListView = require("./list"),
        Validation = require("../../app/behaviors/validation"),
        Marionette = require("marionette");

    var globalChannel = Backbone.Radio.channel("global"),
        MainLayout;

    MainLayout = Marionette.View.extend({
        el: "#main-region",
        template: _.template(template),
        behaviors: {
            validation: {
                behaviorClass: Validation
            }
        },

        regions: {
            listRegion: '#region-list'
        },

        initialize: function () {
            this.model = new FormModel();
            this.render();
            this.triggerMethod('show');
        },

        events: {
            "submit .form": "submitForm"
        },

        onShow: function () {
            this.getRegion('listRegion').show(new ListView);
        },

        submitForm: function (e) {
            var input = this.$("input[name=task]");

            e.preventDefault();

            this.model.set("task", input.val());
            this.model.isValid();

            if (!_.isEmpty(this.model.validationError)) {
                return null;
            }

            this.addTask();
        },

        addTask: function () {
            var input = this.$("input[name=task]");

            globalChannel.trigger("task:create", {
                task: input.val(),
                complete: false
            });
            input.val("");
        }
    });

    return MainLayout;
});