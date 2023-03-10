// Change box1 -> box2
var box1 = document.querySelector('.box1');
box1.onclick = function () {
    box1.style.display = "none";
    box2.style.display = "block";
    box3.style.display = "none";
};

// Change box2 -> box3
var box2 = document.querySelector('.box2');
box2.onclick = function () {
    box1.style.display = "none";
    box2.style.display = "none";
    box3.style.display = "block";
};

// Change box3 -> box1
var box3 = document.querySelector('.box3');
box3.onclick = function () {
    box1.style.display = "block";
    box2.style.display = "none";
    box3.style.display = "none";
};