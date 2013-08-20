
// MIT License
// ===========

// Copyright (c) 2013 Marco Troisi <hello@marcotroisi.com>

// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the "Software"),
// to deal in the Software without restriction, including without limitation
// the rights to use, copy, modify, merge, publish, distribute, sublicense,
// and/or sell copies of the Software, and to permit persons to whom the
// Software is furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
// THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
// DEALINGS IN THE SOFTWARE.

var GeoLoc = function() {
	var _this 			= this;
	var onSuccess 		= "";
	var onError 		= "";
	var html5options 	= "";
	var fallbackToIp	= "";

	/**
	* Gets current position via HTML5 Geolocation
	* 
	* Parameters:
	* @successCallback: function to be called when location has been retrieved
	* @errorCallback: function to be called when location hasn't been retrieved
	* @fallback: whether to fallback to IP-based geolocation (true or false)
	* @html5opt: options from HTML5 Geolocation API [more info at https://developer.mozilla.org/en-US/docs/WebAPI/Using_geolocation]
	*/
	this.getCurPos = function(successCallback, errorCallback, fallback, html5opt) {
		onSuccess 		= successCallback;
		onError 		= errorCallback || "";
		fallbackToIp 	= fallback 	|| false;
		html5options 	= html5opt 	|| {};

		navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoError, html5options);
	}

	/**
	* Gets the position and calls the user's onSuccess function
	*/
	this.geoSuccess = function(position) {
		onSuccess(position);
	}

	/**
	* If fallback is enabled, it tries to get the address from IP-based geolocation
	*/
	this.geoError = function(error) {
        if(fallbackToIp === true) {

        	$.get("http://freegeoip.net/json/", function(responseGeoIp) {

        		var location = { 
	        		coords: {
	        			latitude: 	responseGeoIp.latitude,
	        			longitude: 	responseGeoIp.longitude,
	        			accuracy: 	0,
	        			altitudeAccuracy: null,
	        			heading: 	null,
	        			speed: 		null
	        		},
	        		timestamp: null
	        	};
	        	_this.geoSuccess(location);
	        	
        	}, "json");


        } else {
        	if(onError !== "") {
				var errorMessage = 'code: '    + error.code    + '\n' +
					'message: ' + error.message + '\n';
				onError(errorMessage);
        	}
			
        }
    }
}

var GeoLocator = new GeoLoc(); 