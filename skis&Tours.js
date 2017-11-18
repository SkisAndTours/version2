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


      }



 $(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a").on('click', function(event) {

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
    } // End if 
  });
  

});