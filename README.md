# react-native-honeywell-printer-RP4A

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/0279409f9694473b9251922d64a2e268)](https://app.codacy.com/manual/gabrielsimongianotti/react-native-honeywell-printer-RP4A?utm_source=github.com&utm_medium=referral&utm_content=gabrielsimongianotti/react-native-honeywell-printer-RP4A&utm_campaign=Badge_Grade_Settings)

react-native link react-native-bluetooth-serial
 
Online ZPL Viewer http://labelary.com/viewer.html


## Installation
1. Install package via npm: `npm i react-native-honeywell-printer-rp4a`

2. Link libraries with: `rnpm link` or `react-native link` for React Native >= 0.27

## Commands:
 
  - broad: X axis position relative to page
  - height: Y axis position relative to page
  - positionX: Position relative to the X axis
  - positionY: Position relative to the Y axis
  - code: ZPL code
  - size: size the text
  - sizeTag: size of tag
  - word: word, text


  1. printer.barCode( positionX, positionY, code);
  - generate barcode ZPL code


  2. printer.text(broad, heigth, word, size);
  - generate text ZPL code


  4. printer.qrCode( positionX, positionY, code);
  - generate qrCode ZPL code


  5. printer.addCode(ZPL code pure)
  - generate add ZPL code


  6. console.log(printer.showCode())
  - show the genereated ZPL code
  - connect with bluetooth


  7. printer.bluetoothShow()
    .then(
      (res) => console.log(printer.printerCode(res)) // send code for printer
    )
    .catch((err) => console.log(err.message));


  8. printer.deleteCode();

  9. printer.tagSize(sizeTag);



## Example:
```javascript
import printer from 'react-native-honeywell-printer-rp4a';

  printer.tagSize( 300);

  printer.barCode( 10, 12, 70);

  printer.text(500, 500, "word", 50);

  printer.qrCode(300, 400, "word");

  printer.addCode("^CFA,30 ^FO50,300^FDJohn Doe^FS");

  console.log(printer.showCode())

  printer.bluetoothShow().then((res) => console.log(res))
  
  printer.printerCode()

```
