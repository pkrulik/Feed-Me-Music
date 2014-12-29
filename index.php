<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Feed Me Music - Live Music in Portland, Maine</title>
        <meta name="description" content="Live Music Listing for Portland, Maine">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
	    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.css">
        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="js/vendor/foundation/css/foundation.min.css">
        <link rel="stylesheet" href="css/main.css">
		    
        <script src="js/vendor/modernizr-2.6.2.min.js"></script>
        
	    <!-- facebook share stuff -->
		<meta property="og:title" content="Feed Me Music"/>
		<meta property="og:url" content="http://pwm.feedmemusic.co"/>
		<meta property="og:image" content="http://pwm.feedmemusic.co/img/facebook-share-logo.jpg"/>
		<meta property="og:description" content="Stay in tune with Portland’s live music scene 24/7."/>        
        
        
		<!-- Google analytics -->
		<script type="text/javascript">
			var _gaq = _gaq || [];
			_gaq.push(['_setAccount', 'UA-53472104-1']);
			_gaq.push(['_trackPageview']);
			
			(function() {
			  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
			  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
			  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
			})();
		</script>
    
    
    
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

		<div class = "loader"></div>
		
		<nav>
			<ul>
				<li><a href = "#" data-name = "date" class = "active" onClick="_gaq.push(['_trackEvent', 'Event', 'Sort', 'Date']);">Sort by Date</a></li>
				<li><a href = "#" data-name = "location" onClick="_gaq.push(['_trackEvent', 'Event', 'Sort', 'Venue']);">Sort by Venue</a></li>
				<li><a href = "#" data-name = "artist" onClick="_gaq.push(['_trackEvent', 'Event', 'Sort', 'Artist']);">Sort by Artist</a></li>
			</ul>
		</nav>
		
		<header>			
			<a href = "index.php"><img id = "main-logo" src="img/logo.png" alt="Feed Me Music logo" width="200" height="200"></a>
			<h1 id = "sitename"><a href = "index.php">Feed Me Music</a></h1>
			<h2>Portland, Maine's Live Music Feed</h2>
			<p class = "dates"><span class = "today">Today, July 17th</span> - <span class = "last-day">Thursday, July 24th</span>
			<p class = "contact">Don't see your show in the list? Hit us up at <a href="mailto:hello@feedmemusic.co?Subject=Music!" onClick="_gaq.push(['_trackEvent', 'Event', 'Email', 'hello@feedmemusic.co']);">hello@feedmemusic.co</a></p>
		</header>
		
		<section id = "events-wrapper">
			<!-- events go here -->
		</section>
		
		<footer>
			<a href="mailto:hello@feedmemusic.co?Subject=Music!" onClick="_gaq.push(['_trackEvent', 'Event', 'Email', 'hello@feedmemusic.co']);">Made with <i class="fa fa-bolt"></i> in Portland, Maine</a>		
		</footer>	
		
		<section id = "background">
			<!-- fixed background image goes here -->
		</section>	

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.2.min.js"><\/script>')</script>
        <script src="js/vendor/foundation/js/foundation.min.js"></script>
        <script src="js/plugins.js"></script>
        <script src="js/jquery.easing.min.js"></script>
        <script src="js/jquery.scrollTo-1.4.3.1.min.js"></script>
        <script src="js/moment.js"></script>
        <script src="js/main.js"></script>

    </body>
</html>
