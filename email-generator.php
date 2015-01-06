<!-- Email Blast INSTRUCTIONS
    1. Open this file in your browser
    2. Open your inspector
    3. Copy everything between and including the <center></center> tags 
    4. Replace it with the <center> tags in email.php
    5. Copy and paste that entire file into mailchimp
    6. Test and Send
    -->


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>*|MC:SUBJECT|*</title>
        <style type="text/css">
			/* /\/\/\/\/\/\/\/\/ CLIENT-SPECIFIC STYLES /\/\/\/\/\/\/\/\/ */
			#outlook a{padding:0;} /* Force Outlook to provide a "view in browser" message */
			.ReadMsgBody{width:100%;} .ExternalClass{width:100%;} /* Force Hotmail to display emails at full width */
			.ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {line-height: 100%;} /* Force Hotmail to display normal line spacing */
			body, table, td, p, a, li, blockquote{-webkit-text-size-adjust:100%; -ms-text-size-adjust:100%;} /* Prevent WebKit and Windows mobile changing default text sizes */
			table, td{mso-table-lspace:0pt; mso-table-rspace:0pt;} /* Remove spacing between tables in Outlook 2007 and up */
			img{-ms-interpolation-mode:bicubic;} /* Allow smoother rendering of resized image in Internet Explorer */

			/* /\/\/\/\/\/\/\/\/ RESET STYLES /\/\/\/\/\/\/\/\/ */
			body{margin:0; padding:0;}
			img{border:0; height:auto; line-height:100%; outline:none; text-decoration:none;}
			table{border-collapse:collapse !important;}
			body, #bodyTable, #bodyCell{height:100% !important; margin:0; padding:0; width:100% !important;}

			/* /\/\/\/\/\/\/\/\/ TEMPLATE STYLES /\/\/\/\/\/\/\/\/ */

			/* ========== Page Styles ========== */

			#bodyCell{padding:0px;}
			#templateContainer{width:480px;}

			/**
			* @tab Page
			* @section background style
			* @tip Set the background color and top border for your email. You may want to choose colors that match your company's branding.
			* @theme page
			*/
			body, #bodyTable{
				/*@editable*/ background-color:#222222;
			}

			/**
			* @tab Page
			* @section background style
			* @tip Set the background color and top border for your email. You may want to choose colors that match your company's branding.
			* @theme page
			*/
			#bodyCell{
			}

			/**
			* @tab Page
			* @section email border
			* @tip Set the border for your email.
			*/
			#templateContainer{
			}

			/**
			* @tab Page
			* @section heading 1
			* @tip Set the styling for all first-level headings in your emails. These should be the largest of your headings.
			* @style heading 1
			*/
			h1{
				/*@editable*/ color:#ffffff !important;
				display:block;
				/*@editable*/ font-family: "Helvetica Neue","Helvetica",Helvetica,Arial,sans-serif;
				/*@editable*/ font-size:26px;
				/*@editable*/ font-style:normal;
				/*@editable*/ font-weight:bold;
				/*@editable*/ line-height:100%;
				/*@editable*/ letter-spacing:normal;
				margin-top:0;
				margin-right:0;
				margin-bottom:10px;
				margin-left:0;
				/*@editable*/ text-align:left;
				text-align:center;
			}

			/**
			* @tab Page
			* @section heading 2
			* @tip Set the styling for all second-level headings in your emails.
			* @style heading 2
			*/
			h2{
				/*@editable*/ color:#ffffff !important;
				display:block;
				/*@editable*/ font-family: "Helvetica Neue","Helvetica",Helvetica,Arial,sans-serif;
				/*@editable*/ font-size:20px;
				/*@editable*/ font-style:normal;
				/*@editable*/ font-weight:bold;
				/*@editable*/ line-height:100%;
				/*@editable*/ letter-spacing:normal;
				margin-top:0;
				margin-right:0;
				margin-bottom:10px;
				margin-left:0;
				/*@editable*/ text-align:left;
				text-align:center;
			}

			/**
			* @tab Page
			* @section heading 3
			* @tip Set the styling for all third-level headings in your emails.
			* @style heading 3
			*/
			h3{
				/*@editable*/ color:#ffffff !important;
				display:block;
				/*@editable*/ font-family: "Helvetica Neue","Helvetica",Helvetica,Arial,sans-serif;
				/*@editable*/ font-size:16px;
				/*@editable*/ font-style:italic;
				/*@editable*/ font-weight:normal;
				/*@editable*/ line-height:100%;
				/*@editable*/ letter-spacing:normal;
				margin-top:0;
				margin-right:0;
				margin-bottom:10px;
				margin-left:0;
				/*@editable*/ text-align:left;
			}

			/**
			* @tab Page
			* @section heading 4
			* @tip Set the styling for all fourth-level headings in your emails. These should be the smallest of your headings.
			* @style heading 4
			*/
			h4{
				/*@editable*/ color:#ffffff !important;
				display:block;
				/*@editable*/ font-family: "Helvetica Neue","Helvetica",Helvetica,Arial,sans-serif;
				/*@editable*/ font-size:14px;
				/*@editable*/ font-style:italic;
				/*@editable*/ font-weight:normal;
				/*@editable*/ line-height:100%;
				/*@editable*/ letter-spacing:normal;
				margin-top:0;
				margin-right:0;
				margin-bottom:10px;
				margin-left:0;
				/*@editable*/ text-align:left;
			}

			p{
				/*@editable*/ color:#ffffff !important;
				display:block;
				/*@editable*/ font-family: "Helvetica Neue","Helvetica",Helvetica,Arial,sans-serif;
				/*@editable*/ font-size:20px;
				/*@editable*/ font-style:italic;
				/*@editable*/ font-weight:normal;
				/*@editable*/ letter-spacing:normal;
			    -webkit-font-smoothing:antialiased;
                -moz-osx-font-smoothing: grayscale;
				margin-top:0;
				margin-right:0;
				margin-bottom:0px;
				margin-left:0;
				/*@editable*/ text-align:center;
			}

			/* ========== Header Styles ========== */

			/**
			* @tab Header
			* @section preheader style
			* @tip Set the background color and bottom border for your email's preheader area.
			* @theme header
			*/
			#templatePreheader{
			}

			/**
			* @tab Header
			* @section preheader text
			* @tip Set the styling for your email's preheader text. Choose a size and color that is easy to read.
			*/
			.preheaderContent{
				/*@editable*/ color:#ffffff;
				/*@editable*/ font-family: "Helvetica Neue","Helvetica",Helvetica,Arial,sans-serif;
				/*@editable*/ font-size:10px;
				/*@editable*/ line-height:125%;
				/*@editable*/ text-align:left;
			}

			/**
			* @tab Header
			* @section preheader link
			* @tip Set the styling for your email's preheader links. Choose a color that helps them stand out from your text.
			*/
			.preheaderContent a:link, .preheaderContent a:visited, /* Yahoo! Mail Override */ .preheaderContent a .yshortcuts /* Yahoo! Mail Override */{
				/*@editable*/ color:#ffffff;
				/*@editable*/ font-weight:normal;
				/*@editable*/ text-decoration:underline;
			}

			/**
			* @tab Header
			* @section header style
			* @tip Set the background color and borders for your email's header area.
			* @theme header
			*/
			#templateHeader{
			}

			/**
			* @tab Header
			* @section header text
			* @tip Set the styling for your email's header text. Choose a size and color that is easy to read.
			*/
			.headerContent{
				/*@editable*/ color:#ffffff;
				/*@editable*/ font-family: "Helvetica Neue","Helvetica",Helvetica,Arial,sans-serif;
				/*@editable*/ font-size:20px;
				/*@editable*/ font-weight:bold;
				/*@editable*/ line-height:100%;
				/*@editable*/ padding-top:0;
				/*@editable*/ padding-right:0;
				/*@editable*/ padding-bottom:0;
				/*@editable*/ padding-left:0;
				/*@editable*/ text-align:left;
				/*@editable*/ vertical-align:middle;
				border-bottom:5px solid #ffffff;

			}

			/**
			* @tab Header
			* @section header link
			* @tip Set the styling for your email's header links. Choose a color that helps them stand out from your text.
			*/
			.headerContent a:link, .headerContent a:visited, /* Yahoo! Mail Override */ .headerContent a .yshortcuts /* Yahoo! Mail Override */{
				/*@editable*/ color:#ffffff;
				color: #ffffff;
				/*@editable*/ font-weight:normal;
				/*@editable*/ text-decoration:underline;
			}

			#headerImage{
				height:auto;
				max-width:600px;
			}

			/* ========== Body Styles ========== */

			/**
			* @tab Body
			* @section body style
			* @tip Set the background color and borders for your email's body area.
			*/
			#templateBody{
			}

			/**
			* @tab Body
			* @section body text
			* @tip Set the styling for your email's main content text. Choose a size and color that is easy to read.
			* @theme main
			*/
			.bodyContent{
				/*@editable*/ color:#ffffff;
				/*@editable*/ font-family: "Helvetica Neue","Helvetica",Helvetica,Arial,sans-serif;
				/*@editable*/ font-size:14px;
				/*@editable*/ line-height:150%;
				padding-top:0px;
				padding-right:20px;
				padding-bottom:0px;
				padding-left:20px;
				/*@editable*/ text-align:left;
			}

			/**
			* @tab Body
			* @section body link
			* @tip Set the styling for your email's main content links. Choose a color that helps them stand out from your text.
			*/
			.bodyContent a:link, .bodyContent a:visited, /* Yahoo! Mail Override */ .bodyContent a .yshortcuts /* Yahoo! Mail Override */{
				/*@editable*/ color:#ffffff !important;
				/*@editable*/ font-weight:normal;
				/*@editable*/ text-decoration:underline;
			}

			.bodyContent img{
				display:inline;
				height:auto;
				max-width:560px;
			}
			
			/* ========== Footer Styles ========== */

			/**
			* @tab Footer
			* @section footer style
			* @tip Set the background color and borders for your email's footer area.
			* @theme footer
			*/
			#templateFooter{
			}

			/**
			* @tab Footer
			* @section footer text
			* @tip Set the styling for your email's footer text. Choose a size and color that is easy to read.
			* @theme footer
			*/
			.footerContent{
				/*@editable*/ color:#ffffff;
				/*@editable*/ font-family: "Helvetica Neue","Helvetica",Helvetica,Arial,sans-serif;
                font-weight: 300;
   				/*@editable*/ font-size:10px;
				/*@editable*/ line-height:150%;
				padding-top:20px;
				padding-right:20px;
				padding-bottom:20px;
				padding-left:20px;
				/*@editable*/ text-align:center;
			}

			/**
			* @tab Footer
			* @section footer link
			* @tip Set the styling for your email's footer links. Choose a color that helps them stand out from your text.
			*/
			.footerContent a:link, .footerContent a:visited, /* Yahoo! Mail Override */ .footerContent a .yshortcuts, .footerContent a span /* Yahoo! Mail Override */{
				/*@editable*/ color:#606060;
				/*@editable*/ font-weight:normal;
				/*@editable*/ text-decoration:underline;
			}
			
			
			a {color:#ffffff; text-decoration:none !important;}
			.button:hover {background:#ffffff; color:#999999 !important;}
			.button {border:3px solid #ffffff; text-align:center; font-family: "Helvetica Neue","Helvetica",Helvetica,Arial,sans-serif; padding:5px 10px; display:block; width:125px;}
            .date {font-size:12px; font-style:normal; letter-spacing:normal;}
            .dates {font-size:12px; font-style:normal; letter-spacing:normal;}
            #sitename {font-size:70px; font-style:italic;}
            .title {font-size:45px; font-weight:normal; line-height:55px;}
            p {font-size:15px; font-style:normal; font-weight:bold; margin-bottom:0 !important;}
            h2 {font-weight:normal; margin:25px 0 0 0;}
			
			
			
			
			
			

			/* /\/\/\/\/\/\/\/\/ MOBILE STYLES /\/\/\/\/\/\/\/\/ */

            @media only screen and (max-width: 480px){
				/* /\/\/\/\/\/\/ CLIENT-SPECIFIC MOBILE STYLES /\/\/\/\/\/\/ */
				body, table, td, p, a, li, blockquote{-webkit-text-size-adjust:none !important;} /* Prevent Webkit platforms from changing default text sizes */
                body{width:100% !important; min-width:100% !important;} /* Prevent iOS Mail from adding padding to the body */

				/* /\/\/\/\/\/\/ MOBILE RESET STYLES /\/\/\/\/\/\/ */
				#bodyCell{padding:10px !important;}

				/* /\/\/\/\/\/\/ MOBILE TEMPLATE STYLES /\/\/\/\/\/\/ */

				/* ======== Page Styles ======== */

				/**
				* @tab Mobile Styles
				* @section template width
				* @tip Make the template fluid for portrait or landscape view adaptability. If a fluid layout doesn't work for you, set the width to 300px instead.
				*/
				#templateContainer{
					max-width:480px !important;
					/*@editable*/ width:100% !important;
				}

				/**
				* @tab Mobile Styles
				* @section heading 1
				* @tip Make the first-level headings larger in size for better readability on small screens.
				*/
				h1{
					/*@editable*/ font-size:54px !important;
					/*@editable*/ line-height:100% !important;
					
				}

				/**
				* @tab Mobile Styles
				* @section heading 2
				* @tip Make the second-level headings larger in size for better readability on small screens.
				*/
				h2{
					/*@editable*/ font-size:20px !important;
					/*@editable*/ line-height:100% !important;
				}

				/**
				* @tab Mobile Styles
				* @section heading 3
				* @tip Make the third-level headings larger in size for better readability on small screens.
				*/
				h3{
					/*@editable*/ font-size:18px !important;
					/*@editable*/ line-height:100% !important;
				}

				/**
				* @tab Mobile Styles
				* @section heading 4
				* @tip Make the fourth-level headings larger in size for better readability on small screens.
				*/
				h4{
					/*@editable*/ font-size:16px !important;
					/*@editable*/ line-height:100% !important;
				}

				/* ======== Header Styles ======== */

				#templatePreheader{display:none !important;} /* Hide the template preheader to save space */

				/**
				* @tab Mobile Styles
				* @section header image
				* @tip Make the main header image fluid for portrait or landscape view adaptability, and set the image's original width as the max-width. If a fluid setting doesn't work, set the image width to half its original size instead.
				*/
				#headerImage{
					height:auto !important;
					/*@editable*/ max-width:600px !important;
					/*@editable*/ width:100% !important;
				}

				/**
				* @tab Mobile Styles
				* @section header text
				* @tip Make the header content text larger in size for better readability on small screens. We recommend a font size of at least 16px.
				*/
				.headerContent{
					/*@editable*/ font-size:20px !important;
					/*@editable*/ line-height:125% !important;
				}

				/* ======== Body Styles ======== */

				/**
				* @tab Mobile Styles
				* @section body text
				* @tip Make the body content text larger in size for better readability on small screens. We recommend a font size of at least 16px.
				*/
				.bodyContent{
					/*@editable*/ font-size:18px !important;
					/*@editable*/ line-height:125% !important;
				}

				/* ======== Footer Styles ======== */

				/**
				* @tab Mobile Styles
				* @section footer text
				* @tip Make the body content text larger in size for better readability on small screens.
				*/
				.footerContent{
       				/*@editable*/ font-size:12px !important;
    				/*@editable*/ line-height:150% !important;
				}

				.footerContent a{display:block !important;} /* Place footer social and utility links on their own lines, for easier access */
			}
		</style>
    </head>
    <body leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0">
    	<center>

            <div style="background-color:#222222;">
                <!--[if gte mso 9]>
                <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                <v:fill type="tile" src="http://feedmemusic.co/img/background3.jpg" color="#444444"/>
                </v:background>
                <![endif]-->
      
              	<table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable">
                	<tr>
                    	<td align="center" valign="top" id="bodyCell">
                        	<!-- BEGIN TEMPLATE // -->
                        	<table border="0" cellpadding="0" cellspacing="0" id="templateContainer">
                            	<tr>
                                	<td align="center" valign="top">
                                    	<!-- BEGIN PREHEADER // -->
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%" id="templatePreheader">
                                            <tr>
                                                <td valign="top" class="preheaderContent" style="padding-top:0px; padding-right:0px; padding-bottom:0px; padding-left:0px;" mc:edit="preheader_content00">
                                                </td>
                                                <!-- *|IFNOT:ARCHIVE_PAGE|* -->
                                                <td valign="top" width="180" class="preheaderContent" style="padding-top:0px; padding-right:0px; padding-bottom:0px; padding-left:0;" mc:edit="preheader_content01">
                                                </td>
                                                <!-- *|END:IF|* -->
                                            </tr>
                                        </table>
                                        <!-- // END PREHEADER -->
                                    </td>
                                </tr>
                            	
                            	<tr id = "header">
                                	<td align="center" valign="top" background="http://feedmemusic.co/img/background6.jpg" style = "background-size:cover; background-position:bottom;">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%" id="templateHeader">
                                            <tr>
                                                <td valign="top" class="headerContent" background="">
                                                	<a href="http://feedmemusic.co"><img src="http://feedmemusic.co/img/email-logo.png" style="max-width:480px;" id="headerImage" alt="Free Beer and Fiction. A gift for you this holiday season." /></a>
                                        			<h1 id = "sitename"><a href = "index.php">Feed Me <br>Music</a></h1>
                                        			<h2 >Portland, Maine's Live Music Feed</h2>
                                        			<p class = "dates"><span class = "today">Today, July 17th</span> - <span class = "last-day">Thursday, July 24th</span>
                                                    <br><br>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                
                                
                                
    
                            	


                                <!-- shows will autopopulate here from email.js -->
                                
                                
                                
                                
                                
    
    
                            	<tr id = "footer">
                                	<td align="center" valign="top">
                                    	<!-- BEGIN FOOTER // -->
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%" id="templateFooter">
                                		<br><br><br>
                                        <tr>
                                    		<td align = "center" valign="top" style = "padding-left:2px; width:100%;">
                                    			<a class="button" style = "font-size:14px;"href="http://feedmemusic.co/" target="_blank">feedmemusic.co/</a>
                                    		</td>
                                        </tr>
                                    </table>
                                        <!-- // END FOOTER -->
                                    </td>
                                </tr>
                            </table>
                            <!-- // END TEMPLATE -->
                        </td>
                    </tr>
                </table>
            </div>
        </center>  
        
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.2.min.js"><\/script>')</script>
        <script src="js/vendor/foundation/js/foundation.min.js"></script>
        <script src="js/plugins.js"></script>
        <script src="js/jquery.easing.min.js"></script>
        <script src="js/jquery.scrollTo-1.4.3.1.min.js"></script>
        <script src="js/moment.js"></script>
        <script src="js/email.js"></script>
    </body>
</html>