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
});

$(".panel").height("85vh");
$(".panel").width("25vw");
$("textarea").on("change keyup paste", function () {
    $("iframe").contents().find("html").html($("#htmlpanel").val())
})