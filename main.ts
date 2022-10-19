// Get data from logger microbit, relay to terminal
radio.onReceivedString(function (receivedString) {
    lastChar = receivedString.charAt(receivedString.length - 1)
    // Keep dateTime string on the same terminal line as readings
    if (lastChar.compare(",") == 0) {
        serial.writeString(receivedString)
    } else {
        serial.writeLine(receivedString)
    }
})
// Get command from terminal, relay to logger microbit
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    serialString = serial.readUntil(serial.delimiters(Delimiters.NewLine))
    radio.sendString(serialString)
})
let serialString = ""
let lastChar = ""
radio.setGroup(1)
radio.setTransmitPower(7)
let outString = ""
