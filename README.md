# react-native-honeywell-printer-RP4A

react-native link react-native-bluetooth-serial
 
Online ZPL Viewer http://labelary.com/viewer.html


## Installation
1. Install package via npm: `npm i -S react-native-honeywell-printer-RP4A`

2. Link libraries with: `rnpm link` or `react-native link` for React Native >= 0.27

## Commands:
 
  - broad: X axis position relative to page
  - height: Y axis position relative to page
  - positionX: Position relative to the X axis
  - positionY: Position relative to the Y axis
  - code: Bar code
  - size: size the testo
  - word: word, testo

  1. printer.barCode(broad, height, positionX, positionY, code, size);

  2. printer.test(broad, heigth, word, size);

  4. printer.qrCode( positionX, positionY, code);

  5. printer.block( broad, height, positionX, positionY, code, size)

  6. console.log(printer.showCode())

  7. printer.bluetoothShow()
    .then(
      (res) => console.log(printer.printerCode(res))
    )
    .catch((err) => console.log(err.message));

  8. printer.deleteCode();

## Example:
```javascript
import printer from 'react-native-honeywell-printer-rp4a';

  printer.barCode(5, 270, 10, 10, 12, 70);

  printer.test(500, 500, "word", 50);

  printer.test(400, 400, "word", 50);

  printer.qrCode(300, 400, "word");

  printer.block(150, 100, 1000, 10, 1, 1)

  console.log(printer.showCode())

  printer.bluetoothShow()
    .then((res) =>
      console.log(printer.printerCode(res))
      )
    .catch((err) =>
      console.log(err.message)
      );

```