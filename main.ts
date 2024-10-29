/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Caleb Andreas
 * Created on: Oct 2024
 * This program counts down from 4 and turns on neopixel
 * acording to the number
*/

// Variables.
let count: number
let neopixelStrip: neopixel.Strip = null

// Cleanup.
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

// Countdown from 4 on A button press.
input.onButtonPressed(Button.A, function() {
    count = 4

    while (count > 0){
        
        // Light all neopixels when 4 and show number.
        if (count = 4) {
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Orange))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
            basic.clearScreen()
            neopixelStrip.show()
            basic.showNumber(count)
            basic.pause(1000)
        }

        // Light 3 neopixels when 3 and show number.
        if (count = 3) {
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Orange))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
            basic.clearScreen()
            neopixelStrip.show()
            basic.showNumber(count)
            basic.pause(1000)
        }

        // Light 2 neopixels when 2 and show number.
        if (count = 2) {
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Orange))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
            basic.clearScreen()
            neopixelStrip.show()
            basic.showNumber(count)
            basic.pause(1000)
        }

        // Light 1 neopixels when 1 and show number.
        if (count = 1) {
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
            basic.clearScreen()
            neopixelStrip.show()
            basic.showNumber(count)
            basic.pause(1000)
        }
        // Subtract 1 from count variable.
        count = count - 1
    }
    // Cleanup then back to happy.
    neopixelStrip.clear()
    neopixelStrip.show()
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
