define(function (require){
    "use strict";

    var Marionette = require("marionette");

    var Behaviors;

    Behaviors = Marionette.Behavior.extend({
        modelEvents: {
            "valid": "onValid",
            "invalid": "onInvalid"
        },

        errorMessageMapper: function (error) {
            switch (error) {
                case "WRONG_TASK":
                    return "Try to type only letters and numbers";
                default:
                    return error;
            }
        },

        onValid: function () {
            this.$(".error").removeClass("show-error");
        },

        onInvalid: function (model, errors) {
            this.onValid();
            _.each(errors, function (error, name) {
                var field = this.$("." + name + ""),
                    msg, msgBlock;
                if (field.length) {
                    field.addClass("show-error");
                    msg = this.errorMessageMapper(error) || error;
                    msgBlock = this.$(".error." + name);
                    msgBlock.html(msg);
                }
            }, this);
        }
    });

    return Behaviors;
});