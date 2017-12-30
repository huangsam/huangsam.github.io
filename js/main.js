const brand_colors = {
    "github": "#24292e",
    "facebook": "#3b5998",
    "linkedin": "#0077b5",
    "wordpress": "#21759b"
}

$(".theme").mouseover(changeTheme)
$(".theme").mouseleave(originalTheme)

function changeTheme() {
    let brand = $(this).attr("id")
    let color = brand_colors[brand]

    $("body").css("background-color", color)
    $("p, h1").css("color", "white")
    $("a").css("color", "white")
    $("footer span").css("color", "white")
    $("code").css("color", "white")
}

function originalTheme() {
    $("body").css("background-color", "white")
    $("p, h1").css("color", "black")
    $("a").css("color", "#0275d8")
    $("footer span").css("color", "black")
    $("code").css("color", "black")
}
