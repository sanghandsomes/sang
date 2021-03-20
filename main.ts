input.onButtonPressed(Button.A, function () {
    done = 0
    counter = 0
    loop = 0
    while (done > 1 && loop < 10) {
        basic.showNumber(counter)
        basic.pause(randint(10, 50))
        counter = randint(1, 6)
        loop += 1
    }
    basic.clearScreen()
    if (value == roll) {
        basic.showString("v")
    } else {
        basic.showString("x")
    }
    basic.pause(2000)
    basic.clearScreen()
    done = 1
})
input.onButtonPressed(Button.B, function () {
    value = counter
    done = 1
})
input.onGesture(Gesture.Shake, function () {
    if (done == 1) {
        basic.clearScreen()
        roll = randint(1, 6)
        basic.showNumber(roll)
        basic.pause(2000)
        basic.clearScreen()
    }
})
let roll = 0
let loop = 0
let counter = 0
let value = 0
let done = 0
done = 1
value = 0
basic.showString("Start")
basic.clearScreen()
