// song kick api key 10OFM6NGN2sk4MA7
// artist http://api.songkick.com/api/3.0/artists/{artist_id}/calendar.json?apikey={your_api_key}
// metro area http://api.songkick.com/api/3.0/metro_areas/{metro_area_id}/calendar.json?apikey={your_api_key}
// pulls all portland concerts: http://api.songkick.com/api/3.0/metro_areas/24590/calendar.json?apikey=10OFM6NGN2sk4MA7

//https://www.google.com/maps/place/%20to%20flask%20lounge

// TODO: 
// 1. add in day of week
// 2. if day is today display "today"
// 3. link title to something -> COMPLETE
// 4. add in filters for each venue -> COMPLETE 
// 5. add in powered by songkick footer -> COMPLETE
// 6. figure out how to add shows to the array -> COMPLETE
// 7. add in share divs
// 8. buy domain
// 9. launch it
// 10. tell people about it
// 11. link location to google map search
// different layout for sorting by venue



var eventArray = {},
    eventsArray = [],
    hamburger = $('#hamburger-icon'),
    navItem = $('nav ul a'),
    i = 0,
    bodyHeight,
	eventsWrapperTop,
	
	// dealing with time and dates
    todaysMonthNumber = moment().month(), // ex: 6
    todaysMonth = moment().format('MMMM'), // ex July
    todaysDateNumber = moment().format('DD'), // ex: 17
    todaysYear = moment().year(), // 2014
    todaysDayNumber = moment().day(), // ex: 4
    todaysDay = moment().format('dddd'), // ex Thursday
	todaysFullDate = moment().format('YYYY[-]MM[-]DD'), // July 17 2014
	tomorrowsDate = moment().add('days',1).format('YYYY[-]MM[-]DD'),
	aWeekFromToday = moment().add('days',7).format('YYYY[-]MM[-]DD'),
	todaysFullDateFormatted = moment().format('MMMM Do'),
	aWeekFromTodayFormatted = moment().add('days',7).format('MMMM Do, YYYY'),
    eventDay,
    weekday,
	navName = "date",
    longArtist = "";
    


// drop in todays date and the date 7 days from now
$('span.today').html(todaysFullDateFormatted);
$('span.last-day').html(aWeekFromTodayFormatted);






var scrollToTarget = function(target, animation) {

    $("html, body").bind("scroll mousedown DOMMouseScroll mousewheel keyup", function() {
        $('html, body').stop();
    });


    $('html,body').animate({
        scrollTop: target
    }, 1000, animation, function() {
        $("html, body").unbind("scroll mousedown DOMMouseScroll mousewheel keyup");
    });

};


$('a.scroll-to-top').click(function(){
	scrollToTarget(0, "easeOutQuint");
	return false;
});

// array is created and sorted by date on load
// all we need to do here is resort the array
// and display it the way want
navItem.click(function(){

	navName = $(this).attr("data-name"),
	
	hamburger.toggleClass('active');
	$('nav').toggleClass('active');
	
	// deal with active classes
	$('nav ul a.active').removeClass('active');
	$(this).toggleClass('active');
	
	// clear out the divs
	$('#recommended-event').html(' ');
	$('#events-wrapper').html(' ');
	
	// sort the array based on the nav item selected
	
		
	eventsArray.sort(dynamicSort(navName));
	// call the function that spits out the html from the array
	outputHTML(navName);
		
	
	scrollToTarget(eventsWrapperTop, "easeOutQuint", bodyHeight);
	
	return false;
});
    
    
 // navigation div   
hamburger.click(function() {
	hamburger.toggleClass('active');
	$('nav').toggleClass('active');
	return false;
});


// sort the eventsArray
function dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function(a, b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}
	
	
	$.getJSON("http://api.songkick.com/api/3.0/metro_areas/24590/calendar.json?apikey=10OFM6NGN2sk4MA7&page=" + z + "&jsoncallback=?", function(data) {
	
	    $.each(data["resultsPage"]["results"]["event"], function(i) {
	
	        // create an object with all the info from the api that we want to use
	        if (data["resultsPage"]["results"]["event"][i]["type"] === "Concert") {
		        eventArray = {
		            date: data["resultsPage"]["results"]["event"][i]["start"]["date"],
		            youTubeQuery: data["resultsPage"]["results"]["event"][i]["performance"][0]["artist"]["displayName"],
		            artist: data["resultsPage"]["results"]["event"][i]["performance"][0]["artist"]["displayName"],
		            location: data["resultsPage"]["results"]["event"][i]["venue"]["displayName"],
		            time: data["resultsPage"]["results"]["event"][i]["start"]["time"],
		            purchaseUrl: data["resultsPage"]["results"]["event"][i]["uri"],
		            dayNumber: ' ', // ex 14
		            day: 'Day Placeholder' // ex Thursday
		             
		        };
		        
		        // push that object into an array so we can play with them as a whole
		        eventsArray.push(eventArray);
	        } 
	        
	    }); // end each
	
	
	    // add in new events to the eventsArray here		
/*
	    eventsArray.push(eventArray = {
	        date: "2014-07-16",
	        day: 'blank',
	        youTubeQuery: "test",
	        artist: "test artist",
	        location: "test",
	        time: "test",
	        purchaseUrl: "test"
	    }); // END add in new events 	
*/
	        
	        
		// on load sort the array by it's date    
	    eventsArray.sort(dynamicSort("date"));
	    
	    // format the time for each event
	    for (var i = 0; i < eventsArray.length; i++) {
		    // convert the time for all
		    if (eventsArray[i].time !== null) {
		        var parts = eventsArray[i].time.split(':'),
		            hour = parts[0],
		            minutes = parts[1];
		
		        if (hour > 12) {
		            eventsArray[i].time = (hour - 12) + ':' + minutes + ' pm';
		        } else if (hour === 0) {
		            eventsArray[i].time = 12 + ':' + minutes + ' am';
		        } else if (hour == 12) {
		            eventsArray[i].time += ' pm';
		        } else {
		            eventsArray[i].time += ' am';
		        }
		    } else {
			    eventsArray[i].time = "TBD";
		    }
		    console.log('yeah yeah	');
		 }
	
		$('#events-wrapper').html(" ");
		outputHTML(navName);
		eventsArray = [];
		
		
		// hide the loader once we have parsed the json
		$('.loader').fadeOut('slow');
		
		
	
	}).fail(function() {
	    console.log("error");
	}); // end jsonp call
	
	
	
	
	
	
	
	
	
var z = 1;
$('.arrow').click(function(){

	var arrowName = $(this).attr("id");
	console.log(arrowName);
	
	eventsArray = [];
	
	if (arrowName === "next") {
		z++;
	} 
	
	else if (arrowName === "previous") {
		if (z > 1) {
			z--;
		} else {
			alert ("this is the most recent list of events");
		}
	}
	
	// start json call	  
	if (z > 1) {
	$.getJSON("http://api.songkick.com/api/3.0/metro_areas/24590/calendar.json?apikey=10OFM6NGN2sk4MA7&page=" + z + "&jsoncallback=?", function(data) {
	
	    $.each(data["resultsPage"]["results"]["event"], function(i) {
	
	        // create an object with all the info from the api that we want to use
	        if (data["resultsPage"]["results"]["event"][i]["type"] === "Concert") {
		        eventArray = {
		            date: data["resultsPage"]["results"]["event"][i]["start"]["date"],
		            youTubeQuery: data["resultsPage"]["results"]["event"][i]["performance"][0]["artist"]["displayName"],
		            artist: data["resultsPage"]["results"]["event"][i]["performance"][0]["artist"]["displayName"],
		            location: data["resultsPage"]["results"]["event"][i]["venue"]["displayName"],
		            time: data["resultsPage"]["results"]["event"][i]["start"]["time"],
		            purchaseUrl: data["resultsPage"]["results"]["event"][i]["uri"],
		            dayNumber: ' ', // ex 14
		            day: 'Day Placeholder' // ex Thursday
		             
		        };
		        
		        // push that object into an array so we can play with them as a whole
		        eventsArray.push(eventArray);
	        } 
	        
	    }); // end each
	
	
	    // add in new events to the eventsArray here		
/*
	    eventsArray.push(eventArray = {
	        date: "2014-07-16",
	        day: 'blank',
	        youTubeQuery: "test",
	        artist: "test artist",
	        location: "test",
	        time: "test",
	        purchaseUrl: "test"
	    }); // END add in new events 	
*/
	        
	        
		// on load sort the array by it's date    
	    eventsArray.sort(dynamicSort("date"));
	    
	    // format the time for each event
	    for (var i = 0; i < eventsArray.length; i++) {
		    // convert the time for all
		    if (eventsArray[i].time !== null) {
		        var parts = eventsArray[i].time.split(':'),
		            hour = parts[0],
		            minutes = parts[1];
		
		        if (hour > 12) {
		            eventsArray[i].time = (hour - 12) + ':' + minutes + ' pm';
		        } else if (hour === 0) {
		            eventsArray[i].time = 12 + ':' + minutes + ' am';
		        } else if (hour == 12) {
		            eventsArray[i].time += ' pm';
		        } else {
		            eventsArray[i].time += ' am';
		        }
		    } else {
			    eventsArray[i].time = "TBD";
		    }
		    console.log('yeah yeah	');
		 }
	
		$('#events-wrapper').html(" ");
		outputHTML(navName);
		
	
	}).fail(function() {
	    console.log("error");
	}); // end jsonp call
	}
		return false;

	
});


	
	
// lets create a function so we can output our html the same way whenever we need to change 
// how the array is sorted
var outputHTML = function (navName) {
    
    // START loop through all objects and display them on the page	
    // looop through each of the objects in the events array
    for (var i = 0; i < eventsArray.length; i++) {
/*
        console.log("ouputHTML forloop");
		console.log("eventsArray[i].date " +eventsArray[i].date)
		console.log("todaysFullDate " +todaysFullDate)
		console.log("aWeekFromToday " + aWeekFromToday)
*/
        
        
        
        

        // only display shows that are happneing this week
		
        //only display events that are happening between todays date and 7 days from now
        // this check won't pass because i've updated the variables that i'm checking within the function.
        // there are a few types of evetns that can exist: concert, festival, 
        if (/* eventsArray[i].date >= todaysFullDate && eventsArray[i].date <= aWeekFromToday */ 1==1) {
        		
        		// convert all dates
				if (eventsArray[i].date == todaysFullDate) {
					eventsArray[i].day = "Tonight";
				} else if (eventsArray[i].date == tomorrowsDate) {
					eventsArray[i].day = "Tomorrow Night";
				} else {
	        		eventsArray[i].day = moment(eventsArray[i].date).format('dddd');
				}
        		
        		newEventDate = moment(eventsArray[i].date).format('MMMM Do');
        		
        		
                
                // if navname = venue 
                // else
                
                // drop in the recommended event
                // if the artist name is equal to the show we're recommending do this
                // display recommended stuff not matter what
                if (navName === "date" || navName === "artist") {
	                if (eventsArray[i].artist === "Guitar Legend Dick Dale") {
	                    $("#events-wrapper").append(
	                        '<div class="row recommended-event">' +
		                        '<div class = "small-12 large-12 columns">' +
			                        '<h2>Recommended show</h2>' +
			                        '<p class = "date">' + eventsArray[i].day + ", "+ newEventDate + '</p>' +
			                        '<h1 class = "title"><a href = "' + eventsArray[i].purchaseUrl + '" target = "_blank">' + eventsArray[i].artist + '</a></h1>' +
			                        '<p> <span class = "location"><a href = "https://www.google.com/maps/place/' + eventsArray[i].location + '" target="_blank"> ' + eventsArray[i].location + '</a></span> | <span class = "time">' + eventsArray[i].time + '</span></p>' +
			                        '<p class = "recommendation">Rumor has it that Dick has a riff for every beach break under the sun. I believe it. Paddle in, drop your toes over the nose and be swept away by the sounds of a surf guitar champoid.</p>' +
			                        '<div class = "buyTix button"><a href = "' + eventsArray[i].purchaseUrl + '" target = "_blank">Buy Tix</a></div>' +
		                            '<div class = "youTube button"><a href = "https://www.youtube.com/results?search_query=' + eventsArray[i].youTubeQuery + '" target="_blank">View YouTube</a></div>' +
		                        '</div>' +
	                        '</div>'
	                    );
	                } 
	                
	                else if (eventsArray[i].artist === "Jeff Beam") {
	                    $("#events-wrapper").append(
	                        '<div class="row recommended-event">' +
		                        '<div class = "small-12 large-12 columns">' +
			                        '<h2>Recommended show</h2>' +
			                        '<p class = "date">' + eventsArray[i].day + ", "+ newEventDate + '</p>' +
			                        '<h1 class = "title"><a href = "' + eventsArray[i].purchaseUrl + '" target = "_blank">' + eventsArray[i].artist + '</a></h1>' +
			                        '<p> <span class = "location"><a href = "https://www.google.com/maps/place/' + eventsArray[i].location + '" target="_blank"> ' + eventsArray[i].location + '</a></span> | <span class = "time">' + eventsArray[i].time + '</span></p>' +
			                        '<p class = "recommendation">Jeff plays a Rickenbacker. We like Rickenbackers. We like Jeff. Jeff might like us if he knew who we were. Go see Jeff and trip balls.</p>' +
			                        '<div class = "buyTix button"><a href = "' + eventsArray[i].purchaseUrl + '" target = "_blank">Buy Tix</a></div>' +
		                            '<div class = "youTube button"><a href = "https://www.youtube.com/results?search_query=' + eventsArray[i].youTubeQuery + '" target="_blank">View YouTube</a></div>' +
		                        '</div>' +
	                        '</div>'
	                    );
	                } 
	                
	                else {	
		                    // if the time for the event exists do this
		                    if (eventsArray[i].time !== null) {
		                        $("#events-wrapper").append(
		                            '<div class = "row">' +
			                            '<div class = "small-12 large-12 columns">' +
					                        '<p class = "date">' + eventsArray[i].day + ", "+ newEventDate + '</p>' +
											'<h1 class = "title"><a href = "' + eventsArray[i].purchaseUrl + '" target = "_blank">' + eventsArray[i].artist + '</a></h1>' +
					                        '<p> <span class = "location"><a href = "https://www.google.com/maps/place/' + eventsArray[i].location + '" target="_blank">' + eventsArray[i].location + '</a></span> | <span class = "time">' + eventsArray[i].time + '</span></p>' +
				                            '<div class = "buyTix button"><a href = "' + eventsArray[i].purchaseUrl + '" target = "_blank">Buy Tix</a></div>' +
				                            '<div class = "youTube button"><a href = "https://www.youtube.com/results?search_query=' + eventsArray[i].youTubeQuery + '" target="_blank">View YouTube</a></div>' +
			                            '</div>' +
		                            '</div>'
		                        );
		                    } 
		                    
		                    // if the time for the event doesn't exist do this
		                    else { 
		                        $("#events-wrapper").append(
		                            '<div class = "row">' +
			                            '<div class = "small-12 large-12 columns">' +
					                        '<p class = "date">' + eventsArray[i].day + ", "+ newEventDate + '</p>' +
					                        '<h1 class = "title"><a href = "' + eventsArray[i].purchaseUrl + '" target = "_blank">' + eventsArray[i].artist + '</a></h1>' +
					                        '<p> <span class = "location"><a href = "https://www.google.com/maps/place/' + eventsArray[i].location + '" target="_blank">' + eventsArray[i].location + '</a></span></p>' +
				                            '<div class = "buyTix button"><a href = "' + eventsArray[i].purchaseUrl + '" target = "_blank">Buy Tix</a></div>' +
				                            '<div class = "youTube button"><a href = "https://www.youtube.com/results?search_query=' + eventsArray[i].youTubeQuery + '" target="_blank">View YouTube</a></div>' +
			                            '</div>' +
		                            '</div>'
		                        );
		                    }
	
	                }
                }
                
                
                
                
                
                // write a function to handle all the same types of html
/*
                var htmlTemplate = function(day, date, purchaseURL, location, artist, time, youTubeQuery) {
                    var dateHTML = '<p class = "date">' + eventsArray[i].day + ", "+ newEventDate + '</p>'; 

                    
                    $("#events-wrapper").append(
                        '<div class = "row">' +
                            '<div class = "small-12 large-12 columns">' +
                            	dateHTML +
								'<h1 class = "title"><a href = "' + eventsArray[i].purchaseUrl + '" target = "_blank">' + eventsArray[i].artist + '</a></h1>' +
		                        '<p> <span class = "location"><a href = "https://www.google.com/maps/place/' + eventsArray[i].location + '" target="_blank">' + eventsArray[i].location + '</a></span> | <span class = "time">' + eventsArray[i].time + '</span></p>' +
	                            '<div class = "buyTix button"><a href = "' + eventsArray[i].purchaseUrl + '" target = "_blank">Buy Tix</a></div>' +
	                            '<div class = "youTube button"><a href = "https://www.youtube.com/results?search_query=' + eventsArray[i].youTubeQuery + '" target="_blank">View YouTube</a></div>' +
                            '</div>' +
                        '</div>'
                    );
                }
                
                htmlTemplate(eventsArray[i].day, newEventDate, eventsArray[i].purchaseUrl, eventsArray[i].location, eventsArray[i].artist, eventsArray[i].time, eventsArray[i].youTubeQuery);
*/
                
               
                
                

				// if the sort by venue was selected the html should prioritize the venue name                
                else if (navName === "location") {
                	console.log("navName is location");
                
	                    // if the time for the event exists do this
	                    if (eventsArray[i].time !== null) {
	                        $("#events-wrapper").append(
	                            '<div class = "row">' +
		                            '<div class = "small-12 large-12 columns">' +
				                        '<p class = "date">' + eventsArray[i].day + ", "+ newEventDate + '</p>' +
										// location is prioritized
										'<h1 class = "title"><a href = "' + eventsArray[i].purchaseUrl + '" target = "_blank">' + eventsArray[i].location + '</a></h1>' +
										// artist is de-prioritized
				                        '<p> <span class = "location"><a href = "https://www.google.com/maps/place/' + eventsArray[i].location + '" target="_blank">' + eventsArray[i].artist + '</a></span> | <span class = "time">' + eventsArray[i].time + '</span></p>' +
			                            '<div class = "buyTix button"><a href = "' + eventsArray[i].purchaseUrl + '" target = "_blank">Buy Tix</a></div>' +
			                            '<div class = "youTube button"><a href = "https://www.youtube.com/results?search_query=' + eventsArray[i].youTubeQuery + '" target="_blank">View YouTube</a></div>' +
		                            '</div>' +
	                            '</div>'
	                        );
	                    } 
	                    
	                    // if the time for the event doesn't exist do this
	                    else { 
	                        $("#events-wrapper").append(
	                            '<div class = "row">' +
		                            '<div class = "small-12 large-12 columns">' +
				                        '<p class = "date">' + eventsArray[i].day + ", "+ newEventDate + '</p>' +
										// location is prioritized
										'<h1 class = "title"><a href = "' + eventsArray[i].purchaseUrl + '" target = "_blank">' + eventsArray[i].location + '</a></h1>' +
										// artist is de-prioritized
				                        '<p> <span class = "location"><a href = "https://www.google.com/maps/place/' + eventsArray[i].location + '" target="_blank">' + eventsArray[i].artist + '</a></span></p>' +
			                            '<div class = "buyTix button"><a href = "' + eventsArray[i].purchaseUrl + '" target = "_blank">Buy Tix</a></div>' +
			                            '<div class = "youTube button"><a href = "https://www.youtube.com/results?search_query=' + eventsArray[i].youTubeQuery + '" target="_blank">View YouTube</a></div>' +
		                            '</div>' +
	                            '</div>'
	                        );
	                    }
                
	                
                } 
                
                else if (navName === "recommended") {
	                alert("Recommended")
                }
                
                // if selected nav is about
/*
                else if (navName == "about") {
		
					console.log('about');
					$('#events-wrapper').html('<div class = "row"><div class = "small-12 large-12 columns"><p class = "about">Made with love in Portland, Maine</p></div></div>');
		
                }
*/
                
                // for date and artist use this
/*
                else {	
	
	
	                    // if the time for the event exists do this
	                    if (eventsArray[i].time !== null) {
	                        $("#events-wrapper").append(
	                            '<div class = "row">' +
		                            '<div class = "small-12 large-12 columns">' +
				                        '<p class = "date">' + eventsArray[i].day + ", "+ newEventDate + '</p>' +
										'<h1 class = "title"><a href = "' + eventsArray[i].purchaseUrl + '" target = "_blank">' + eventsArray[i].artist + '</a></h1>' +
				                        '<p> <span class = "location"><a href = "https://www.google.com/maps/place/' + eventsArray[i].location + '" target="_blank">' + eventsArray[i].location + '</a></span> | <span class = "time">' + eventsArray[i].time + '</span></p>' +
			                            '<div class = "buyTix button"><a href = "' + eventsArray[i].purchaseUrl + '" target = "_blank">Buy Tix</a></div>' +
			                            '<div class = "youTube button"><a href = "https://www.youtube.com/results?search_query=' + eventsArray[i].youTubeQuery + '" target="_blank">View YouTube</a></div>' +
		                            '</div>' +
	                            '</div>'
	                        );
	                    } 
	                    
	                    // if the time for the event doesn't exist do this
	                    else { 
	                        $("#events-wrapper").append(
	                            '<div class = "row">' +
		                            '<div class = "small-12 large-12 columns">' +
				                        '<p class = "date">' + eventsArray[i].day + ", "+ newEventDate + '</p>' +
				                        '<h1 class = "title"><a href = "' + eventsArray[i].purchaseUrl + '" target = "_blank">' + eventsArray[i].artist + '</a></h1>' +
				                        '<p> <span class = "location"><a href = "https://www.google.com/maps/place/' + eventsArray[i].location + '" target="_blank">' + eventsArray[i].location + '</a></span></p>' +
			                            '<div class = "buyTix button"><a href = "' + eventsArray[i].purchaseUrl + '" target = "_blank">Buy Tix</a></div>' +
			                            '<div class = "youTube button"><a href = "https://www.youtube.com/results?search_query=' + eventsArray[i].youTubeQuery + '" target="_blank">View YouTube</a></div>' +
		                            '</div>' +
	                            '</div>'
	                        );
	                    }

                }
*/
                
                
                
                
               
				// find titles that are too long for mobile and give them a class so we can decrease
				// their size when the screen is too small		        
		        var longWordFinder = function(string) {
			        var str = string.split(" ");
			        for (var j=0; j < str.length; j++) {
				        if (str[j].length > 7) {
					        var longArtist = eventsArray[i].artist;
							console.log (longArtist);
				        }
			        }
			        
	                if (eventsArray[i].artist == longArtist) {
		                $('h1:contains(' + longArtist + ')').addClass('longword')
	                }
			        
		        }
		        
		        longWordFinder(eventsArray[i].artist);
                
                

        } // end 7 day if statement

    } // end for loop
   
	bodyHeight = $('body').height(),
	eventsWrapperTop = $('#events-wrapper').offset().top;
	
	
	
	
	
  /* popup window for social */
	$.fn.popupWindow = function(instanceSettings){
		
		return this.each(function(){
		
		$(this).click(function(){
		
		$.fn.popupWindow.defaultSettings = {
			centerBrowser:0, // center window over browser window? {1 (YES) or 0 (NO)}. overrides top and left
			centerScreen:0, // center window over entire screen? {1 (YES) or 0 (NO)}. overrides top and left
			height:500, // sets the height in pixels of the window.
			left:0, // left position when the window appears.
			location:0, // determines whether the address bar is displayed {1 (YES) or 0 (NO)}.
			menubar:0, // determines whether the menu bar is displayed {1 (YES) or 0 (NO)}.
			resizable:0, // whether the window can be resized {1 (YES) or 0 (NO)}. Can also be overloaded using resizable.
			scrollbars:0, // determines whether scrollbars appear on the window {1 (YES) or 0 (NO)}.
			status:0, // whether a status line appears at the bottom of the window {1 (YES) or 0 (NO)}.
			width:500, // sets the width in pixels of the window.
			windowName:null, // name of window set from the name attribute of the element that invokes the click
			windowURL:null, // url used for the popup
			top:0, // top position when the window appears.
			toolbar:0 // determines whether a toolbar (includes the forward and back buttons) is displayed {1 (YES) or 0 (NO)}.
		};
		
		settings = $.extend({}, $.fn.popupWindow.defaultSettings, instanceSettings || {});
		
		var windowFeatures =    'height=' + settings.height +
								',width=' + settings.width +
								',toolbar=' + settings.toolbar +
								',scrollbars=' + settings.scrollbars +
								',status=' + settings.status + 
								',resizable=' + settings.resizable +
								',location=' + settings.location +
								',menuBar=' + settings.menubar;

				settings.windowName = this.name || settings.windowName;
				settings.windowURL = this.href || settings.windowURL;
				var centeredY,centeredX;
			
				if(settings.centerBrowser){
						centeredY = window.screenY + (((window.outerHeight/2) - (settings.height/2)));
						centeredX = window.screenX + (((window.outerWidth/2) - (settings.width/2)));
					window.open(settings.windowURL, settings.windowName, windowFeatures+',left=' + centeredX +',top=' + centeredY).focus();
				}else if(settings.centerScreen){
					centeredY = (screen.height - settings.height)/2;
					centeredX = (screen.width - settings.width)/2;
					window.open(settings.windowURL, settings.windowName, windowFeatures+',left=' + centeredX +',top=' + centeredY).focus();
				}else{
					window.open(settings.windowURL, settings.windowName, windowFeatures+',left=' + settings.left +',top=' + settings.top).focus();	
				}
				return false;
			});
			
		});	
	};
	
	
    $('.share-pop').popupWindow({
        centerBrowser:1,
        height:350
    });

	
	

}




