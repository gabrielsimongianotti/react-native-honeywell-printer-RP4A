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
const printerCode = async function (int=0) {
    const devices = await BluetoothSerial.list();
    const deviceSelect = await devices.find(device => device.name);

    try{
      await BluetoothSerial.connect(deviceSelect.id);
      const connect = await printConnection()
      console.log("connect", connect);
      if(connect){
        const response = await print();
        console.log("k",response)
        if (response) return true;

        return false;
      } else{
        return false;
      }
    }
    catch{
        
      if(int<1){
        return printerCode(int+1)
      }
        
      return true;
    }
}
/**
 * bluetoothShow
 */
const bluetoothShow = async function () {
    const devices = await BluetoothSerial.list();
   
    const deviceSelect = await devices.find(device => device.name);
   
    return deviceSelect;
}


const print = () => {
 
    return new Promise((resolve, reject) => {
        BluetoothSerial
        .write(ZPL + " ^XZ")
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
};

const printConnection = () => {
 
  return new Promise((resolve, reject) => {
    BluetoothSerial
    .isConnected()
    .then(response => resolve(response))
    .catch(error => reject(error));
  });
};

module.exports = { tagSize, text, barCode, qrCode, block, showCode, deleteCode, addCode, printerCode, bluetoothShow }