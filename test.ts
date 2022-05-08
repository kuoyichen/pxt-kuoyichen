basic.forever(() => {
    let p = kuoyichen.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.Inches);
    led.plotBarGraph(p, 0);
})