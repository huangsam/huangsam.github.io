brand_colors = {
    "github": "#24292e",
    "facebook": "#3b5998",
    "linkedin": "#0077b5",
    "wordpress": "#21759b"
}

$(".theme").mouseover(changeTheme);
$(".theme").mouseleave(originalTheme);

function changeTheme() {
    brand = $(this).attr("id");
    color = brand_colors[brand];

    $("body").css("background-color", color);
    $(".col p, h1").css("color", "white");
    $(".col a").css("color", "white");
    $("footer").css("background-color", "white");
    $("footer span").css("color", color);
}

function originalTheme() {
    $("body").css("background-color", "white");
    $(".col p, h1").css("color", "black");
    $(".col a").css("color", "#0275d8");
    $("footer").css("background-color", "#f5f5f5");
    $("footer span").css("color", "black");
}
