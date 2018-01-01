const serviceColors = {
    "github": "#24292e",
    "facebook": "#3b5998",
    "linkedin": "#0077b5",
    "wordpress": "#21759b"
}

const serviceUrls = {
    "github": "https://github.com/huangsam",
    "facebook": "https://www.facebook.com/samuel.c.huang",
    "linkedin": "https://www.linkedin.com/in/sambyte",
    "wordpress": "https://sambyte.wordpress.com"
}

$("#service").change(function () {
    let service = $(this).val()
    if (service === "default") {
        originalTheme()
    } else {
        changeTheme(service)
    }
})

$("#goto").click(function (e) {
    e.preventDefault()
    let service = $("#service").val()
    if (service !== "default") {
        window.location.href = serviceUrls[service]
    }
})

function changeTheme(service) {
    let color = serviceColors[service]

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

$(document).ready(function () {
    let currentYear = new Date().getFullYear()
    $("#current-year").text(currentYear)
})
