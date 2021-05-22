var source1_navigation = document.getElementsByClassName("source1-nav");
var source2_navigation = document.getElementsByClassName("source2-nav");
var source3_navigation = document.getElementsByClassName("source3-nav");
var source4_navigation = document.getElementsByClassName("source4-nav");

var source1_label = document.getElementById("source1_label");
var source2_label = document.getElementById("source2_label");
var source3_label = document.getElementById("source3_label");
var source4_label = document.getElementById("source4_label");

var last_label = null;
var last_article_name = null;

function resetLastVisitedLabel() {
    if (last_label != null) {
        last_label.style.animation = "none";
        last_label.style.color = "#acd1af";
        last_label.style.fontWeight = "normal";
    }
}

function makeChangeOn(currentLabel) {
    currentLabel.style.animation = "colorchange 1s infinite";
    currentLabel.style.color = "#9dff80";
    currentLabel.style.fontWeight = "bold";
    last_label = currentLabel;
}

for (var i = 0; i < source1_navigation.length; i++) {
    let current = source1_navigation[i];
    current.addEventListener("click", function() {
        makeChangeOn(source1_label);
        last_article_name = current.classList.item(1);
    });
}

for (var i = 0; i < source2_navigation.length; i++) {
    let current = source2_navigation[i];
    current.addEventListener("click", function() {
        makeChangeOn(source2_label);
        last_article_name = current.classList.item(1);
    });
}

for (var i = 0; i < source3_navigation.length; i++) {
    let current = source3_navigation[i];
    current.addEventListener("click", function() {
        makeChangeOn(source3_label);
        last_article_name = current.classList.item(1);
    });
}

for (var i = 0; i < source4_navigation.length; i++) {
    let current = source4_navigation[i];
    current.addEventListener("click", function() {
        makeChangeOn(source4_label);
        last_article_name = current.classList.item(1);
    });
}

var button_nav = document.getElementById("button_nav");
button_nav.addEventListener("click", function() {
    if (last_article_name == null) {
        window.location = "#header_img";
    } else {
        window.scrollTo(0, document.querySelector("." + last_article_name).offsetTop);
    }
    resetLastVisitedLabel();
    last_article_name = null;
});