let imgElement = document.getElementById("puppyImage");
let likeElement = document.getElementById("likeIcon");
let ButtonElement = document.getElementById("likeButton");
let fact = true;

function onClickLikeButton() {
    if (fact === true) {
        imgElement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        likeElement.style.color = "#0967d2";
        ButtonElement.style.backgroundColor = "#0967d2";
        ButtonElement.style.color = "#ffffff";
        fact = false;
    } else {
        imgElement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        likeElement.style.color = "#cbd2d9";
        ButtonElement.style.backgroundColor = "#cbd2d9";
        ButtonElement.style.color = "#9aa5b1";
        fact = true;
    }
}