
function display(sectionId) {
    document.querySelectorAll("body > div").forEach(div => {
        div.style.display = "none";
    });
    document.getElementById(sectionId).style.display = "block";
}
