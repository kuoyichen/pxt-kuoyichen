/**
* NFU CSIE Makeblock packages (Programming eXperience Toolkit)
*/

//% weight=10 color=#3CB371 icon="\uf0ad" block="kuoyichen"

namespace kuoyichen {

	export enum PingUnit {
		//% block="μs"
		MicroSeconds,
		//% block="cm"
		Centimeters,
		//% block="inches"
		Inches
		}

//% blockId=sonar_ping block="ping trig %trig|echo %echo|unit %unit"

	export function ping(trig: DigitalPin, echo: DigitalPin, unit: PingUnit, maxCmDistance = 500): number {
	// send pulse
		pins.setPull(trig, PinPullMode.PullNone);
		pins.digitalWritePin(trig, 0);
		control.waitMicros(2);
	        pins.digitalWritePin(trig, 1);
	        control.waitMicros(10);
	        pins.digitalWritePin(trig, 0);

	        // read pulse
	        const d = pins.pulseIn(echo, PulseValue.High, maxCmDistance * 58);

	        switch (unit) {
			case PingUnit.Centimeters: return Math.idiv(d, 58);
			case PingUnit.Inches: return Math.idiv(d, 148);
			default: return d ;
	        }
	    }
}