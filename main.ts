input.onButtonPressed(Button.A, function () {
    led.plot(0, 0)
    led.plot(1, 0)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(0, 0)
    led.unplot(1, 0)
})
