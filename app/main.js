/* Data structures */

const serviceMeta = {
    "github": {
        "color": "#24292e"
    },
    "facebook": {
        "color": "#3b5998"
    },
    "linkedin": {
        "color": "#0077b5"
    },
    "wordpress": {
        "color": "#21759b"
    }
}

/* Helper routines */

function getServiceUrl(service) {
    return "http://" + service + ".sambyte.net"
}

/* Event handlers */

function changeTheme(service) {
    let color = serviceMeta[service]["color"]

    $("body").css("background-color", color)
    $("p, h1").css("color", "white")
    $("a").css("color", "white")
    $("footer span").css("color", "white")
    $("pre").css("border", ".3em solid white")
}

function originalTheme() {
    $("body").css("background-color", "white")
    $("p, h1").css("color", "black")
    $("a").css("color", "#0275d8")
    $("footer span").css("color", "black")
    $("pre").css("border", ".3em solid hsl(0, 0%, 33%)")
}

/* Event listeners */

$("#service").change(function () {
    let service = $(this).val()
    if (service !== "default") {
        changeTheme(service)
    } else {
        originalTheme()
    }
})

$("#goto").click(function (e) {
    e.preventDefault()
    let service = $("#service").val()
    if (service !== "default") {
        window.location.href = getServiceUrl(service)
    }
})

$(document).ready(function () {
    let currentYear = new Date().getFullYear()
    $("#current-year").text(currentYear)
})
