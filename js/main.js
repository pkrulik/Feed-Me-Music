	var $win = $(window),
	    eventArray = {},
	    eventsArray = [],
	    hamburger = $('#hamburger-icon'),
	    navItem = $('nav ul a'),
	    i = 0,
	    bodyHeight,
		eventsWrapperTop,
		bodyHeight = $('body').height(),
		eventsWrapperTop = $('#events-wrapper').offset().top,
		jsonLoaded = 0,
		
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
	    longArtist = "",
		songkickJsonComplete = 0,
		feedmemusicJsonComplete = 0;
		
		
		
		$win.ready(function(){
			
            checkLoad = setInterval(function(){
                
    			if ( jsonLoaded === 1) {
        			// hide the loader once we have parsed the json
        			$('.loader').fadeOut('slow');
        			
        			clearInterval(checkLoad)
        			
    			}
                
                console.log('checking')
                
            }, 100 );	
            
            		
		});



	
// ------------ CONNECT TO OUR DATA	------------ //
	

	$.getJSON("https://spreadsheets.google.com/feeds/list/1OpCTJqC8uwkyNKRmu6qDe6V13nqxthlta4-waFD4zWQ/od6/public/values?alt=json", function(data) {
	
	    $.each(data.feed.entry, function(i) {
	
	        // create an object with all the info from the api that we want to use
	        eventArray = {
	            bandName: data.feed.entry[i].gsx$bandname['$t'],	             
	            venue: data.feed.entry[i].gsx$venue['$t'],	 
	            date: data.feed.entry[i].gsx$date['$t'],	             
	            time: data.feed.entry[i].gsx$time['$t'],	             
	            price: data.feed.entry[i].gsx$price['$t'],	
	            youTubeQuery: data.feed.entry[i].gsx$bandname['$t'] + " music",
	            bandWebsite: data.feed.entry[i].gsx$bandwebsite['$t'],	             
	            ticketUrl: data.feed.entry[i].gsx$ticketurl['$t'],
	            recommended: data.feed.entry[i].gsx$recommended['$t'], 
	            recommendation: data.feed.entry[i].gsx$recommendation['$t'] 	             
	        };
	        
	        // push that object into an array so we can play with them as a whole
	        eventsArray.push(eventArray);
		     
		     
		     
			console.log(data.feed.entry[i].gsx$bandname['$t'])
			console.log(data.feed.entry[i].gsx$venue['$t'])
			console.log(data.feed.entry[i].gsx$date['$t'])
			console.log(data.feed.entry[i].gsx$time['$t'])
			console.log(data.feed.entry[i].gsx$price['$t'])
			console.log(data.feed.entry[i].gsx$bandwebsite['$t'])
			console.log(data.feed.entry[i].gsx$ticketurl['$t'])
		
		
		
		
	    }); // end each
	
	
	        
		console.log('our database success')    
		feedmemusicJsonComplete = 1;
		outputJson();
	
	
	}).fail(function(d, textStatus, error) {
	        console.log("getJSON failed, status: " + textStatus + ", error: " + error)
	        console.log(d)
	}); // end jsonp call
	
		
// ------------ END CONNECT TO OUR DATA	------------ //
		
		
		
		
		
		
		
		
		
		
		
		
		
// ------------ FORMAT OUR DATA	------------ //
		
	// lets create a function so we can output our html the same way whenever we need to change 
	// how the array is sorted
	function outputHTML(navName) {
	
	    
	    // START loop through all objects and display them on the page	
	    // looop through each of the objects in the events array
	    for (var i = 0; i < eventsArray.length; i++) {
	        //only display events that are happening between todays date and 7 days from now
	        // this check won't pass because i've updated the variables that i'm checking within the function.
	        // there are a few types of evetns that can exist: concert, festival, 
	        if (eventsArray[i].date >= todaysFullDate && eventsArray[i].date <= aWeekFromToday) {
		        
	    		// convert all dates
				if (eventsArray[i].date == todaysFullDate) {
					eventsArray[i].day = "Tonight";
				} else if (eventsArray[i].date == tomorrowsDate) {
					eventsArray[i].day = "Tomorrow Night";
				} else {
	        		eventsArray[i].day = moment(eventsArray[i].date).format('dddd');
				}
	    		
	    		newEventDate = moment(eventsArray[i].date).format('MMMM Do');
	    		
	    		
	    		var recommendedShow1 = "Heavy Trash",
	    			recommendedShow2 = "Jeff the Brotherhood",
	    			recommendedShow3 = "Endless Jags",
	    			recommendedShow4 = "Model Airplane",
	    			
	    			HtmlRecommendedOpeningWrapper = '<div class="row recommended-event"><div class = "small-12 large-12 columns"><h2>Recommended show</h2>',
	    			HtmlOpeningWrapper = '<div class="row"><div class = "small-12 large-12 columns">',
	    			HtmlClosingWrapper = '</div></div>',
	    			HtmlDate = '<p class = "date">' + eventsArray[i].day + ", "+ newEventDate + '</p>',
	    			HtmlTitle = '<h1 class = "title"><a href = "' + eventsArray[i].ticketUrl + '" target = "_blank" onClick="_gaq.push([&#39;_trackEvent&#39;, &#39;Event&#39;, &#39;Buy&#39;, &#39;' + eventsArray[i].bandName + ' Title Link&#39;]);">' + eventsArray[i].bandName + '</a></h1>',
	    			HtmlLocation = '<p> <span class = "location"><a href = "https://www.google.com/maps/place/' + eventsArray[i].venue + '" target="_blank"> ' + eventsArray[i].venue + '</a></span>',
					HtmlTime =  ' | <span class = "time">' + "TBD" + '</span>',
					HtmlPrice =  ' | <span class = "time">' + "TBD" + '</span>',
	    			HtmlBuyTixButton = '<div class = "buyTix button"><a href = "' + eventsArray[i].ticketUrl + '" target = "_blank" onClick="_gaq.push([&#39;_trackEvent&#39;, &#39;Event&#39;, &#39;Buy&#39;, &#39;' + eventsArray[i].bandName + ' Buy Tix Button&#39;]);">Buy Tix</a></div>',
	    			HtmlYoutubeButton = '<div class = "youTube button"><a href = "https://www.youtube.com/results?search_query=' + eventsArray[i].youTubeQuery + ' Music" target="_blank" onClick="_gaq.push([&#39;_trackEvent&#39;, &#39;Event&#39;, &#39;Youtube Button&#39;, &#39;' + eventsArray[i].bandName + ' View Youtube Button&#39;]);">View YouTube</a></div>',	
	    			HtmlRecommendation;
	    		
	    		
	    		
	    		// if time exists
	    		if (eventsArray[i].time !== undefined) {
					HtmlTime =  ' | <span class = "time">' + eventsArray[i].time + '</span>';
	    		}
	    		
	    		// if price exists
	    		if (eventsArray[i].price !== undefined) {
					HtmlPrice =  ' | <span class = "time">' + eventsArray[i].price + '</span>';
	    		}
	    			    			
               	if (eventsArray[i].recommended == 1) {

		    		console.log(eventsArray[i].bandName)
		    		console.log(eventsArray[i].recommended)
		    		console.log(eventsArray[i].recommendation)
		    		
		    		HtmlRecommendation = "<p class = 'recommendation'>" + eventsArray[i].recommendation + "</p>";
                    
                    $("#events-wrapper").append(
						HtmlRecommendedOpeningWrapper + HtmlDate + HtmlTitle + HtmlLocation + HtmlTime + HtmlPrice + HtmlRecommendation + HtmlBuyTixButton + HtmlYoutubeButton + HtmlClosingWrapper
                    );
                   	
               	} else {
                   	
                    $("#events-wrapper").append(
						HtmlOpeningWrapper + HtmlDate + HtmlTitle + HtmlLocation + HtmlTime + HtmlPrice + HtmlBuyTixButton + HtmlYoutubeButton + HtmlClosingWrapper
                    );
                    
               	}
	    				    						
	                       
				// find titles that are too long for mobile and give them a class so we can decrease
				// their size when the screen is too small		        
		        var longWordFinder = function(string) {
			        var str = string.split(" ");
			        for (var j=0; j < str.length; j++) {
				        if (str[j].length > 7) {
					        var longArtist = eventsArray[i].bandName;
			                console.log('foundone')
				        }
			        }
			        
	                if (eventsArray[i].bandName == longArtist) {
		                $('h1:contains(' + longArtist + ')').addClass('longword')
	                }
	                
			        
		        }
		        
		        longWordFinder(eventsArray[i].bandName);
	
	                
	                
	
	        } // end 7 day if statement
	
	    } // end for loop
	   
	   
	   
		
		
		
		
		
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
// ------------ END FORMAT OUR DATA	------------ //
	
	








	
	
	
// ------------ OUTPUT OUR DATA	------------ //
		
		
		// when both json calls are complete do this
		function outputJson() {
		
			if (/* songkickJsonComplete === 1 && */ feedmemusicJsonComplete === 1) {
		
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
				            eventsArray[i].time = (hour - 12) + ':' + minutes + 'pm';
				        } else if (hour === 0) {
				            eventsArray[i].time = 12 + ':' + minutes + 'am';
				        } else if (hour == 12) {
				            eventsArray[i].time = hour + ':' + minutes + 'pm';
				        } else {
				            eventsArray[i].time = hour + ':' + minutes + 'am';
				        }
				    } else {
					    eventsArray[i].time = "TBD";
				    }
				 }
			
				outputHTML(navName);
				
				// let us know when this has loaded
				jsonLoaded = 1;
				
			}
		}
		
		
		
// ------------ END OUTPUT OUR DATA	------------ //







	
	
	
	
	
	
	
	
	
	
	
	
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
	




	// pick a random image to drop in as the background
	// mulitiply by the number of images/classes you have
	var randomNumber = 1 + Math.floor(Math.random() * 9)
	$('#background, nav').addClass('background' + randomNumber);
	console.log(randomNumber)
	
	
	$('.sign-up').click(function(){
    	
    	$('body').animate({scrollTop: $('footer').offset().top })
    	
    	
	});
	
	
	
	
	
	
	
	
	
	
	
	
