/**
* GPS Geolocation Demo
*/

$(document).ready(function() {
  	
    /**
    * Runs when a position has been retrieved
    */
    function onSuccess(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: ' + position.coords.latitude     + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n';

        document.getElementById('map').src = "http://maps.googleapis.com/maps/api/staticmap?center="+ position.coords.latitude +","+ position.coords.longitude +"&markers=color:blue|"+ position.coords.latitude +","+ position.coords.longitude +"&zoom=13&size=600x300&maptype=roadmap&sensor=false";
    }

    /**
    * Runs when Geolocation returns an error
    */
    function onError(error) {
      console.log(error);
    }

    /**
    * Gets current position
    */
    GeoLocator.getCurPos(onSuccess, onError, true, { timeout: 15000, enableHighAccuracy: false });
});