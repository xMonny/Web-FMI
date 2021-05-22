var coll = document.getElementsByClassName("choice_btn");
var i;
            
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        var arrow_img = this.getElementsByClassName("arrow")[0];
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            arrow_img.src = "./img/down_arrow.png";
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            arrow_img.src = "./img/up_arrow.png";
        }
    });
}