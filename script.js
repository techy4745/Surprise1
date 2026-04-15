document.getElementById("openBtn").onclick = function() {
    document.getElementById("surprise").classList.remove("hidden");

    // blur remove
    document.querySelector(".overlay").style.backdropFilter = "none";
    document.querySelector(".overlay").style.background = "transparent";

    // button hide
    this.style.display = "none";
}
