// Implement an alarm clock / timer which will beep after a specified amount of time has passed. 
// The user can specify an unlimited number of alarms using command line arguments

process.stdout.write('\x07');

const alarmClock = function() {
    const alarmNum = process.argv.slice(2)
    .filter(number => !isNaN(number))
    .filter(number => number > 0)
    .sort();


    console.log(alarmClock); 
    alarmNum.forEach((time) => {
        // console.log(`The alarm will beep at ${time} seconds`);
        setTimeout(() =>{
            process.stdout.write('\x07');
            console.log(`This will make a beep at ${time} seconds`)
        }, time * 1000)
    })
    
}
alarmClock();