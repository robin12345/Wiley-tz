define(function (require) {
    "use strict";

    require("marionette");

    Backbone.Model.prototype._validate = function (attrs, options) {
        var error;
        if (!options.validate || !this.validate) return true;
        attrs = _.extend({}, this.attributes, attrs);
        error = this.validationError = this.validate(attrs, options) || null;
        if (!error) {
            this.trigger("valid", this, options);
            return true;
        }
        this.trigger("invalid", this, error, _.extend(options, {validationError: error}));
        return false;
    };

    return Backbone;
});