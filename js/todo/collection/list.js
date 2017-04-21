define(function (require) {
    "use strict";

    require("marionette");

    var globalChannel = Backbone.Radio.channel("global"),
        ToDoCollection;

    ToDoCollection = Backbone.Collection.extend({
        comparator: function (a, b) {
            var x, y;

            x = a.get("task").toLowerCase();
            y = b.get("task").toLowerCase();

            if (x == y) return 0;
            return x > y ? 1 : -1;
        },

        initialize: function () {
            this.listenTo(globalChannel, "task:create", this.createModel);
            this.listenTo(globalChannel, "task:update", this.updateModel);
            this.listenTo(globalChannel, "task:remove", this.removeModel);
        },

        fetch: function () {
            typeof localStorage.getItem("todoList") === "string" ? this.set(JSON.parse(localStorage.getItem("todoList"))) : null;
        },

        createModel: function (model) {
            this.add(model);
            localStorage.setItem("todoList", JSON.stringify(this.models));
        },

        removeModel: function (model) {
            this.remove(model);
            localStorage.setItem("todoList", JSON.stringify(this.models));
        },

        updateModel: function () {
            localStorage.setItem("todoList", JSON.stringify(this.models));
        }
    });

    return ToDoCollection;
});