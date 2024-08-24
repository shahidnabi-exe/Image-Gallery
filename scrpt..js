let fullImgBox = document.getElementById("fullImgBox");
let fullImg = document.getElementById("fullImg");
let currentIndex = 0;

const images = [
    "Images/courtois.jpeg",
    "Images/ramos.jpeg",
    "Images/vvd.jpeg",
    "Images/marcelo.jpeg",
    "Images/kdb.jpeg",
    "Images/Zizou.jpeg",
    "Images/Modric.jpeg",
    "Images/ozil.jpeg",
    "Images/messi.jpeg",
    "Images/CR7.jpeg",
    "Images/neymar.jpeg"
];

function openFullImg(pic, index) {
    currentIndex = index;
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}

function closeFullImg() {
    fullImgBox.style.display = "none";
}

function changeImage(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    fullImg.src = images[currentIndex];
}
