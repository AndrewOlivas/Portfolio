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