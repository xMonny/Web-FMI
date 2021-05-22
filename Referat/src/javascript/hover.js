var articles = document.getElementsByClassName("logo_container");
var i;

for (i = 0; i < articles.length; i++) {
    articles[i].addEventListener("mouseover", function() {
        var logo = this.getElementsByClassName("experiment_logo")[0];
        var launch_btn = this.getElementsByClassName("launch_btn")[0];
        var preview_btn = this.getElementsByClassName("preview_btn")[0];
        var example_name = this.getElementsByClassName("example_name")[0];
        logo.style.opacity = ".4";
        launch_btn.style.display = "inline-block";
        preview_btn.style.display = "inline-block";
        example_name.style.display = "inline-block";
    });

    articles[i].addEventListener("mouseout", function() {
        var logo = this.getElementsByClassName("experiment_logo")[0];
        var launch_btn = this.getElementsByClassName("launch_btn")[0];
        var preview_btn = this.getElementsByClassName("preview_btn")[0];
        var example_name = this.getElementsByClassName("example_name")[0];
        logo.style.opacity = "1";
        launch_btn.style.display = "none";
        preview_btn.style.display = "none";
        example_name.style.display = "none";
    });
}