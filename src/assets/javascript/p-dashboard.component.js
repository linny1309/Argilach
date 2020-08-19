var mc = 0;
var lastScrollTop;
var nowScrollTop;

document.firstElementChild.style.zoom = "reset"

  window.onchange = function() {
    m = window.matchMedia("(max-width: 1000px)");
    this.mediaCheck(m);
    };

    function displayWindowSize(){
    // Get width and height of the window excluding scrollbars
    m = window.matchMedia("(max-width: 1000px)");
    this.mediaCheck(m);
}
 
// Attaching the event listener function to window's resize event
window.addEventListener("resize", displayWindowSize);

// Calling the function for the first time

function onResize() {
 document.getElementById("arrowIcon").visibility = "hidden";
 //scrollTo("descContainer" ,0, 0);
 var qString = window.location.search;
 var param = qString.substr(5).split('&');
 var int = parseInt(param);

  m = window.matchMedia("(max-width: 1000px)")
  this.mediaCheck(m); // Call listener function at run time

  if(mc == 0) 
  {
    document.getElementById("arrowIcon").style.visibility = "visible";
    document.getElementById("arrowIcon").innerHTML = "keyboard_arrow_up";
    document.getElementById("pageComment").style.width = "100%";
    if(document.getElementById("pageTitle").innerHTML == "Key KPIs") 
    {
      document.getElementById("cComment").style.marginTop = "92vh";
      document.getElementById("cComment").style.top = "5vh";
    }
    else {
      m = window.matchMedia("(max-width: 800px)")
      this.mediaCheck(m); // Call listener function at run time
      document.getElementById("cComment").style.marginTop = "92vh";
      document.getElementById("cComment").style.top = "5vh";
    }   
  } 
  else
  {
    document.getElementById("arrowIcon").style.visibility = "hidden";
    document.getElementById("cComment").style.opacity = 1;
    document.getElementById("cComment").style.marginTop = "0vh"
    document.getElementById("pageComment").style.width = "23.9vh";
    document.getElementById("cComment").style.top = "6vh";
  }

}

function mediaCheck(m) {
    if (m.matches) { // If media query matches
      mc = 0;
    } else {
      mc = 1;
    }
}

function isOverlap(idOne,idTwo){
        var objOne=$(idOne),
            objTwo=$(idTwo),
            offsetOne = objOne.offset(),
            offsetTwo = objTwo.offset(),
            topOne=offsetOne.top,
            topTwo=offsetTwo.top,
            leftOne=offsetOne.left,
            leftTwo=offsetTwo.left,
            widthOne = objOne.width(),
            widthTwo = objTwo.width(),
            heightOne = objOne.height(),
            heightTwo = objTwo.height();
        var leftTop = leftTwo > leftOne && leftTwo < leftOne+widthOne                  && topTwo > topOne && topTwo < topOne+heightOne,             rightTop = leftTwo+widthTwo > leftOne && leftTwo+widthTwo < leftOne+widthOne                  && topTwo > topOne && topTwo < topOne+heightOne,             leftBottom = leftTwo > leftOne && leftTwo < leftOne+widthOne                  && topTwo+heightTwo > topOne && topTwo+heightTwo < topOne+heightOne,             rightBottom = leftTwo+widthTwo > leftOne && leftTwo+widthTwo < leftOne+widthOne                  && topTwo+heightTwo > topOne && topTwo+heightTwo < topOne+heightOne;
        return leftTop || rightTop || leftBottom || rightBottom;
}

var lastScrollTop = 0, delta = 0;

/* Scroll shit
  $(function(){
    $(window).scroll(function(){
      var nowScrollTop = $(this).scrollTop();
      if(Math.abs(lastScrollTop - nowScrollTop) >= delta){
        if(document.getElementById("cComment").style.top == "5vh") {
        if (nowScrollTop > lastScrollTop){
          document.getElementById("cComment").style.marginTop = "92vh";
        } else {
          document.getElementById("cComment").style.marginTop = "20vh";
       }
      }
      lastScrollTop = nowScrollTop;
      }
    });
  });

  $( document ).ready(function() {
});

*/

/*

function scrollTo(id ,x, y) {
  document.getElementById(id).scrollTo(x,y);
}

*/



