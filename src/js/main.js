require.config({
    baseUrl: "/js/libs",
    paths: {
        "jquery": "./jquery.min",
        "flexible": "./flexible",
        "bscroll": "./bscroll",
        "handlebars": "./handlebars-v4.0.11"
    }
})

require(["index"])