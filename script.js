const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const toolbarBtns = ["-", "+"];



function createButtons() {
    let keypad = document.getElementById("keypad");

    for (let btn of buttons) {
        let button = document.createElement('div');
        button.classList.add("key-button");

        button.setAttribute('id', btn);
        button.textContent = btn;

        button.onclick = function () {
            onClick(btn)
        }

        //push in parent container
        keypad.appendChild(button)
    }
}


function onClick(number) {

}

createButtons();