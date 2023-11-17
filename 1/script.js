window.onload = function () {
    let images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
        images[i].onmouseover = showAnswer;
    }
};

function showAnswer(event) {
    let image = event.target;
    let name = image.id;
    image.src = `images/${name}.jpg`;
    setTimeout(function () {
        showBlur(image);
    }, 2000, image);
}

function showBlur(image) {
    let name = image.id + "blur.jpg";
    image.src = `images/${name}`;
}