define(["jquery", "handlebars", "bscroll"], function($, handlebars, bscroll) {
    $.ajax({
        url: "/api/navList",
        dataType: "json",
        success: function(rs) {
            var soucre = $("#navList").html();
            var template = handlebars.compile(soucre);
            var html = template(rs.data);
            $("nav").html(html);
            new bscroll(".wrap", {
                scrollX: true
            })
        }
    });
});