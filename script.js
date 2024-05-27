let topButton = document.getElementById("topBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
        topButton.style.opacity = "1";
    } else {
        topButton.style.display = "none";
        topButton.style.opacity = "0";
    }
};

topButton.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};