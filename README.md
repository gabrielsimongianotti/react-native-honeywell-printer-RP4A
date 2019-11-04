# react-native-honeywell-printer-RP4A

react-native link react-native-bluetooth-serial
 
Online ZPL Viewer http://labelary.com/viewer.html

Examples:

  printer.barCode(5, 270, 10, 10, 12, 70);
  printer.test(500, 500, "text", 50);
  printer.test(400, 400, "seila", 50);
  printer.qrCode(100,100, "seila");
  printer.block(100,100,1000,10,1,1)
  console.log(printer.showCode())
  printer.bluetoothShow()
    .then(
      (res) => console.log(printer.printerCode(res))
    )
    .catch((err) => console.log(err.message));
    printer.deleteCode();
