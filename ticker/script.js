(function() {
  var ticker = document.getElementById('container');
  var xhr = new XMLHttpRequest;
  var stories;
  var animationFrameID;
  var n = 0;
  xhr.open('GET', "/HardTimes.json");
  xhr.send();
  xhr.addEventListener('readystatechange', function() {
    if (xhr.readyState != XMLHttpRequest.DONE) {
        return;
    }
    var status;
    try {
        status = xhr.status;
    } catch(e) {
        return;
    }
    console.log(status)
    if (status != 200) {
        return;
    }
    var responseText = xhr.responseText;
    console.log(responseText)
    try {
      stories = JSON.parse(responseText);
    } catch (e) {
        console.log(e);
      return;

    }
    insertHTML();
    startAnimation();

});

function insertHTML(){
    console.log("links");
    var links = "";
    for(var link in stories){
        links += "<a href=\"" + link + "\">" + stories[link] + "</a>"
    }
    console.log("links");
    document.getElementById('container').innerHTML = links;

}

function startAnimation(){

    animationFrameID = requestAnimationFrame(function anim() {
      n+= 1;
      if ( n < (ticker.scrollWidth - document.body.offsetWidth)) {
            ticker.style.transform = 'translateX(' + -n + 'px)';
      } else {
            n =  document.body.offsetWidth;
      }


      animationFrameID = requestAnimationFrame(anim);


    });
}

    ticker.addEventListener('mouseenter', function(){
        cancelAnimationFrame(animationFrameID);
    });
    ticker.addEventListener('mouseleave', startAnimation);

})();
