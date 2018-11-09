require("./services");

/** Event handlers */

changeTheme = (service) => {
  let color = getServiceColor(service);

  $("body").css("background-color", color);
  $("p, h1").css("color", "white");
  $("a").css("color", "white");
  $("footer span").css("color", "white");
  $("pre").css("border", ".3em solid white");
}

originalTheme = () => {
  $("body").css("background-color", "white");
  $("p, h1").css("color", "black");
  $("a").css("color", "#0275d8");
  $("footer span").css("color", "black");
  $("pre").css("border", ".3em solid hsl(0, 0%, 33%)");
}

/** Event listeners */

$("#service").change((e) => {
  let service = e.currentTarget.value;
  if (service !== "default") {
    changeTheme(service);
  } else {
    originalTheme();
  }
});

$("#goto").click((e) => {
  e.preventDefault();
  let service = $("select#service").val();
  if (service !== "default") {
    window.location.href = getServiceUrl(service);
  } else {
    alert("Please select a valid service from the dropdown.");
  }
});

$(document).ready(() => {
  let currentYear = new Date().getFullYear();
  $("#current-year").text(currentYear);
});
