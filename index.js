// import BluetoothSerial from 'react-native-bluetooth-serial';
var ZPL = "^XA ";
/**
 * Listen for available events
 * @param  {String} broad Name of event one of connectionSuccess, connectionLost, data, rawData
 * @param  {String} height Name of event one of connectionSuccess, connectionLost, data, rawData
 * @param  {String} word Name of event one of connectionSuccess, connectionLost, data, rawData
 * @param  {String} size Name of event one of connectionSuccess, connectionLost, data, rawData
 */
const test = function (broad, height, word, size) {
    ZPL += " ^CF0," + size + " ^FO" + broad + "," + height + "^FD" + word + "^FS";
    return " ^CF0," + size + " ^FO" + broad + "," + height + "^FD" + word + "^FS";

}
/**
 * Listen for available events
 * @param  {String} broad Name of event one of connectionSuccess, connectionLost, data, rawData
 * @param  {String} height Name of event one of connectionSuccess, connectionLost, data, rawData
 * @param  {String} positionX Name of event one of connectionSuccess, connectionLost, data, rawDat
 * @param  {String} positionY Name of event one of connectionSuccess, connectionLost, data, rawData
 * @param  {String} code Name of event one of connectionSuccess, connectionLost, data, rawData
 * @param  {String} size Name of event one of connectionSuccess, connectionLost, data, rawData
 */
const barCode = function (broad, height, positionX, positionY, code, size) {
    ZPL += "^BY" + broad + ",0," + height + " ^CF0," + size + " ^FO" + positionX + "," + positionY + "^BC^FD" + code + "^FS";
    return "^BY" + broad + ",0," + height + " ^CF0," + size + " ^FO" + positionX + "," + positionY + "^BC^FD" + code + "^FS";
}
/**
 * Listen for available events
 * @param  {String} positionX Name of event one of connectionSuccess, connectionLost, data, rawData
 * @param  {String} positionY Name of event one of connectionSuccess, connectionLost, data, rawData
 * @param  {String} code Name of event one of connectionSuccess, connectionLost, data, rawData
 */
const qrCode = function (positionX, positionY, code) {
    ZPL += " ^FO" + positionX + "," + positionY + " ^BQN,2,10 ^FDMM, " + code + " ^FS";
    return " ^FO" + positionX + "," + positionY + " ^BQN,2,10 ^FDMM, " + code + " ^FS";
}
/**
 * block or line
 * @param  {String} broadLeft Name of event one of connectionSuccess, connectionLost, data, rawData
 * @param  {String} broadRight Name of event one of connectionSuccess, connectionLost, data, rawData
 * @param  {String} height Name of event one of connectionSuccess, connectionLost, data, rawData
 * @param  {String} heightColumn Name of event one of connectionSuccess, connectionLost, data, rawData
 * @param  {String} margin Name of event one of connectionSuccess, connectionLost, data, rawData
 */
const block = function (broadLeft, broadRight, height, heightColumn, margin) {
    ZPL += "^FO" + broadLeft + "," + height + "^GB" + broadRight + "," + heightColumn + "," + margin + "^FS";
    return "^FO" + broadLeft + "," + height + "^GB" + broadRight + "," + heightColumn + "," + margin + "^FS";
}
/**
 * Show code ZPL
 */
const showZPL = function () {
    return ZPL + " ^XZ";
}
/**
 * Delete code ZPL
 */
const deleteZPL = function () {
    ZPL = "^XA ";
    return "delete ZPL ";
}
module.exports = { test, barCode, qrCode, block, showZPL, deleteZPL }