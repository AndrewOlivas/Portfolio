// hamburger menu js code
var hamburger="hamb"; 
var slideNavName="slideDown";

var rectangleName="rect"; 
var showRect= "showRect";
var topRectX= "topRectX";
var hideRectX= "hideRectX";
var bottomRectX= "bottomRectX";


$("#"+hamburger).click(function(event) 
{
  if($("#"+slideNavName).attr('class')=="hidden") 
  {
    
    $("#"+rectangleName+"1").toggleClass(showRect+" "+topRectX);
    $("#"+rectangleName+"2").toggleClass(showRect+" "+hideRectX);
    $("#"+rectangleName+"3").toggleClass(showRect+" "+bottomRectX);
    
    
    $("#"+slideNavName).toggleClass('hidden revealed');
  }
  
  else if($("#"+slideNavName).attr('class')=="revealed") 
  {
    
    $("#"+rectangleName+"1").toggleClass(showRect+" "+topRectX);
    $("#"+rectangleName+"2").toggleClass(showRect+" "+hideRectX);
    $("#"+rectangleName+"3").toggleClass(showRect+" "+bottomRectX);
    
    
    $("#"+slideNavName).toggleClass('revealed hidden');
  }
});




$(window).scroll(function(event) 
{
  if($("#"+slideNavName).attr('class')=="revealed") 
  {
   
    $("#"+rectangleName+"1").toggleClass(showRect+" "+topRectX);
    $("#"+rectangleName+"2").toggleClass(showRect+" "+hideRectX);
    $("#"+rectangleName+"3").toggleClass(showRect+" "+bottomRectX);
    
  
    $("#"+slideNavName).toggleClass('revealed hidden');
  }
});
// panel java

$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});

// js carousel
// Hover-Carousel jQuery plugin
// By Yair Even-Or
// https://github.com/yairEO/hover-carousel
// http://dropthebit.com

;(function($){
    "use strict";

    var bindToClass      = 'carousel',
        containerWidth   = 0,
        scrollWidth      = 0,
        posFromLeft      = 0,    // Stripe position from the left of the screen
        stripePos        = 0,    // When relative mouse position inside the thumbs stripe
        animated         = null,
        $indicator, $carousel, el, $el, ratio, scrollPos, nextMore, prevMore, pos, padding;

    // calculate the thumbs container width
    function calc(e){
        $el = $(this).find(' > .wrap');
        el  = $el[0];
        $carousel = $el.parent();
        $indicator = $el.prev('.indicator');

        nextMore = prevMore  = false; // reset

        containerWidth       = el.clientWidth;
        scrollWidth          = el.scrollWidth; // the "<ul>"" width
        padding              = 0.2 * containerWidth; // padding in percentage of the area which the mouse movement affects
        posFromLeft          = $el.offset().left;
        stripePos            = e.pageX - padding - posFromLeft;
        pos                  = stripePos / (containerWidth - padding*2);
        scrollPos            = (scrollWidth - containerWidth ) * pos;
        
        if( scrollPos < 0 )
          scrollPos = 0;
        if( scrollPos > (scrollWidth - containerWidth) )
          scrollPos = scrollWidth - containerWidth;
      
        $el.animate({scrollLeft:scrollPos}, 200, 'swing');
        
        if( $indicator.length )
            $indicator.css({
                width: (containerWidth / scrollWidth) * 100 + '%',
                left: (scrollPos / scrollWidth ) * 100 + '%'
            });

        clearTimeout(animated);
        animated = setTimeout(function(){
            animated = null;
        }, 200);

        return this;
    }

    // move the stripe left or right according to mouse position
    function move(e){
        // don't move anything until inital movement on 'mouseenter' has finished
        if( animated ) return;

        ratio     = scrollWidth / containerWidth;
        stripePos = e.pageX - padding - posFromLeft; // the mouse X position, "normalized" to the carousel position

        if( stripePos < 0)
            stripePos = 0;

        pos = stripePos / (containerWidth - padding*2); // calculated position between 0 to 1
        // calculate the percentage of the mouse position within the carousel
        scrollPos = (scrollWidth - containerWidth ) * pos;   

        el.scrollLeft = scrollPos;
        if( $indicator[0] && scrollPos < (scrollWidth - containerWidth) )
          $indicator[0].style.left = (scrollPos / scrollWidth ) * 100 + '%';

        // check if element has reached an edge
        prevMore = el.scrollLeft > 0;
        nextMore = el.scrollLeft < (scrollWidth - containerWidth);

        $carousel[prevMore ? "addClass" : "removeClass"]('left');
        $carousel[nextMore ? "addClass" : "removeClass"]('right');
    }

    $.fn.carousel = function(options){
        $(document)
            .on('mouseenter.carousel', '.' + bindToClass, calc)
            .on('mousemove.carousel', '.' + bindToClass, move);
    };

    // automatic binding to all elements which have the class that is assigned to "bindToClass"
    $.fn.carousel();

})(jQuery);

// end of js carousel