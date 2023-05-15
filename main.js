$(".toggleBtn").hover(function () {
    $(this).css("cursor", "pointer");
    $(this).addClass("active");
}, function () {
    $(this).removeClass("active");
})

$(".panel").height("85vh");
$(".panel").width("25vw");
$("textarea").on("change keyup paste", function () {
    $("iframe").contents().find("html").html($("#htmlpanel").val())
})