EXIF processor

Clone this repo to your hard disk
Make sure you have node.js and npm installed

There are 4 test images

1. Southern Hemisphere - Sydney
2. Europe - Italy
3. US - USC University in California
4. Pacific Islands - Hana, Maui

This was a decent test set exercising Northern and Southern Hemispheres.

The intention of this program is to all the Florida Attorney General to prosecute the rat bastards gouging my co-workers and 
friends that live in South Florida during the Hurricane IRMA evacuation.  If this nails a few of those greedy, optunistic jerks
this time investment is well worth it.

Professional Witnesses:

This code is simple, with no elegant tricks.  The algorithm uses an open source library that:

1. Reads the EXIF Header off a JPG image -- provided the person taking the picture turned on "Location Sharing"

Then I coded 2 functions that:

2. Take the default GPS, Degree, Minutes and Seconds for both latitude and longitude and makes it easier to place on Google Maps to locate a Gas Gouger
3. I tested this and my test images are included in the ./testImages sub-directory in this repo

Proper Data Handling
1. Take the witnesses phone, send the image to a secure server
2. Process the image on that machine.

This way there is no way for anyone to touch the image, or change the EXIF data.  Proper data nadling is key to this making of breaking your case.

Other ways to verify GPS data on an image is to use the Windows file property inspector or the Mac file info feature in Finder. The new Mac "Get Info" when you right click on the image in finder will show you where the image came from and how it got to your computer, establishing a chain of custody.
