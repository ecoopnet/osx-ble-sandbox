var Bleacon = require('bleacon');

var uuid = '5124gafe3eadsaf241612333456fdd5a';
// var uuid = 'e2c56db5dffb48d2b060d0f5a71096e0';
var major = 0; // 0 - 65535
var minor = 0; // 0 - 65535
var measuredPower = -59; // -128 - 127 (measured RSSI at 1 meter)

// Bleacon.startAdvertising(uuid, major, minor, measuredPower);
// Bleacon.stopAdvertising();


Bleacon.on('discover', (bleacon)=>{
  console.log("on discover: ");
  console.log(bleacon);
});

Bleacon.startScanning();
