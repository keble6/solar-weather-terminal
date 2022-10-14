// Get data from logger microbit, relay to terminal
radio.onReceivedString(function (receivedString) {
    serial.writeLine(receivedString)
})
// Get command from terminal, relay to logger microbit
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    serialString = serial.readUntil(serial.delimiters(Delimiters.NewLine))
    radio.sendString(serialString)
})
let serialString = ""
radio.setGroup(1)
radio.setTransmitPower(7)
let outString = ""
