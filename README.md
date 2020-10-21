# Anycubic Mega S serial commands
Sometimes you need to send raw G-CODE to 3D printers. Using this simple nodejs code, you can send commands directly to Anycubic Mega-S 3D printer.
You can get the specs, play tones, set flow configurations, make calibrations, etc.

Anycubic Mega S use Marlin Firmware.
The G-CODE commands can be found in https://marlinfw.org/meta/gcode

Plug a USB cable to your printer to send commands and don't forget it to replace in code the correct device in linux system OR find the correct USB device removing the comments in the code to list all ports USB connected.
