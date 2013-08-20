GeoRocks
========

A Javascript class that manages HTML5 Geolocation with fallback to IP-based geolocation

* Usage *

Usage is extremely simple and well documented in the code. 

** HTML **
	<script type="text/javascript" src="jquery-2.0.3.min.js"></script>
    <script type="text/javascript" src="geolocator.min.js"></script>

** Javascript ** 
	$(document).ready(function() {
	  	
	    /**
	    * Runs when a position has been retrieved
	    */
	    function onSuccess(position) {
	    	// do something here
	    	// position is an Object composed as follows:
			// Latitude: position.coords.latitude     
			// Longitude: position.coords.longitude         
			// Altitude: position.coords.altitude          
			// Accuracy: position.coords.accuracy          
			// Altitude Accuracy: position.coords.altitudeAccuracy  
			// Heading: position.coords.heading           
			// Speed: position.coords.speed             
			// Timestamp: position.timestamp 
	    }

	    /**
	    * Runs when Geolocation returns an error
	    */
	    function onError(error) {
	    	// do something here
			console.log(error);
	    }

	    /**
		* Gets current position via HTML5 Geolocation
		* 
		* Parameters:
		* @successCallback: function to be called when location has been retrieved
		* @errorCallback: function to be called when location hasn't been retrieved
		* @fallback: whether to fallback to IP-based geolocation (true or false)
		* @html5opt: options from HTML5 Geolocation API [more info at https://developer.mozilla.org/en-US/docs/WebAPI/Using_geolocation]
		*/
	    GeoLocator.getCurPos(onSuccess, onError, true, { timeout: 15000, enableHighAccuracy: false });
	});

** Help ** 
Should you need help, please do not hesitate to write me: hello AT [my github username] DOT com