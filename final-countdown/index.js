var Countdown = require('./countdown').Countdown;

new Countdown(10).on('secondElapsed', function(n){
    console.log(n + "!");
}).on('done', function(){
    console.log("LIFT OFF!")
});
