import BluetoothSerial from 'react-native-bluetooth-serial';

var ZPL = "^XA ";
/**
 * Generate text
 * @param  {int} broad X axis position relative to page
 * @param  {int} height Y axis position relative to page
 * @param  {String} word word, text
 * @param  {int} size size the text
 */
const text = function (broad, height, word, size) {
    ZPL += " ^CF0," + size + " ^FO" + broad + "," + height + "^FD" + word + "^FS";
    return " ^CF0," + size + " ^FO" + broad + "," + height + "^FD" + word + "^FS";

}
/**
 * size the tag 
 * @param  {int} size size the tag
 */
const tagSize = function (size) {
    ZPL = "^XA  ^LL" + size;
    return "^XA  ^LL" + size;
}
/**
 * Generate barcode
 * @param  {int} positionX Position relative to the X axis
 * @param  {int} positionY Position relative to the Y axis
 * @param  {int} code ZPL code
 */
const barCode = function (positionX, positionY, code) {
    ZPL += " ^FO" + positionY + "," + positionX + "^BC^FD" + code + "^FS";
    return " ^FO" + positionY + "," + positionX + "^BC^FD" + code + "^FS";  //"^BY" + positionY + ",0," +positionX + " ^CF0," + size + " ^FO" + height + "," + broad + "^BC^FD" + code + "^FS";
}
/**
 * Generate qrcode
 * @param  {int} broad X axis position relative to page
 * @param  {int} height Y axis position relative to page
 * @param  {String} code ZPL code
 */
const qrCode = function (broad, height, code) {
    ZPL += " ^FO" + broad + "," + height + " ^BQN,2,10 ^FDMM, " + code + " ^FS";
    return " ^FO" + broad + "," + height + " ^BQN,2,10 ^FDMM, " + code + " ^FS";
}
/**
 * Block or line
 * @param  {int} broadLeft Name of event one of connectionSuccess, connectionLost, data, rawData
 * @param  {int} broadRight Name of event one of connectionSuccess, connectionLost, data, rawData
 * @param  {int} height Name of event one of connectionSuccess, connectionLost, data, rawData
 * @param  {int} heightColumn Name of event one of connectionSuccess, connectionLost, data, rawData
 * @param  {int} margin Name of event one of connectionSuccess, connectionLost, data, rawData
 */
const block = function (broadLeft, broadRight, height, heightColumn, margin) {
    ZPL += "^FO" + broadLeft + "," + height + "^GB" + broadRight + "," + heightColumn + "," + margin + "^FS";
    return "^FO" + broadLeft + "," + height + "^GB" + broadRight + "," + heightColumn + "," + margin + "^FS";
}
/**
 * Show code ZPL
 */
const showCode = function () {
    return ZPL + " ^XZ";
}
/**
 * Delete code ZPL
 */
const deleteCode = function () {
    ZPL = "^XA ";
    return "delete ZPL ";
}
/**
 * Add code ZPL
 */
const addCode = function (codeZPL) {
    ZPL += codeZPL;
    return ZPL;
}
/**
 * printerCode
 */
const printerCode = async function () {
    const devices = await BluetoothSerial.list();
    const device = devices.find(device => device.name);
    await BluetoothSerial.connect(device.id)
        .then((res) => BluetoothSerial.write(ZPL + " ^XZ")).catch(e => { printerCode() })
}
/**
 * bluetoothShow
 */
const bluetoothShow = async function () {
    const devices = await BluetoothSerial.list();
    const device = await devices.find(device => device.name);
    return device;
}
module.exports = { tagSize, text, barCode, qrCode, block, showCode, deleteCode, addCode, printerCode, bluetoothShow }