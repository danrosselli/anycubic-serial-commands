# Anycubic Mega S serial commands
Sometimes you need to send raw G-CODE to 3D printers. Using this simple nodejs program, you can send commands directly to Anycubic Mega-S 3D printer.
You can get the specs, play tones, set flow configurations, make calibrations, etc.

Anycubic Mega S use Marlin Firmware.
The G-CODE commands can be found in https://marlinfw.org/meta/gcode

Plug a USB cable to your printer to send commands and don't forget it to replace in code the correct device in linux system OR find the correct USB device removing the comments in the code to list all ports USB connected.

# Extruder steps

* Get your old E-Steps with M503. Look for the line starting with M92, the value after the E are your current steps.
* Preheat the hotend with M104 S220
* Send M83 to prepare the extruder
* Use a caliper or measuring tape and mark 120 mm (measured downwards from the extruder intake) with a pencil on the filament
* Send G1 E100 F100
* Your extruder will feed 100 mm of filament now (takes 60 seconds)
* Measure where your pencil marking is now. If it's exactly 20 mm to the extruder, it's perfectly calibrated
* If it's less or more than 20 mm, subtract that value from 120 mm, e.g.:
* If you measure 26 mm, your result would be 94 mm. If you measure 15 mm, your result would be 105 mm
* Calculate your new value: (100 mm / actually extruded filament) * your current E-steps (default: i3 Mega = 92.6, Mega-S = 384)
* For example, if your markings are at 26 mm, you'd calculate: (100/94) * 384 = 408.51 (new value for Mega-S)
* Put in the new value like this: M92 Exxx.xx, replacing x with your value
* Save with M500
* Finish with M82
* You can repeat the process if you want to get even more precise, you'd have to replace "your current E-steps" with your newly calibrated value in the next calculation.

