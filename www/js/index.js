/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // `load`, `deviceready`, `offline`, and `online`.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of `this` is the event. In order to call the `receivedEvent`
    // function, we must explicity call `app.receivedEvent(...);`
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {

        console.log('Received Event: ' + id);
    
	
	/*
		$('#map_canvas').gmap().bind('init', function() { 
		
			console.log("test 1");
			
			
			// This URL won't work on your localhost, so you need to change it
			// see http://en.wikipedia.org/wiki/Same_origin_policy
			$.getJSON( 'demo.json', function(data) { 
				
				console.log("test 2");
				
			
				$.each( data.markers, function(i, marker) {
					
					console.log("test 3");
					console.log( marker.latitude + "," + marker.longitude);

					$('#map_canvas').gmap('addMarker', { 
						'position': new google.maps.LatLng(marker.latitude, marker.longitude), 
						'bounds': true 
					}).click(function() {
						console.log("test 4");
						$('#map_canvas').gmap('openInfoWindow', { 'content': marker.content }, this);
					});
				});
				
			});
			
		});
	*/
	
		$('#map_canvas').gmap({'center': '57.7973333,12.0502107', 'zoom': 10, 'disableDefaultUI':true, 'callback': function() {
			var self = this;
			self.addMarker({'position': this.get('map').getCenter() }).click(function() {
				self.openInfoWindow({ 'content': 'Hello World!' }, this);
			});	
		}});
		
	
	
	
	}
};
