var Bleacon = require('bleacon');

// http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
function uuid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '' + s4() + '' + s4() + '' +
    s4() + '' + s4() + s4() + s4();
}

Bleacon.on('discover', (bleacon)=>{
  console.log("on discover: ");
  console.log(bleacon);
});


var uuid = uuid(); // 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
var major = 0;
var minor = 0;
var measuredPower = -59;

console.log("My UUID is: "+uuid);
console.log("Starting Advertising...");
try {
  Bleacon.startAdvertising(uuid, major, minor, measuredPower);
} catch (e){
  console.log("Failed to start advertising");
  console.log(e);
}

console.log("Starting Scanning...");
try {
  Bleacon.startScanning();
} catch (e){
  console.log("Failed to start scanning");
  console.log(e);
}

console.log("Done.");
