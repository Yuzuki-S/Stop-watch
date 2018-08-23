(function(){
    'use strict'; // to indicate that the code should be excuted in 'strict mode'

    var timer = document.getElementById('timer')
    var start = document.getElementsById('start')
    var stop = document.getElementById('stop')
    var reset = document.getElementById('reset')

    var startTime;
    var elapsedTime =0;

    function countUp(){
        setTimeout(function() {
            elapsedTime = Date.now() - startTime;
            console.log(elapsedTime);
            countUp()
        },10)
    }


    start.addEventListner('click', function(){
    startTime = Date.now();
    countUp();
    });
})();