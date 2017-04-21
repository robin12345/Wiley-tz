define(function (require) {
    "use strict";

    var templates = {
            item: require("text!../templates/item-show.tpl"),
            edit: require("text!../templates/item-edit.tpl")
        },
        Marionette = require("marionette");

    var globalChannel = Backbone.Radio.channel("global"),
        ToDoItem;

    ToDoItem = Marionette.View.extend({
        className: "row",
        getTemplate: function () {
            if (this.model.get("edit")) {
                return _.template(templates.edit)
            } else {
                return _.template(templates.item)
            }
        },

        initialize: function () {

        },

        events: {
            "click .close": "deleteTask",
            "click .completed": "toggleDone",
            "click .update": "toggleState",
            "click input[type=submit]": "submitModel"
        },

        deleteTask: function () {
            globalChannel.trigger("task:remove", this.model);
        },

        toggleState: function (e) {
            $(e.currentTarget).toggleClass("edit");
            this.model.set("edit", $(e.currentTarget).hasClass("edit"));
            this.render();
        },

        toggleDone: function (e) {
            $(e.currentTarget).toggleClass("true");
            this.model.set("complete", $(e.currentTarget).hasClass("true"));
            globalChannel.trigger("task:update");
        },

        submitModel: function () {
            var input = this.$("input[name=edit]"),
                value = $.trim(input.val()),
                pattern = /^[а-яА-Яa-zA-Z0-9.!?_ ]+$/;

            if (value === "" || !pattern.test(value)) {
                input.css("border-bottom","1px solid red");
            } else {
                this.model.set("task", value);
                this.model.unset("edit");
                globalChannel.trigger("task:update");

                this.render();
            }
        }
    });

    return ToDoItem;
});