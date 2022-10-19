let number = 0
let cout = 0
input.onButtonPressed(Button.A, function () {
    number += 1
    cout += 1
    basic.showNumber(number)
})
input.onButtonPressed(Button.AB, function () {
    while (number > 0) {
        number += -1
        basic.showNumber(number)
    }
    while (number == 0) {
        basic.showNumber(cout)
    }
    while (cout > 0) {
        cout += -1
        basic.showNumber(cout)
    }
})
input.onButtonPressed(Button.B, function () {
    number += 10
    basic.showNumber(number)
})
basic.forever(function () {
	
})
