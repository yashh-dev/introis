const vh = document.documentElement.clientHeight 
var height=0;
var body = document.body,
    html = document.documentElement;
var max = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );


$(document).on('mousewheel DOMMouseScroll', function (event) {
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
       console.log('scrolling up')
           prev();
    } else {
        console.log('scrolling down')
     
        next();
    }
});

//                        window.addEventListener('wheel', function(e) {
//     direction = e.deltaY

//     if (direction > 0) {
//         console.log('scrolling up')
//                next();
//     }else{
//         console.log('scrolling down')
//         prev();
 
//     }
// })
// $(window).on('mousewheel DOMMouseScroll', function(e){
//     if(e.originalEvent.detail > 0) {
//         //scroll down
//      next();
//     }else {
//         prev();
//         //scroll up
//         // $('.slide-1').addClass('active');
//         // $('.slide-2').removeClass('active');
//     }
//     //prevent page fom scrolling
//     return false;
// });
// var scroll=$(document).scrollTop();

// $(window).scroll(function(){
//     var scrolled=$(document).scrollTop();
//     if(scrolled>scroll){
//     next();
    
//     }else{
// prev();

//     }
// scroll=$(document).scrollTop();
// })

//  var lastScrollTop = 0, delta = 5;
// 	 $(window).scroll(function(){
// 		 var nowScrollTop = $(this).scrollTop();
// 		 if(Math.abs(lastScrollTop - nowScrollTop) >= delta){
// 		 	if (nowScrollTop > lastScrollTop){
// 		 		// ACTION ON
// 		 		// SCROLLING DOWN 
//                  next();
//                 sleep(2000);
// 		 	} else {
// 		 		// ACTION ON
// 		 		// SCROLLING UP 
//                  prev();
// sleep(2000)
// 			}
// 		 lastScrollTop = nowScrollTop;
// 		 }
// 	 });

function next(){
    if(height<max){
  window.scrollTo(0,height+=vh);
    console.log("Scrolling")
    }
}
function prev(){
    if(height>=0){
window.scrollTo(0,height-=vh);
    console.log("Scrolling")
    }
    
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
