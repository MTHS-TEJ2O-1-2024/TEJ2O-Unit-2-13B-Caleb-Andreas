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
        if (count = 4) {
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Orange))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
            basic.clearScreen()
            basic.showNumber(count)
            basic.pause(1000)
        }

        if (count = 3) {
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Orange))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
            basic.clearScreen()
            basic.showNumber(count)
            basic.pause(1000)
        }

        if (count = 2) {
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Orange))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
            basic.clearScreen()
            basic.showNumber(count)
            basic.pause(1000)
        }

        if (count = 1) {
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
            basic.clearScreen()
            basic.showNumber(count)
            basic.pause(1000)
        }
        neopixelStrip.show()
        count = count - 1
    }
    neopixelStrip.clear()
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
