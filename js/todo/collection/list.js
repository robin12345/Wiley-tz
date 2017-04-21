define(function (require) {
    "use strict";

    require("marionette");

    var globalChannel = Backbone.Radio.channel("global"),
        ToDoCollection;

    ToDoCollection = Backbone.Collection.extend({
        initialize: function () {
            this.listenTo(globalChannel, "task:create", this.createModel);
        },

        fetch: function () {
            typeof localStorage.getItem("todoList") === "string" ? this.set(JSON.parse(localStorage.getItem("todoList"))) : null;
        },

        createModel: function (model) {
            this.add(model);
            localStorage.setItem("todoList", JSON.stringify(this.models));
        }
    });

    return ToDoCollection;
});