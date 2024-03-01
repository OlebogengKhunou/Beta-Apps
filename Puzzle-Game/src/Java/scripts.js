document.addEventListener('DOMContentLoaded', function () {
    let container = document.getElementById('drag');
    let container2 = document.getElementById('board')

    for (let i = 1; i <= 36; i++) {
        let div = document.createElement("div");
        div.className = "dragBox";

        let innerDiv = document.createElement("div");
        innerDiv.className = "images";
        innerDiv.draggable = true;
        innerDiv.id = "block" + i;
        innerDiv.style.setProperty("--img", "url(src/css/images/" + i + ".jpg)");
        innerDiv.setAttribute("ondragstart", "drag(event)");

        div.appendChild(innerDiv);
        container.appendChild(div);

        let divDrop = document.createElement("div");
        divDrop.className = "dropBox";
        divDrop.setAttribute("ondrop", "drop(event)");
        divDrop.setAttribute("ondragover", "allowDrop(event)");
        container2.appendChild(divDrop);
    }
});

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("Text")
    event.target.appendChild(document.getElementById(data))
}

onload = function () {
    let parent = document.getElementById('drag');
    let frag = document.createDocumentFragment();
    while (parent.children.length) {
        frag.appendChild(parent.children[Math.floor(Math.random() * parent.children.length)])
    }
    parent.appendChild(frag);

}