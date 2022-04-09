var ExifImage = require('exif').ExifImage;
var jpgImage =  {};
var argv = require('yargs').argv;


function ParseDMSLat(input, gps) {
    //console.log("Input: " + input);
    var parts = input.toString().split(',');
    var lat = ConvertDMSToDD(parts[0], parts[1], parts[2], gps.GPSLatitudeRef );
    //console.log ("Latitude: " + lat);
    return lat;
}

function ParseDMSLong(input, gps) {
    var parts = input.toString().split(',');
    var long = ConvertDMSToDD(parts[0], parts[1], parts[2], gps.GPSLongitudeRef );
    //console.log ("Longitude: " + long );
    return long;
}

function ConvertDMSToDD(degrees, minutes, seconds, direction) {
    var dd = parseFloat(degrees) + parseInt(minutes,10)/60 + parseInt(seconds,10)/(60*60);
    if (direction == "S" || direction == "W") {
        dd = dd * -1;
    } // Don't do anything for N or E
    return dd;
}


try {
    jpgImage = argv.image;
    if (typeof jpgImage === "undefined" || jpgImage == "" ) {
        console.log ("image was not passed to processor, USAGE: node index.js --image=someImage.jpg");
    }
    new ExifImage({ image : jpgImage }, function (error, exifData) {
        if (error)
            console.log('Error: '+error.message);
        else
         {
            if ( !Object.keys(exifData.gps).length ) {
             console.log("No GPS Coordinate data found in the EXIF Header");
             process.exit(1) 
	    }
            console.log(exifData.gps);
            var imageLat = ParseDMSLat (exifData.gps.GPSLatitude, exifData.gps);
            var imageLong = ParseDMSLong(exifData.gps.GPSLongitude, exifData.gps);
            console.log( "Place where image was taken: " +"("+imageLat+","+imageLong+")");
         }
    });
} catch (error) {
    console.log('Error: ' + error.message);
}
