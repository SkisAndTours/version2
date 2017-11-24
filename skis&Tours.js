
//upArrow disappears in first page and  appears in rest of the pages
function up() {
  if (window.location.hash === "#page1") {
   $("#upButton").css("display", "none"); 
  }
  else
  {
    $("#upButton").css("display", "block");
  }
}


//Making a function - oneClickNext can take you to the next page on one click

function oneClickNext(a,b) {
  $(a).on("click", function(){

    var nhash  = b;
    up();
     $('html, body').animate({
      scrollTop: $(nhash).offset().top
    }, 1200)
  });//on click event ends
}//function ends


//Work for future - Scroll Event
// // Making the function onScrollNext just as oneClickNext
// function onScrollNext(a,b) {
 
//     if(window.location.hash === "a")
//     {
//       var nhash  = "b";
//     up();
//      $('html, body').animate({
//       scrollTop: $(nhash).offset().top
//     }, 1200);
//    }
  
// };//function ends



// google api = AIzaSyDe3vv3cS2K9Z3wHssene09nVFz7exsg3k

function myMap() {
  var myCenter1 = new google.maps.LatLng(40.1771408, -75.10662070000001);
  var mapProp = {center:myCenter1, zoom:12, scrollwheel:false, draggable:true, mapTypeId:google.maps.MapTypeId.ROADMAP};
  var map = new google.maps.Map(document.getElementById("mapHatboro"),mapProp);
  var marker = new google.maps.Marker({position:myCenter1});
  marker.setMap(map);

  var myCenter2 = new google.maps.LatLng(40.5087173, -74.85893249999998);
  var mapProp = {center:myCenter2, zoom:12, scrollwheel:false, draggable:true, mapTypeId:google.maps.MapTypeId.ROADMAP};
  var map = new google.maps.Map(document.getElementById("mapFlemington"),mapProp);
  var marker = new google.maps.Marker({position:myCenter2});
  marker.setMap(map);


      };


$(document).ready(function(){
    up();
    //console.log(window.location);
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1200, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;

       }); 
     
      }; // End if 
      });

    oneClickNext("#page1", "#page2");
    oneClickNext("#page2", "#page3");
    oneClickNext("#page3", "#page4");
    oneClickNext("#page4", "#page5");
    oneClickNext("#upButton", "#page1");



//Work for future
  //   var iScrollPos = 0;
  // $(window).scroll(function(){
  //     var iCurScrollPos = $(this).scrollTop();
  //     if (iCurScrollPos > iScrollPos) {
  //       //scrolling down
  //       onScrollNext("#page1","#page2");
  //       onScrollNext("#page2","#page3");
  //       onScrollNext("#page3","#page4");
  //       onScrollNext("#page4","#page5");


  //     }
  //     else {
  //       //scrolling up
  //       onScrollNext("#page5","#page4");
  //       onScrollNext("#page4","#page3");
  //       onScrollNext("#page3","#page2");
  //       onScrollNext("#page2","#page1");
  //     }
  //     iScrollPos = iCurScrollPos;
  //   });





    });
  



