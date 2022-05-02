let count = 0;
const btnInc = document.querySelector(".incr");
const btnReset = document.querySelector(".reset");
const btnDec = document.querySelector(".dec");
const value = document.querySelector("#value");

btnInc.addEventListener("click", function () {
    count = count + 1;
    value.textContent = count;
    if (count > 0) {
        value.style.color = "Green"
    } else if ( count < 0 ) {
        value.style.color = "Red"
    }else {
        value.style.color = "black"
    }
})
btnReset.addEventListener("click", function () {
    count = 0;
    value.textContent = count;
    if (count > 0) {
        value.style.color = "Green"
    } else if ( count < 0 ) {
        value.style.color = "Red"
    }else {
        value.style.color = "black"
    }
})
btnDec.addEventListener("click", function () {
    count = count - 1;
    value.textContent = count;
    if (count > 0) {
        value.style.color = "Green"
    } else if ( count < 0 ) {
        value.style.color = "Red"
    }else {
        value.style.color = "black"
    }
})

