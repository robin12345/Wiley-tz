define(function (require) {
    "use strict";

    var template = require("text!../templates/list.tpl"),
        Collection = require("../collection/list"),
        Item = require("./item"),
        Marionette = require("marionette");

    var CollectionList;

    CollectionList = Marionette.CollectionView.extend({
        collection: new Collection(),
        template: _.template(template),

        childView: Item,
        childViewContainer: ".todo-list",

        initialize: function () {
            this.collection.fetch();
        }
    });

    return CollectionList;
});