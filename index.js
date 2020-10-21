const SerialPort = require('serialport')
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});

/*
SerialPort.list().then((ports, err) => {
  console.log(ports);
  if (err)
    console.error(err)
});
*/

const port = new SerialPort('/dev/ttyUSB0', {
  baudRate: 250000,
})

let line = '';
let receiving = true;
let timer = null;

port.on("open", function(){
  console.log('open');

  port.on('data', function(data) {
    //console.log('data received: ' + data);
    //console.log(data);
    for (const value of data) {
      //console.log(value, String.fromCharCode(value));
      // 10 = linebreak
      if (value == 10) {

        console.log(line);

        if (line.indexOf("ok") >= 0) {
          rl.question("> ", function(command) {
            port.write(`${command};\n`);
            //rl.close();
          });
        }

        line = '';

      }
      else {
        line += String.fromCharCode(value);
      }
    }

    /*
    if (timer)
      clearTimeout(timer);

    timer = setTimeout(() => {

      rl.question("> ", function(command) {
        port.write(`${command};\n`);
        //rl.close();
      });

    }, 5000);
    */
    //console.log(data.toString());

  });


  /*
  https://marlinfw.org

  M105 : get extruder temperature
  M70 P5; Hello World.
  G28: Move to Origin (Home)
  M72: Play a tone or song
  M104: Turn off heater
  M104 S100: Turn on heater to 100 celsius
  M140 S60: Set bed temperature
  G1 E100 F100

  M302         ; report current cold extrusion state
  M302 P0      ; enable cold extrusion checking
  M302 P1      ; disable cold extrusion checking
  M302 S0      ; always allow extrusion (disable checking)
  M302 S170    ; only allow extrusion above 170
  M302 S170 P1 ; set min extrude temp to 170 but leave disabled

  M300 S440 P200 ; play a tone

  M503; return informations about the step configurations

  echo:Steps per unit:
  echo:  M92 X80.00 Y80.00 Z400.00 E384.00

  */

});
