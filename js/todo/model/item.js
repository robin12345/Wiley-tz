define(function (require) {
    "use strict";

    var Model;

    Model = Backbone.Model.extend({
        initialize: function () {

        },

        validate: function(attrs, options) {
            return _.reduce(attrs, function (memo, value, key) {
                var msg = this.validationMethods[key] ? this.validationMethods[key].call(this, value, options) : null;
                if (msg) {
                    memo = memo || {};
                    memo[key] = msg;
                }
                return memo;
            }, void 0, this);
        },

        validationMethods: {
            task: function (value) {
                var val = $.trim(value),
                    pattern = /^[а-яА-Яa-zA-Z0-9.!?_ ]+$/;
                if (!val || val === "" || !pattern.test(val)) {
                    return "WRONG_TASK";
                }
                return null;
            }
        }
    });

    return Model;
});