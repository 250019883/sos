input.onButtonPressed(Button.A, function () {
    radio.setTransmitPower(功率 + 1)
    功率 = 功率 + 1
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("sos")
})
input.onButtonPressed(Button.B, function () {
    radio.setTransmitPower(功率 - 1)
    功率 = 功率 - 1
})
let 功率 = 0
功率 = 1
radio.setGroup(255)
radio.setFrequencyBand(83)
