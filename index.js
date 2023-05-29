let circle = document.querySelector('.circle');

const letter = "123456789abcdef";

function randomcolor() {
    let hash = "#";
    for (let index = 0; index < 6; index++) {
        hash += letter[Math.floor(Math.random() * letter.length)];
    };
    return hash;
}

function color() {
    circle.style.backgroundColor = randomcolor();
};
color();


let check = 0;
circle.addEventListener('click', () => {
    check++;
    if (check >= 5) {
        circle.style.display = "none";
    }
})