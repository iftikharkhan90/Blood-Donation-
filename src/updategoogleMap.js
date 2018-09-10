import React, { Component } from 'react';
import GoogleMap from "react-google-map";

import PropTypes from 'prop-types';

import $ from "jquery";
const MY_API_KEY = "AIzaSyA4JsBWizKjDWSrf-vxPvcn8WZEYVn_LUU";

var renderMap = (googleMaps) => {


    this.state = {
        zoom: 13,
        maptype: 'roadmap',
        place_formatted: '',
        place_id: '',
        place_location: '',
    };

    if (!googleMaps) {
        return false;
    }



    if (!$('#Profile_GoogleMap').length) {
        return false;
    }
    //*********************** Autocomplete *********************************
    const lat = 31.4340916;
    const lng = 73.0526164;




    var mapG = new googleMaps.Map(document.getElementById('Profile_GoogleMap'), {
        center: { lat: lat, lng: lng },
        zoom: 8
    });
    var latlng = new googleMaps.LatLng(lat, lng);

    var image = 'http://www.google.com/intl/en_us/mapfiles/ms/micons/blue-dot.png';

    // var marker = new googleMaps.Marker({
    //     position: latlng,
    //     map: mapG,
    //     icon: image
    // });
    var input = document.getElementById('searchTextField');
    var autocomplete = new googleMaps.places.Autocomplete(input, {
        types: ["geocode"],
        componentRestrictions: { country: 'pk' }
    });
    autocomplete.bindTo('bounds', mapG);
    var infowindow = new googleMaps.InfoWindow();
    //*********************** Autocomplete *********************************




    //});

    //}, 3000)


    // GoogleMap component has a 100% height style.
    // You have to set the DOM parent height.
    // So you can perfectly handle responsive with differents heights.
    return googleMaps && (

        <GoogleMap
            googleMaps={googleMaps}
            // You can add and remove coordinates on the fly.
            // The map will rerender new markers and remove the old ones.



            coordinates={[
                {
                    title: "Faisalabad",
                    position: {
                        lat: 31.4340916,
                        lng: 73.0526164,
                    },
                    onLoaded: (googleMaps, map, marker) => {
                        // Set Marker animation
                        marker.setAnimation(googleMaps.Animation.BOUNCE)

                        // Define Marker InfoWindow
                        const infoWindow = new googleMaps.InfoWindow({

                            content: `
                  <div>
                    <h3>Faisalabad<h3>
                    
                  </div>
                `,
                        })


                        googleMaps.event.addListener(autocomplete, 'place_changed', function () {
                            infowindow.close();
                            marker.setVisible(false);

                            
                            var place = autocomplete.getPlace();
                            var lati = autocomplete.getPlace().geometry.location.lat();
                            var longi = autocomplete.getPlace().geometry.location.lng();

                            document.getElementById('longi').value = longi;
                            document.getElementById('lati').value = lati;

                            if (!place.geometry) {
                                // Inform the user that the place was not found and return.
                                input.className = 'notfound';
                                return;
                            }

                            // If the place has a geometry, then present it on a map.
                            if (place.geometry.viewport) {
                                mapG.fitBounds(place.geometry.viewport);
                            } else {
                                mapG.setCenter(place.geometry.location);
                                mapG.setZoom(17);  // Why 17? Because it looks good.
                            }
                            var image = new googleMaps.MarkerImage(
                                place.icon,
                                new googleMaps.Size(71, 71),
                                new googleMaps.Point(0, 0),
                                new googleMaps.Point(17, 34),
                                new googleMaps.Size(35, 35));
                            marker.setIcon(image);
                            marker.setPosition(place.geometry.location);

                            var address = '';


                            if (place.address_components) {
                                var components = place.address_components;
                                // console.log(components);
                                address = [
                                    (components[0] && components[0].short_name || ''),
                                    (components[1] && components[1].short_name || ''),
                                    (components[2] && components[2].short_name || '')
                                ].join(' ');

                                for (var i = 0, component; component = components[i]; i++) {


                                    if (component.types[0] == 'administrative_area_level_1') {
                                        var province = component['long_name'];
                                        document.getElementById('updateDonor-Province').value = province;

                                        document.getElementById('updateDonor-country').value = "Pakistan";
                                    }

                                    if (component.types[0] == "locality") {
                                        var city = component['long_name'];
                                        document.getElementById('updateDonor-city').value = city;
                                    }
                                }
                            }



                            infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
                            infowindow.open(mapG, marker);

                        });

                        // Open InfoWindow when Marker will be clicked
                        googleMaps.event.addListener(marker, "click", () => {

                            infoWindow.open(map, marker)
                        })



                        googleMaps.event.addListener(marker, "mouseout", () => {

                            marker.setAnimation(googleMaps.Animation.BOUNCE)

                        })

                        // // Open InfoWindow directly
                        // infoWindow.open(map, marker)

                    },
                }
            ]}
            center={{ lat: 31.4340916, lng: 73.0526164 }}
            zoom={15}
            onLoaded={(googleMaps, map) => {
                map.setMapTypeId(googleMaps.MapTypeId.ROADMAP)
            }}
        />
    )
}


renderMap.propTypes = {
    googleMaps: PropTypes.object.isRequired,
}



const googleData = {
    credentials: {
        key: "AIzaSyA4JsBWizKjDWSrf-vxPvcn8WZEYVn_LUU", // Define your api key here
        libraries: "places,geometry", // To request multiple libraries, separate them with a comma
    },
    renderMap: renderMap
};

export default googleData;
