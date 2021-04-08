function show(button) {
  if (button == "section1") {
    document.getElementById(button).style.display = "block";
    document.getElementById("section2").style.display = "none";
    document.getElementById("section3").style.display = "none";
    document.getElementById("section4").style.display = "none";
  } else if (button == "section2") {
    document.getElementById(button).style.display = "block";
    document.getElementById("section1").style.display = "none";
    document.getElementById("section3").style.display = "none";
    document.getElementById("section4").style.display = "none";
  } else if (button == "section3") {
    document.getElementById(button).style.display = "block";
    document.getElementById("section1").style.display = "none";
    document.getElementById("section2").style.display = "none";
    document.getElementById("section4").style.display = "none";
  } else if (button == "section4") {
    document.getElementById(button).style.display = "block";
    document.getElementById("section1").style.display = "none";
    document.getElementById("section2").style.display = "none";
    document.getElementById("section3").style.display = "none";
  } else {
    document.getElementById(button).style.display = "block";
  }
}
