var events = require("events");
function Countdown(n){
    var instanceCountdown = this;
    setTimeout(ticktock, 1000);
    function ticktock(){
        n--;
        if(n > 0){
            setTimeout(ticktock, 1000);
            instanceCountdown.emit('secondElapsed', n);
        } else {
            instanceCountdown.emit('done');
        }
    };

}
Countdown.prototype = new events.EventEmitter;
exports.Countdown = Countdown;
