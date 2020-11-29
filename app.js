console.log("RPG engine loaded")

function d6() {

    document.getElementById("valued6").innerHTML =
        (Math.floor(Math.random() * 6) + 1) + "<br>" + document.getElementById("valued6").innerHTML;
}

function d6d6() {
    document.getElementById("valued6d6").innerHTML =
        (Math.floor(Math.random() * 12) + 1) + "<br>" + document.getElementById("valued6d6").innerHTML;
}

function d20() {
    document.getElementById("valued20").innerHTML =
        (Math.floor(Math.random() * 20) + 1) + "<br>" + document.getElementById("valued20").innerHTML;
}

function roll(element) {
    var number = element.id;
    number = parseInt(number.slice(1))
    console.log(number)
    document.getElementById("valued" + number).innerHTML =
        (Math.floor(Math.random() * number) + 1) + "<br>" + document.getElementById("valued" + number).innerHTML;
}