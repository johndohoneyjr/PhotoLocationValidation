# EXIF processor

Clone this repo to your hard disk
Make sure you have node.js and npm installed

There are 4 test images

1. Southern Hemisphere - Sydney
2. Europe - Italy
3. US - USC University in California
4. Pacific Islands - Hana, Maui

## Motivation

The intention of this program is to all you to determine the actual location of the photographer snapping the picture.  This assumes the location 
feature of the phone or camera is enabled.  Some of the images posted to the web since the beginning of the war have been pretty unbelievable.  This
program has the ability to deduce the precise GPS coordinates.  I have test pictures I have taken on the water and land, northern and southern hemispheres.

## Professional Witnesses:

This code is simple, with no elegant tricks.  The algorithm uses an open source library that:

1. Reads the EXIF Header off a JPG image -- provided the person taking the picture turned on "Location Sharing"

Then I coded 2 functions that:

2. Take the default GPS, Degree, Minutes and Seconds for both latitude and longitude and makes it easier to place on Google Maps to locate where this was taken
3. I tested this and my test images are included in the ./testImages sub-directory in this repo

Other ways to verify GPS data on an image is to use the Windows file property inspector or the Mac file info feature in Finder. The new Mac "Get Info" when you right click on the image in finder will show you where the image came from and how it got to your computer, establishing a chain of custody.
