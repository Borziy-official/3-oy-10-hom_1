var elH1 = document.querySelector(".h1");
var elH2 = document.querySelector(".h2");
var elForm = document.querySelector(".form");
var elInput = document.querySelector(".input");
var elInput2 = document.querySelector(".input2");
var elboshi = document.querySelector(".btnb")
var elohiri = document.querySelector(".btno")



var area = ["Bugati", "Corvett", "BMW", "Lamborghini", "Mersecedes", "Toyota"]
elH1.textContent = area

elohiri.addEventListener("click", function () {
    area.pop();
    elH1.textContent = area
})
elboshi.addEventListener("click", function () {
    area.shift();
    elH1.textContent = area
})


elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    if (elInput.value != "" && elInput2.value + "a".length == 1) {
        area.unshift(elInput.value);
        elH1.textContent = area
    }
    else if (elInput.value + "a".length == 1 && elInput2.value != "") {
        area.push(elInput.value);
        elH1.textContent = area
    }
    else if (elInput.value != "" && elInput2.value != "") {
        area.unshift(elInput.value);
        area.push(elInput2.value)
        elH1.textContent = area
    }
})
