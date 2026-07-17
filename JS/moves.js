const box = document.getElementById("box");

let x = 0;
let y = 0;

// Move functions
function moveright() {
    x += 20;
    box.style.left = x + "px";
}

function moveleft() {
    x -= 20;
    box.style.left = x + "px";
}

function moveup() {
    y -= 20;
    box.style.top = y + "px";
}

function movedown() {
    y += 20;
    box.style.top = y + "px";
}

// Keyboard movement
document.addEventListener("keydown", (event) => {

    if (event.key === "ArrowUp") {
        moveup();
    }

    if (event.key === "ArrowDown") {
        movedown();
    }

    if (event.key === "ArrowLeft") {
        moveleft();
    }

    if (event.key === "ArrowRight") {
        moveright();
    }

});

// Single click - change color
box.addEventListener("click", () => {
    box.style.backgroundColor = "lightblue";
});

// Double click - change another color
box.addEventListener("dblclick", () => {
    box.style.backgroundColor = "lightgreen";
});