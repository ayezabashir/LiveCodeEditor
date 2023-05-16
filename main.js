$(".toggleBtn").hover(function () {
    $(this).css("cursor", "pointer");
    $(this).addClass("highlighted");
}, function () {
    $(this).removeClass("highlighted");
});

$(".toggleBtn").click(function () {
    $(this).toggleClass("active");
    $(this).removeClass("highlighted");

    var panelId = $(this).attr("id") + "panel";
    $("#" + panelId).toggleClass("hide");

    var activePanels = 4 - $(".hide").length;
    $(".panel").width($(window).width() / activePanels);

});

$(".panel").height("85vh");
$(".panel").width("50vw");
$("textarea").on("change keyup paste", function () {
    $("iframe")
        .contents()
        .find("html")
        .html("<html><head><style type='text/css'>" + $("#csspanel").val() + "</style><body>" + $("#htmlpanel").val() + "</body></html>");

    document.getElementById("outputpanel").contentWindow.eval($("#jspanel").val());
})