require.config({
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        'jquery-ui' : '../bower_components/jquery-ui/jquery-ui',
        underscore: '../bower_components/underscore/underscore',
        backbone: '../bower_components/backbone/backbone',
        text: '../bower_components/text/text',
        tpl: '../bower_components/requirejs-tpl/tpl',
        'backbone.babysitter': '../bower_components/backbone.babysitter/lib/backbone.babysitter',
        'backbone.radio': '../bower_components/backbone.radio/build/backbone.radio',
        marionette: '../bower_components/backbone.marionette/lib/backbone.marionette'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ]
        }
    }
});

require(["app/app"], function (App) {
    App.methods.start();
});