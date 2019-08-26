/*! @codeur/cropit - v0.6.0-alpha.0 <http://scottcheng.github.io/cropit> */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jQuery"));
	else if(typeof define === 'function' && define.amd)
		define(["jQuery"], factory);
	else if(typeof exports === 'object')
		exports["cropit"] = factory(require("jQuery"));
	else
		root["cropit"] = factory(root["jQuery"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function() {

    var debug = false;

    var root = this;

    var EXIF = function(obj) {
        if (obj instanceof EXIF) return obj;
        if (!(this instanceof EXIF)) return new EXIF(obj);
        this.EXIFwrapped = obj;
    };

    if (true) {
        if ( true && module.exports) {
            exports = module.exports = EXIF;
        }
        exports.EXIF = EXIF;
    } else {}

    var ExifTags = EXIF.Tags = {

        // version tags
        0x9000 : "ExifVersion",             // EXIF version
        0xA000 : "FlashpixVersion",         // Flashpix format version

        // colorspace tags
        0xA001 : "ColorSpace",              // Color space information tag

        // image configuration
        0xA002 : "PixelXDimension",         // Valid width of meaningful image
        0xA003 : "PixelYDimension",         // Valid height of meaningful image
        0x9101 : "ComponentsConfiguration", // Information about channels
        0x9102 : "CompressedBitsPerPixel",  // Compressed bits per pixel

        // user information
        0x927C : "MakerNote",               // Any desired information written by the manufacturer
        0x9286 : "UserComment",             // Comments by user

        // related file
        0xA004 : "RelatedSoundFile",        // Name of related sound file

        // date and time
        0x9003 : "DateTimeOriginal",        // Date and time when the original image was generated
        0x9004 : "DateTimeDigitized",       // Date and time when the image was stored digitally
        0x9290 : "SubsecTime",              // Fractions of seconds for DateTime
        0x9291 : "SubsecTimeOriginal",      // Fractions of seconds for DateTimeOriginal
        0x9292 : "SubsecTimeDigitized",     // Fractions of seconds for DateTimeDigitized

        // picture-taking conditions
        0x829A : "ExposureTime",            // Exposure time (in seconds)
        0x829D : "FNumber",                 // F number
        0x8822 : "ExposureProgram",         // Exposure program
        0x8824 : "SpectralSensitivity",     // Spectral sensitivity
        0x8827 : "ISOSpeedRatings",         // ISO speed rating
        0x8828 : "OECF",                    // Optoelectric conversion factor
        0x9201 : "ShutterSpeedValue",       // Shutter speed
        0x9202 : "ApertureValue",           // Lens aperture
        0x9203 : "BrightnessValue",         // Value of brightness
        0x9204 : "ExposureBias",            // Exposure bias
        0x9205 : "MaxApertureValue",        // Smallest F number of lens
        0x9206 : "SubjectDistance",         // Distance to subject in meters
        0x9207 : "MeteringMode",            // Metering mode
        0x9208 : "LightSource",             // Kind of light source
        0x9209 : "Flash",                   // Flash status
        0x9214 : "SubjectArea",             // Location and area of main subject
        0x920A : "FocalLength",             // Focal length of the lens in mm
        0xA20B : "FlashEnergy",             // Strobe energy in BCPS
        0xA20C : "SpatialFrequencyResponse",    //
        0xA20E : "FocalPlaneXResolution",   // Number of pixels in width direction per FocalPlaneResolutionUnit
        0xA20F : "FocalPlaneYResolution",   // Number of pixels in height direction per FocalPlaneResolutionUnit
        0xA210 : "FocalPlaneResolutionUnit",    // Unit for measuring FocalPlaneXResolution and FocalPlaneYResolution
        0xA214 : "SubjectLocation",         // Location of subject in image
        0xA215 : "ExposureIndex",           // Exposure index selected on camera
        0xA217 : "SensingMethod",           // Image sensor type
        0xA300 : "FileSource",              // Image source (3 == DSC)
        0xA301 : "SceneType",               // Scene type (1 == directly photographed)
        0xA302 : "CFAPattern",              // Color filter array geometric pattern
        0xA401 : "CustomRendered",          // Special processing
        0xA402 : "ExposureMode",            // Exposure mode
        0xA403 : "WhiteBalance",            // 1 = auto white balance, 2 = manual
        0xA404 : "DigitalZoomRation",       // Digital zoom ratio
        0xA405 : "FocalLengthIn35mmFilm",   // Equivalent foacl length assuming 35mm film camera (in mm)
        0xA406 : "SceneCaptureType",        // Type of scene
        0xA407 : "GainControl",             // Degree of overall image gain adjustment
        0xA408 : "Contrast",                // Direction of contrast processing applied by camera
        0xA409 : "Saturation",              // Direction of saturation processing applied by camera
        0xA40A : "Sharpness",               // Direction of sharpness processing applied by camera
        0xA40B : "DeviceSettingDescription",    //
        0xA40C : "SubjectDistanceRange",    // Distance to subject

        // other tags
        0xA005 : "InteroperabilityIFDPointer",
        0xA420 : "ImageUniqueID"            // Identifier assigned uniquely to each image
    };

    var TiffTags = EXIF.TiffTags = {
        0x0100 : "ImageWidth",
        0x0101 : "ImageHeight",
        0x8769 : "ExifIFDPointer",
        0x8825 : "GPSInfoIFDPointer",
        0xA005 : "InteroperabilityIFDPointer",
        0x0102 : "BitsPerSample",
        0x0103 : "Compression",
        0x0106 : "PhotometricInterpretation",
        0x0112 : "Orientation",
        0x0115 : "SamplesPerPixel",
        0x011C : "PlanarConfiguration",
        0x0212 : "YCbCrSubSampling",
        0x0213 : "YCbCrPositioning",
        0x011A : "XResolution",
        0x011B : "YResolution",
        0x0128 : "ResolutionUnit",
        0x0111 : "StripOffsets",
        0x0116 : "RowsPerStrip",
        0x0117 : "StripByteCounts",
        0x0201 : "JPEGInterchangeFormat",
        0x0202 : "JPEGInterchangeFormatLength",
        0x012D : "TransferFunction",
        0x013E : "WhitePoint",
        0x013F : "PrimaryChromaticities",
        0x0211 : "YCbCrCoefficients",
        0x0214 : "ReferenceBlackWhite",
        0x0132 : "DateTime",
        0x010E : "ImageDescription",
        0x010F : "Make",
        0x0110 : "Model",
        0x0131 : "Software",
        0x013B : "Artist",
        0x8298 : "Copyright"
    };

    var GPSTags = EXIF.GPSTags = {
        0x0000 : "GPSVersionID",
        0x0001 : "GPSLatitudeRef",
        0x0002 : "GPSLatitude",
        0x0003 : "GPSLongitudeRef",
        0x0004 : "GPSLongitude",
        0x0005 : "GPSAltitudeRef",
        0x0006 : "GPSAltitude",
        0x0007 : "GPSTimeStamp",
        0x0008 : "GPSSatellites",
        0x0009 : "GPSStatus",
        0x000A : "GPSMeasureMode",
        0x000B : "GPSDOP",
        0x000C : "GPSSpeedRef",
        0x000D : "GPSSpeed",
        0x000E : "GPSTrackRef",
        0x000F : "GPSTrack",
        0x0010 : "GPSImgDirectionRef",
        0x0011 : "GPSImgDirection",
        0x0012 : "GPSMapDatum",
        0x0013 : "GPSDestLatitudeRef",
        0x0014 : "GPSDestLatitude",
        0x0015 : "GPSDestLongitudeRef",
        0x0016 : "GPSDestLongitude",
        0x0017 : "GPSDestBearingRef",
        0x0018 : "GPSDestBearing",
        0x0019 : "GPSDestDistanceRef",
        0x001A : "GPSDestDistance",
        0x001B : "GPSProcessingMethod",
        0x001C : "GPSAreaInformation",
        0x001D : "GPSDateStamp",
        0x001E : "GPSDifferential"
    };

     // EXIF 2.3 Spec
    var IFD1Tags = EXIF.IFD1Tags = {
        0x0100: "ImageWidth",
        0x0101: "ImageHeight",
        0x0102: "BitsPerSample",
        0x0103: "Compression",
        0x0106: "PhotometricInterpretation",
        0x0111: "StripOffsets",
        0x0112: "Orientation",
        0x0115: "SamplesPerPixel",
        0x0116: "RowsPerStrip",
        0x0117: "StripByteCounts",
        0x011A: "XResolution",
        0x011B: "YResolution",
        0x011C: "PlanarConfiguration",
        0x0128: "ResolutionUnit",
        0x0201: "JpegIFOffset",    // When image format is JPEG, this value show offset to JPEG data stored.(aka "ThumbnailOffset" or "JPEGInterchangeFormat")
        0x0202: "JpegIFByteCount", // When image format is JPEG, this value shows data size of JPEG image (aka "ThumbnailLength" or "JPEGInterchangeFormatLength")
        0x0211: "YCbCrCoefficients",
        0x0212: "YCbCrSubSampling",
        0x0213: "YCbCrPositioning",
        0x0214: "ReferenceBlackWhite"
    };

    var StringValues = EXIF.StringValues = {
        ExposureProgram : {
            0 : "Not defined",
            1 : "Manual",
            2 : "Normal program",
            3 : "Aperture priority",
            4 : "Shutter priority",
            5 : "Creative program",
            6 : "Action program",
            7 : "Portrait mode",
            8 : "Landscape mode"
        },
        MeteringMode : {
            0 : "Unknown",
            1 : "Average",
            2 : "CenterWeightedAverage",
            3 : "Spot",
            4 : "MultiSpot",
            5 : "Pattern",
            6 : "Partial",
            255 : "Other"
        },
        LightSource : {
            0 : "Unknown",
            1 : "Daylight",
            2 : "Fluorescent",
            3 : "Tungsten (incandescent light)",
            4 : "Flash",
            9 : "Fine weather",
            10 : "Cloudy weather",
            11 : "Shade",
            12 : "Daylight fluorescent (D 5700 - 7100K)",
            13 : "Day white fluorescent (N 4600 - 5400K)",
            14 : "Cool white fluorescent (W 3900 - 4500K)",
            15 : "White fluorescent (WW 3200 - 3700K)",
            17 : "Standard light A",
            18 : "Standard light B",
            19 : "Standard light C",
            20 : "D55",
            21 : "D65",
            22 : "D75",
            23 : "D50",
            24 : "ISO studio tungsten",
            255 : "Other"
        },
        Flash : {
            0x0000 : "Flash did not fire",
            0x0001 : "Flash fired",
            0x0005 : "Strobe return light not detected",
            0x0007 : "Strobe return light detected",
            0x0009 : "Flash fired, compulsory flash mode",
            0x000D : "Flash fired, compulsory flash mode, return light not detected",
            0x000F : "Flash fired, compulsory flash mode, return light detected",
            0x0010 : "Flash did not fire, compulsory flash mode",
            0x0018 : "Flash did not fire, auto mode",
            0x0019 : "Flash fired, auto mode",
            0x001D : "Flash fired, auto mode, return light not detected",
            0x001F : "Flash fired, auto mode, return light detected",
            0x0020 : "No flash function",
            0x0041 : "Flash fired, red-eye reduction mode",
            0x0045 : "Flash fired, red-eye reduction mode, return light not detected",
            0x0047 : "Flash fired, red-eye reduction mode, return light detected",
            0x0049 : "Flash fired, compulsory flash mode, red-eye reduction mode",
            0x004D : "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
            0x004F : "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
            0x0059 : "Flash fired, auto mode, red-eye reduction mode",
            0x005D : "Flash fired, auto mode, return light not detected, red-eye reduction mode",
            0x005F : "Flash fired, auto mode, return light detected, red-eye reduction mode"
        },
        SensingMethod : {
            1 : "Not defined",
            2 : "One-chip color area sensor",
            3 : "Two-chip color area sensor",
            4 : "Three-chip color area sensor",
            5 : "Color sequential area sensor",
            7 : "Trilinear sensor",
            8 : "Color sequential linear sensor"
        },
        SceneCaptureType : {
            0 : "Standard",
            1 : "Landscape",
            2 : "Portrait",
            3 : "Night scene"
        },
        SceneType : {
            1 : "Directly photographed"
        },
        CustomRendered : {
            0 : "Normal process",
            1 : "Custom process"
        },
        WhiteBalance : {
            0 : "Auto white balance",
            1 : "Manual white balance"
        },
        GainControl : {
            0 : "None",
            1 : "Low gain up",
            2 : "High gain up",
            3 : "Low gain down",
            4 : "High gain down"
        },
        Contrast : {
            0 : "Normal",
            1 : "Soft",
            2 : "Hard"
        },
        Saturation : {
            0 : "Normal",
            1 : "Low saturation",
            2 : "High saturation"
        },
        Sharpness : {
            0 : "Normal",
            1 : "Soft",
            2 : "Hard"
        },
        SubjectDistanceRange : {
            0 : "Unknown",
            1 : "Macro",
            2 : "Close view",
            3 : "Distant view"
        },
        FileSource : {
            3 : "DSC"
        },

        Components : {
            0 : "",
            1 : "Y",
            2 : "Cb",
            3 : "Cr",
            4 : "R",
            5 : "G",
            6 : "B"
        }
    };

    function addEvent(element, event, handler) {
        if (element.addEventListener) {
            element.addEventListener(event, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + event, handler);
        }
    }

    function imageHasData(img) {
        return !!(img.exifdata);
    }


    function base64ToArrayBuffer(base64, contentType) {
        contentType = contentType || base64.match(/^data\:([^\;]+)\;base64,/mi)[1] || ''; // e.g. 'data:image/jpeg;base64,...' => 'image/jpeg'
        base64 = base64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
        var binary = atob(base64);
        var len = binary.length;
        var buffer = new ArrayBuffer(len);
        var view = new Uint8Array(buffer);
        for (var i = 0; i < len; i++) {
            view[i] = binary.charCodeAt(i);
        }
        return buffer;
    }

    function objectURLToBlob(url, callback) {
        var http = new XMLHttpRequest();
        http.open("GET", url, true);
        http.responseType = "blob";
        http.onload = function(e) {
            if (this.status == 200 || this.status === 0) {
                callback(this.response);
            }
        };
        http.send();
    }

    function getImageData(img, callback) {
        function handleBinaryFile(binFile) {
            var data = findEXIFinJPEG(binFile);
            img.exifdata = data || {};
            var iptcdata = findIPTCinJPEG(binFile);
            img.iptcdata = iptcdata || {};
            if (EXIF.isXmpEnabled) {
               var xmpdata= findXMPinJPEG(binFile);
               img.xmpdata = xmpdata || {};               
            }
            if (callback) {
                callback.call(img);
            }
        }

        if (img.src) {
            if (/^data\:/i.test(img.src)) { // Data URI
                var arrayBuffer = base64ToArrayBuffer(img.src);
                handleBinaryFile(arrayBuffer);

            } else if (/^blob\:/i.test(img.src)) { // Object URL
                var fileReader = new FileReader();
                fileReader.onload = function(e) {
                    handleBinaryFile(e.target.result);
                };
                objectURLToBlob(img.src, function (blob) {
                    fileReader.readAsArrayBuffer(blob);
                });
            } else {
                var http = new XMLHttpRequest();
                http.onload = function() {
                    if (this.status == 200 || this.status === 0) {
                        handleBinaryFile(http.response);
                    } else {
                        throw "Could not load image";
                    }
                    http = null;
                };
                http.open("GET", img.src, true);
                http.responseType = "arraybuffer";
                http.send(null);
            }
        } else if (self.FileReader && (img instanceof self.Blob || img instanceof self.File)) {
            var fileReader = new FileReader();
            fileReader.onload = function(e) {
                if (debug) console.log("Got file of length " + e.target.result.byteLength);
                handleBinaryFile(e.target.result);
            };

            fileReader.readAsArrayBuffer(img);
        }
    }

    function findEXIFinJPEG(file) {
        var dataView = new DataView(file);

        if (debug) console.log("Got file of length " + file.byteLength);
        if ((dataView.getUint8(0) != 0xFF) || (dataView.getUint8(1) != 0xD8)) {
            if (debug) console.log("Not a valid JPEG");
            return false; // not a valid jpeg
        }

        var offset = 2,
            length = file.byteLength,
            marker;

        while (offset < length) {
            if (dataView.getUint8(offset) != 0xFF) {
                if (debug) console.log("Not a valid marker at offset " + offset + ", found: " + dataView.getUint8(offset));
                return false; // not a valid marker, something is wrong
            }

            marker = dataView.getUint8(offset + 1);
            if (debug) console.log(marker);

            // we could implement handling for other markers here,
            // but we're only looking for 0xFFE1 for EXIF data

            if (marker == 225) {
                if (debug) console.log("Found 0xFFE1 marker");

                return readEXIFData(dataView, offset + 4, dataView.getUint16(offset + 2) - 2);

                // offset += 2 + file.getShortAt(offset+2, true);

            } else {
                offset += 2 + dataView.getUint16(offset+2);
            }

        }

    }

    function findIPTCinJPEG(file) {
        var dataView = new DataView(file);

        if (debug) console.log("Got file of length " + file.byteLength);
        if ((dataView.getUint8(0) != 0xFF) || (dataView.getUint8(1) != 0xD8)) {
            if (debug) console.log("Not a valid JPEG");
            return false; // not a valid jpeg
        }

        var offset = 2,
            length = file.byteLength;


        var isFieldSegmentStart = function(dataView, offset){
            return (
                dataView.getUint8(offset) === 0x38 &&
                dataView.getUint8(offset+1) === 0x42 &&
                dataView.getUint8(offset+2) === 0x49 &&
                dataView.getUint8(offset+3) === 0x4D &&
                dataView.getUint8(offset+4) === 0x04 &&
                dataView.getUint8(offset+5) === 0x04
            );
        };

        while (offset < length) {

            if ( isFieldSegmentStart(dataView, offset )){

                // Get the length of the name header (which is padded to an even number of bytes)
                var nameHeaderLength = dataView.getUint8(offset+7);
                if(nameHeaderLength % 2 !== 0) nameHeaderLength += 1;
                // Check for pre photoshop 6 format
                if(nameHeaderLength === 0) {
                    // Always 4
                    nameHeaderLength = 4;
                }

                var startOffset = offset + 8 + nameHeaderLength;
                var sectionLength = dataView.getUint16(offset + 6 + nameHeaderLength);

                return readIPTCData(file, startOffset, sectionLength);

                break;

            }


            // Not the marker, continue searching
            offset++;

        }

    }
    var IptcFieldMap = {
        0x78 : 'caption',
        0x6E : 'credit',
        0x19 : 'keywords',
        0x37 : 'dateCreated',
        0x50 : 'byline',
        0x55 : 'bylineTitle',
        0x7A : 'captionWriter',
        0x69 : 'headline',
        0x74 : 'copyright',
        0x0F : 'category'
    };
    function readIPTCData(file, startOffset, sectionLength){
        var dataView = new DataView(file);
        var data = {};
        var fieldValue, fieldName, dataSize, segmentType, segmentSize;
        var segmentStartPos = startOffset;
        while(segmentStartPos < startOffset+sectionLength) {
            if(dataView.getUint8(segmentStartPos) === 0x1C && dataView.getUint8(segmentStartPos+1) === 0x02){
                segmentType = dataView.getUint8(segmentStartPos+2);
                if(segmentType in IptcFieldMap) {
                    dataSize = dataView.getInt16(segmentStartPos+3);
                    segmentSize = dataSize + 5;
                    fieldName = IptcFieldMap[segmentType];
                    fieldValue = getStringFromDB(dataView, segmentStartPos+5, dataSize);
                    // Check if we already stored a value with this name
                    if(data.hasOwnProperty(fieldName)) {
                        // Value already stored with this name, create multivalue field
                        if(data[fieldName] instanceof Array) {
                            data[fieldName].push(fieldValue);
                        }
                        else {
                            data[fieldName] = [data[fieldName], fieldValue];
                        }
                    }
                    else {
                        data[fieldName] = fieldValue;
                    }
                }

            }
            segmentStartPos++;
        }
        return data;
    }



    function readTags(file, tiffStart, dirStart, strings, bigEnd) {
        var entries = file.getUint16(dirStart, !bigEnd),
            tags = {},
            entryOffset, tag,
            i;

        for (i=0;i<entries;i++) {
            entryOffset = dirStart + i*12 + 2;
            tag = strings[file.getUint16(entryOffset, !bigEnd)];
            if (!tag && debug) console.log("Unknown tag: " + file.getUint16(entryOffset, !bigEnd));
            tags[tag] = readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd);
        }
        return tags;
    }


    function readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd) {
        var type = file.getUint16(entryOffset+2, !bigEnd),
            numValues = file.getUint32(entryOffset+4, !bigEnd),
            valueOffset = file.getUint32(entryOffset+8, !bigEnd) + tiffStart,
            offset,
            vals, val, n,
            numerator, denominator;

        switch (type) {
            case 1: // byte, 8-bit unsigned int
            case 7: // undefined, 8-bit byte, value depending on field
                if (numValues == 1) {
                    return file.getUint8(entryOffset + 8, !bigEnd);
                } else {
                    offset = numValues > 4 ? valueOffset : (entryOffset + 8);
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getUint8(offset + n);
                    }
                    return vals;
                }

            case 2: // ascii, 8-bit byte
                offset = numValues > 4 ? valueOffset : (entryOffset + 8);
                return getStringFromDB(file, offset, numValues-1);

            case 3: // short, 16 bit int
                if (numValues == 1) {
                    return file.getUint16(entryOffset + 8, !bigEnd);
                } else {
                    offset = numValues > 2 ? valueOffset : (entryOffset + 8);
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getUint16(offset + 2*n, !bigEnd);
                    }
                    return vals;
                }

            case 4: // long, 32 bit int
                if (numValues == 1) {
                    return file.getUint32(entryOffset + 8, !bigEnd);
                } else {
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getUint32(valueOffset + 4*n, !bigEnd);
                    }
                    return vals;
                }

            case 5:    // rational = two long values, first is numerator, second is denominator
                if (numValues == 1) {
                    numerator = file.getUint32(valueOffset, !bigEnd);
                    denominator = file.getUint32(valueOffset+4, !bigEnd);
                    val = new Number(numerator / denominator);
                    val.numerator = numerator;
                    val.denominator = denominator;
                    return val;
                } else {
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        numerator = file.getUint32(valueOffset + 8*n, !bigEnd);
                        denominator = file.getUint32(valueOffset+4 + 8*n, !bigEnd);
                        vals[n] = new Number(numerator / denominator);
                        vals[n].numerator = numerator;
                        vals[n].denominator = denominator;
                    }
                    return vals;
                }

            case 9: // slong, 32 bit signed int
                if (numValues == 1) {
                    return file.getInt32(entryOffset + 8, !bigEnd);
                } else {
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getInt32(valueOffset + 4*n, !bigEnd);
                    }
                    return vals;
                }

            case 10: // signed rational, two slongs, first is numerator, second is denominator
                if (numValues == 1) {
                    return file.getInt32(valueOffset, !bigEnd) / file.getInt32(valueOffset+4, !bigEnd);
                } else {
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getInt32(valueOffset + 8*n, !bigEnd) / file.getInt32(valueOffset+4 + 8*n, !bigEnd);
                    }
                    return vals;
                }
        }
    }

    /**
    * Given an IFD (Image File Directory) start offset
    * returns an offset to next IFD or 0 if it's the last IFD.
    */
    function getNextIFDOffset(dataView, dirStart, bigEnd){
        //the first 2bytes means the number of directory entries contains in this IFD
        var entries = dataView.getUint16(dirStart, !bigEnd);

        // After last directory entry, there is a 4bytes of data,
        // it means an offset to next IFD.
        // If its value is '0x00000000', it means this is the last IFD and there is no linked IFD.

        return dataView.getUint32(dirStart + 2 + entries * 12, !bigEnd); // each entry is 12 bytes long
    }

    function readThumbnailImage(dataView, tiffStart, firstIFDOffset, bigEnd){
        // get the IFD1 offset
        var IFD1OffsetPointer = getNextIFDOffset(dataView, tiffStart+firstIFDOffset, bigEnd);

        if (!IFD1OffsetPointer) {
            // console.log('******** IFD1Offset is empty, image thumb not found ********');
            return {};
        }
        else if (IFD1OffsetPointer > dataView.byteLength) { // this should not happen
            // console.log('******** IFD1Offset is outside the bounds of the DataView ********');
            return {};
        }
        // console.log('*******  thumbnail IFD offset (IFD1) is: %s', IFD1OffsetPointer);

        var thumbTags = readTags(dataView, tiffStart, tiffStart + IFD1OffsetPointer, IFD1Tags, bigEnd)

        // EXIF 2.3 specification for JPEG format thumbnail

        // If the value of Compression(0x0103) Tag in IFD1 is '6', thumbnail image format is JPEG.
        // Most of Exif image uses JPEG format for thumbnail. In that case, you can get offset of thumbnail
        // by JpegIFOffset(0x0201) Tag in IFD1, size of thumbnail by JpegIFByteCount(0x0202) Tag.
        // Data format is ordinary JPEG format, starts from 0xFFD8 and ends by 0xFFD9. It seems that
        // JPEG format and 160x120pixels of size are recommended thumbnail format for Exif2.1 or later.

        if (thumbTags['Compression']) {
            // console.log('Thumbnail image found!');

            switch (thumbTags['Compression']) {
                case 6:
                    // console.log('Thumbnail image format is JPEG');
                    if (thumbTags.JpegIFOffset && thumbTags.JpegIFByteCount) {
                    // extract the thumbnail
                        var tOffset = tiffStart + thumbTags.JpegIFOffset;
                        var tLength = thumbTags.JpegIFByteCount;
                        thumbTags['blob'] = new Blob([new Uint8Array(dataView.buffer, tOffset, tLength)], {
                            type: 'image/jpeg'
                        });
                    }
                break;

            case 1:
                console.log("Thumbnail image format is TIFF, which is not implemented.");
                break;
            default:
                console.log("Unknown thumbnail image format '%s'", thumbTags['Compression']);
            }
        }
        else if (thumbTags['PhotometricInterpretation'] == 2) {
            console.log("Thumbnail image format is RGB, which is not implemented.");
        }
        return thumbTags;
    }

    function getStringFromDB(buffer, start, length) {
        var outstr = "";
        for (n = start; n < start+length; n++) {
            outstr += String.fromCharCode(buffer.getUint8(n));
        }
        return outstr;
    }

    function readEXIFData(file, start) {
        if (getStringFromDB(file, start, 4) != "Exif") {
            if (debug) console.log("Not valid EXIF data! " + getStringFromDB(file, start, 4));
            return false;
        }

        var bigEnd,
            tags, tag,
            exifData, gpsData,
            tiffOffset = start + 6;

        // test for TIFF validity and endianness
        if (file.getUint16(tiffOffset) == 0x4949) {
            bigEnd = false;
        } else if (file.getUint16(tiffOffset) == 0x4D4D) {
            bigEnd = true;
        } else {
            if (debug) console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)");
            return false;
        }

        if (file.getUint16(tiffOffset+2, !bigEnd) != 0x002A) {
            if (debug) console.log("Not valid TIFF data! (no 0x002A)");
            return false;
        }

        var firstIFDOffset = file.getUint32(tiffOffset+4, !bigEnd);

        if (firstIFDOffset < 0x00000008) {
            if (debug) console.log("Not valid TIFF data! (First offset less than 8)", file.getUint32(tiffOffset+4, !bigEnd));
            return false;
        }

        tags = readTags(file, tiffOffset, tiffOffset + firstIFDOffset, TiffTags, bigEnd);

        if (tags.ExifIFDPointer) {
            exifData = readTags(file, tiffOffset, tiffOffset + tags.ExifIFDPointer, ExifTags, bigEnd);
            for (tag in exifData) {
                switch (tag) {
                    case "LightSource" :
                    case "Flash" :
                    case "MeteringMode" :
                    case "ExposureProgram" :
                    case "SensingMethod" :
                    case "SceneCaptureType" :
                    case "SceneType" :
                    case "CustomRendered" :
                    case "WhiteBalance" :
                    case "GainControl" :
                    case "Contrast" :
                    case "Saturation" :
                    case "Sharpness" :
                    case "SubjectDistanceRange" :
                    case "FileSource" :
                        exifData[tag] = StringValues[tag][exifData[tag]];
                        break;

                    case "ExifVersion" :
                    case "FlashpixVersion" :
                        exifData[tag] = String.fromCharCode(exifData[tag][0], exifData[tag][1], exifData[tag][2], exifData[tag][3]);
                        break;

                    case "ComponentsConfiguration" :
                        exifData[tag] =
                            StringValues.Components[exifData[tag][0]] +
                            StringValues.Components[exifData[tag][1]] +
                            StringValues.Components[exifData[tag][2]] +
                            StringValues.Components[exifData[tag][3]];
                        break;
                }
                tags[tag] = exifData[tag];
            }
        }

        if (tags.GPSInfoIFDPointer) {
            gpsData = readTags(file, tiffOffset, tiffOffset + tags.GPSInfoIFDPointer, GPSTags, bigEnd);
            for (tag in gpsData) {
                switch (tag) {
                    case "GPSVersionID" :
                        gpsData[tag] = gpsData[tag][0] +
                            "." + gpsData[tag][1] +
                            "." + gpsData[tag][2] +
                            "." + gpsData[tag][3];
                        break;
                }
                tags[tag] = gpsData[tag];
            }
        }

        // extract thumbnail
        tags['thumbnail'] = readThumbnailImage(file, tiffOffset, firstIFDOffset, bigEnd);

        return tags;
    }

   function findXMPinJPEG(file) {

        if (!('DOMParser' in self)) {
            // console.warn('XML parsing not supported without DOMParser');
            return;
        }
        var dataView = new DataView(file);

        if (debug) console.log("Got file of length " + file.byteLength);
        if ((dataView.getUint8(0) != 0xFF) || (dataView.getUint8(1) != 0xD8)) {
           if (debug) console.log("Not a valid JPEG");
           return false; // not a valid jpeg
        }

        var offset = 2,
            length = file.byteLength,
            dom = new DOMParser();

        while (offset < (length-4)) {
            if (getStringFromDB(dataView, offset, 4) == "http") {
                var startOffset = offset - 1;
                var sectionLength = dataView.getUint16(offset - 2) - 1;
                var xmpString = getStringFromDB(dataView, startOffset, sectionLength)
                var xmpEndIndex = xmpString.indexOf('xmpmeta>') + 8;
                xmpString = xmpString.substring( xmpString.indexOf( '<x:xmpmeta' ), xmpEndIndex );

                var indexOfXmp = xmpString.indexOf('x:xmpmeta') + 10
                //Many custom written programs embed xmp/xml without any namespace. Following are some of them.
                //Without these namespaces, XML is thought to be invalid by parsers
                xmpString = xmpString.slice(0, indexOfXmp)
                            + 'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" '
                            + 'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" '
                            + 'xmlns:tiff="http://ns.adobe.com/tiff/1.0/" '
                            + 'xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" '
                            + 'xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" '
                            + 'xmlns:exif="http://ns.adobe.com/exif/1.0/" '
                            + 'xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" '
                            + 'xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" '
                            + 'xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" '
                            + 'xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" '
                            + 'xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" '
                            + xmpString.slice(indexOfXmp)

                var domDocument = dom.parseFromString( xmpString, 'text/xml' );
                return xml2Object(domDocument);
            } else{
             offset++;
            }
        }
    }

    function xml2json(xml) {
        var json = {};
      
        if (xml.nodeType == 1) { // element node
          if (xml.attributes.length > 0) {
            json['@attributes'] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
              var attribute = xml.attributes.item(j);
              json['@attributes'][attribute.nodeName] = attribute.nodeValue;
            }
          }
        } else if (xml.nodeType == 3) { // text node
          return xml.nodeValue;
        }
      
        // deal with children
        if (xml.hasChildNodes()) {
          for(var i = 0; i < xml.childNodes.length; i++) {
            var child = xml.childNodes.item(i);
            var nodeName = child.nodeName;
            if (json[nodeName] == null) {
              json[nodeName] = xml2json(child);
            } else {
              if (json[nodeName].push == null) {
                var old = json[nodeName];
                json[nodeName] = [];
                json[nodeName].push(old);
              }
              json[nodeName].push(xml2json(child));
            }
          }
        }
        
        return json;
    }

    function xml2Object(xml) {
        try {
            var obj = {};
            if (xml.children.length > 0) {
              for (var i = 0; i < xml.children.length; i++) {
                var item = xml.children.item(i);
                var attributes = item.attributes;
                for(var idx in attributes) {
                    var itemAtt = attributes[idx];
                    var dataKey = itemAtt.nodeName;
                    var dataValue = itemAtt.nodeValue;

                    if(dataKey !== undefined) {
                        obj[dataKey] = dataValue;
                    }
                }
                var nodeName = item.nodeName;

                if (typeof (obj[nodeName]) == "undefined") {
                  obj[nodeName] = xml2json(item);
                } else {
                  if (typeof (obj[nodeName].push) == "undefined") {
                    var old = obj[nodeName];

                    obj[nodeName] = [];
                    obj[nodeName].push(old);
                  }
                  obj[nodeName].push(xml2json(item));
                }
              }
            } else {
              obj = xml.textContent;
            }
            return obj;
          } catch (e) {
              console.log(e.message);
          }
    }

    EXIF.enableXmp = function() {
        EXIF.isXmpEnabled = true;
    }

    EXIF.disableXmp = function() {
        EXIF.isXmpEnabled = false;
    }

    EXIF.getData = function(img, callback) {
        if (((self.Image && img instanceof self.Image)
            || (self.HTMLImageElement && img instanceof self.HTMLImageElement))
            && !img.complete)
            return false;

        if (!imageHasData(img)) {
            getImageData(img, callback);
        } else {
            if (callback) {
                callback.call(img);
            }
        }
        return true;
    }

    EXIF.getTag = function(img, tag) {
        if (!imageHasData(img)) return;
        return img.exifdata[tag];
    }
    
    EXIF.getIptcTag = function(img, tag) {
        if (!imageHasData(img)) return;
        return img.iptcdata[tag];
    }

    EXIF.getAllTags = function(img) {
        if (!imageHasData(img)) return {};
        var a,
            data = img.exifdata,
            tags = {};
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                tags[a] = data[a];
            }
        }
        return tags;
    }
    
    EXIF.getAllIptcTags = function(img) {
        if (!imageHasData(img)) return {};
        var a,
            data = img.iptcdata,
            tags = {};
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                tags[a] = data[a];
            }
        }
        return tags;
    }

    EXIF.pretty = function(img) {
        if (!imageHasData(img)) return "";
        var a,
            data = img.exifdata,
            strPretty = "";
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                if (typeof data[a] == "object") {
                    if (data[a] instanceof Number) {
                        strPretty += a + " : " + data[a] + " [" + data[a].numerator + "/" + data[a].denominator + "]\r\n";
                    } else {
                        strPretty += a + " : [" + data[a].length + " values]\r\n";
                    }
                } else {
                    strPretty += a + " : " + data[a] + "\r\n";
                }
            }
        }
        return strPretty;
    }

    EXIF.readFromBinaryFile = function(file) {
        return findEXIFinJPEG(file);
    }

    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
            return EXIF;
        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
}.call(this));



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "jQuery"
var external_jQuery_ = __webpack_require__(0);
var external_jQuery_default = /*#__PURE__*/__webpack_require__.n(external_jQuery_);

// CONCATENATED MODULE: ./src/Zoomer.js
class Zoomer {
  constructor () {
    this.minZoom = this.maxZoom = 1
  }

  setup ({ imageSize, previewSize, exportZoom, maxZoom, minZoom, smallImage }) {
    const widthRatio = previewSize.width / imageSize.width
    const heightRatio = previewSize.height / imageSize.height

    if (minZoom === 'fit') {
      this.minZoom = Math.min(widthRatio, heightRatio)
    } else {
      this.minZoom = Math.max(widthRatio, heightRatio)
    }

    if (smallImage === 'allow') {
      this.minZoom = Math.min(this.minZoom, 1)
    }

    this.maxZoom = Math.max(this.minZoom, maxZoom / exportZoom)
  }

  getZoom (sliderPos) {
    if (!this.minZoom || !this.maxZoom) { return null }

    return sliderPos * (this.maxZoom - this.minZoom) + this.minZoom
  }

  getSliderPos (zoom) {
    if (!this.minZoom || !this.maxZoom) { return null }

    if (this.minZoom === this.maxZoom) {
      return 0
    } else {
      return (zoom - this.minZoom) / (this.maxZoom - this.minZoom)
    }
  }

  isZoomable () {
    if (!this.minZoom || !this.maxZoom) { return null }

    return this.minZoom !== this.maxZoom
  }

  fixZoom (zoom) {
    return Math.max(this.minZoom, Math.min(this.maxZoom, zoom))
  }
}

/* harmony default export */ var src_Zoomer = (Zoomer);

// CONCATENATED MODULE: ./src/constants.js
const PLUGIN_KEY = 'cropit'

const CLASS_NAMES = {
  PREVIEW: 'cropit-preview',
  PREVIEW_IMAGE_CONTAINER: 'cropit-preview-image-container',
  PREVIEW_IMAGE: 'cropit-preview-image',
  PREVIEW_BACKGROUND_CONTAINER: 'cropit-preview-background-container',
  PREVIEW_BACKGROUND: 'cropit-preview-background',
  FILE_INPUT: 'cropit-image-input',
  ZOOM_SLIDER: 'cropit-image-zoom-input',

  DRAG_HOVERED: 'cropit-drag-hovered',
  IMAGE_LOADING: 'cropit-image-loading',
  IMAGE_LOADED: 'cropit-image-loaded',
  DISABLED: 'cropit-disabled'
}

const ERRORS = {
  IMAGE_FAILED_TO_LOAD: { code: 0, message: 'Image failed to load.' },
  SMALL_IMAGE: { code: 1, message: 'Image is too small.' }
}

const eventName = (events) => events.map((e) => `${e}.cropit`).join(' ')
const EVENTS = {
  PREVIEW: eventName([
    'mousedown', 'mouseup', 'mouseleave',
    'touchstart', 'touchend', 'touchcancel', 'touchleave'
  ]),
  PREVIEW_MOVE: eventName(['mousemove', 'touchmove']),
  ZOOM_INPUT: eventName(['mousemove', 'touchmove', 'change'])
}

// CONCATENATED MODULE: ./src/options.js


const options_options = {
  elements: [
    {
      name: '$preview',
      description: 'The HTML element that displays image preview.',
      defaultSelector: `.${CLASS_NAMES.PREVIEW}`
    },
    {
      name: '$fileInput',
      description: 'File input element.',
      defaultSelector: `input.${CLASS_NAMES.FILE_INPUT}`
    },
    {
      name: '$zoomSlider',
      description: 'Range input element that controls image zoom.',
      defaultSelector: `input.${CLASS_NAMES.ZOOM_SLIDER}`
    }
  ].map((o) => {
    o.type = 'jQuery element'
    o.default = `$imageCropper.find('${o.defaultSelector}')`
    return o
  }),

  values: [
    {
      name: 'width',
      type: 'number',
      description: 'Width of image preview in pixels. If set, it will override the CSS property.',
      default: null
    },
    {
      name: 'height',
      type: 'number',
      description: 'Height of image preview in pixels. If set, it will override the CSS property.',
      default: null
    },
    {
      name: 'imageBackground',
      type: 'boolean',
      description: 'Whether or not to display the background image beyond the preview area.',
      default: false
    },
    {
      name: 'imageBackgroundBorderWidth',
      type: 'array or number',
      description: `Width of background image border in pixels.
        The four array elements specify the width of background image width on the top, right, bottom, left side respectively.
        The background image beyond the width will be hidden.
        If specified as a number, border with uniform width on all sides will be applied.`,
      default: [0, 0, 0, 0]
    },
    {
      name: 'exportZoom',
      type: 'number',
      description: `The ratio between the desired image size to export and the preview size.
        For example, if the preview size is \`300px * 200px\`, and \`exportZoom = 2\`, then
        the exported image size will be \`600px * 400px\`.
        This also affects the maximum zoom level, since the exported image cannot be zoomed to larger than its original size.`,
      default: 1
    },
    {
      name: 'allowDragNDrop',
      type: 'boolean',
      description: 'When set to true, you can load an image by dragging it from local file browser onto the preview area.',
      default: true
    },
    {
      name: 'minZoom',
      type: 'string',
      description: `This options decides the minimal zoom level of the image.
        If set to \`'fill'\`, the image has to fill the preview area, i.e. both width and height must not go smaller than the preview area.
        If set to \`'fit'\`, the image can shrink further to fit the preview area, i.e. at least one of its edges must not go smaller than the preview area.`,
      default: 'fill'
    },
    {
      name: 'maxZoom',
      type: 'number',
      description: 'Determines how big the image can be zoomed. E.g. if set to 1.5, the image can be zoomed to 150% of its original size.',
      default: 1
    },
    {
      name: 'initialZoom',
      type: 'string',
      description: `Determines the zoom when an image is loaded.
        When set to \`'min'\`, image is zoomed to the smallest when loaded.
        When set to \`'image'\`, image is zoomed to 100% when loaded.`,
      default: 'min'
    },
    {
      name: 'freeMove',
      type: 'boolean',
      description: 'When set to true, you can freely move the image instead of being bound to the container borders',
      default: false
    },
    {
      name: 'smallImage',
      type: 'string',
      description: `When set to \`'reject'\`, \`onImageError\` would be called when cropit loads an image that is smaller than the container.
        When set to \`'allow'\`, images smaller than the container can be zoomed down to its original size, overiding \`minZoom\` option.
        When set to \`'stretch'\`, the minimum zoom of small images would follow \`minZoom\` option.`,
      default: 'reject'
    }
  ],

  callbacks: [
    {
      name: 'onFileChange',
      description: 'Called when user selects a file in the select file input.',
      params: [
        {
          name: 'event',
          type: 'object',
          description: 'File change event object'
        }
      ]
    },
    {
      name: 'onFileReaderError',
      description: 'Called when `FileReader` encounters an error while loading the image file.'
    },
    {
      name: 'onImageLoading',
      description: 'Called when image starts to be loaded.'
    },
    {
      name: 'onImageLoaded',
      description: 'Called when image is loaded.'
    },
    {
      name: 'onImageError',
      description: 'Called when image cannot be loaded.',
      params: [
        {
          name: 'error',
          type: 'object',
          description: 'Error object.'
        },
        {
          name: 'error.code',
          type: 'number',
          description: 'Error code. `0` means generic image loading failure. `1` means image is too small.'
        },
        {
          name: 'error.message',
          type: 'string',
          description: 'A message explaining the error.'
        }
      ]
    },
    {
      name: 'onZoomEnabled',
      description: 'Called when image the zoom slider is enabled.'
    },
    {
      name: 'onZoomDisabled',
      description: 'Called when image the zoom slider is disabled.'
    },
    {
      name: 'onZoomChange',
      description: 'Called when zoom changes.',
      params: [
        {
          name: 'zoom',
          type: 'number',
          description: 'New zoom.'
        }
      ]
    },
    {
      name: 'onOffsetChange',
      description: 'Called when image offset changes.',
      params: [
        {
          name: 'offset',
          type: 'object',
          description: 'New offset, with `x` and `y` values.'
        }
      ]
    }
  ].map((o) => { o.type = 'function'; return o })
}

const loadDefaults = ($el) => {
  const defaults = {}
  if ($el) {
    options_options.elements.forEach((o) => {
      defaults[o.name] = $el.find(o.defaultSelector)
    })
  }
  options_options.values.forEach((o) => {
    defaults[o.name] = o.default
  })
  options_options.callbacks.forEach((o) => {
    defaults[o.name] = () => {}
  })

  return defaults
}

/* harmony default export */ var src_options = (options_options);

// CONCATENATED MODULE: ./src/utils.js
const exists = (v) => typeof v !== 'undefined'

const round = (x) => +(Math.round(x * 1e2) + 'e-2')

// EXTERNAL MODULE: ./node_modules/exif-js/exif.js
var exif_js_exif = __webpack_require__(1);
var exif_default = /*#__PURE__*/__webpack_require__.n(exif_js_exif);

// CONCATENATED MODULE: ./src/cropit.js








class cropit_Cropit {
  constructor (jQuery, element, options) {
    this.$el = external_jQuery_default()(element)

    const defaults = loadDefaults(this.$el)
    this.options = external_jQuery_default.a.extend({}, defaults, options)

    this.init()
  }

  init () {
    this.image = new Image()
    this.preImage = new Image()
    this.image.onload = this.onImageLoaded.bind(this)
    this.preImage.onload = this.onPreImageLoaded.bind(this)
    this.image.onerror = this.preImage.onerror = () => {
      this.onImageError.call(this, ERRORS.IMAGE_FAILED_TO_LOAD)
    }

    this.$preview = this.options.$preview.css('position', 'relative')
    this.$fileInput = this.options.$fileInput.attr({ accept: 'image/*' })
    this.$zoomSlider = this.options.$zoomSlider.attr({ min: 0, max: 1, step: 0.01 })

    this.previewSize = {
      width: this.options.width || this.$preview.innerWidth(),
      height: this.options.height || this.$preview.innerHeight()
    }

    this.$image = external_jQuery_default()('<img />')
      .addClass(CLASS_NAMES.PREVIEW_IMAGE)
      .attr('alt', '')
      .css({
        transformOrigin: 'top left',
        webkitTransformOrigin: 'top left',
        willChange: 'transform'
      })
    this.$imageContainer = external_jQuery_default()('<div />')
      .addClass(CLASS_NAMES.PREVIEW_IMAGE_CONTAINER)
      .css({
        position: 'absolute',
        overflow: 'hidden',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%'
      })
      .append(this.$image)
    this.$preview.append(this.$imageContainer)

    if (this.options.imageBackground) {
      if (external_jQuery_default.a.isArray(this.options.imageBackgroundBorderWidth)) {
        this.bgBorderWidthArray = this.options.imageBackgroundBorderWidth
      } else {
        this.bgBorderWidthArray = [0, 1, 2, 3].map(() => this.options.imageBackgroundBorderWidth)
      }

      this.$bg = external_jQuery_default()('<img />')
        .addClass(CLASS_NAMES.PREVIEW_BACKGROUND)
        .attr('alt', '')
        .css({
          position: 'relative',
          left: this.bgBorderWidthArray[3],
          top: this.bgBorderWidthArray[0],
          transformOrigin: 'top left',
          webkitTransformOrigin: 'top left',
          willChange: 'transform'
        })
      this.$bgContainer = external_jQuery_default()('<div />')
        .addClass(CLASS_NAMES.PREVIEW_BACKGROUND_CONTAINER)
        .css({
          position: 'absolute',
          zIndex: 0,
          top: -this.bgBorderWidthArray[0],
          right: -this.bgBorderWidthArray[1],
          bottom: -this.bgBorderWidthArray[2],
          left: -this.bgBorderWidthArray[3]
        })
        .append(this.$bg)
      if (this.bgBorderWidthArray[0] > 0) {
        this.$bgContainer.css('overflow', 'hidden')
      }
      this.$preview.prepend(this.$bgContainer)
    }

    this.initialZoom = this.options.initialZoom

    this.imageLoaded = false

    this.moveContinue = false

    this.zoomer = new src_Zoomer()

    if (typeof external_jQuery_default.a.event.props !== 'array') { external_jQuery_default.a.event.props = [] }
    if (this.options.allowDragNDrop) {
      external_jQuery_default.a.event.props.push('dataTransfer')
    }

    this.bindListeners()

    if (this.options.imageState && this.options.imageState.src) {
      this.loadImage(this.options.imageState.src)
    }
  }

  bindListeners () {
    this.$fileInput.on('change.cropit', this.onFileChange.bind(this))
    this.$imageContainer.on(EVENTS.PREVIEW, this.onPreviewEvent.bind(this))
    this.$zoomSlider.on(EVENTS.ZOOM_INPUT, this.onZoomSliderChange.bind(this))

    if (this.options.allowDragNDrop) {
      this.$imageContainer.on('dragover.cropit dragleave.cropit', this.onDragOver.bind(this))
      this.$imageContainer.on('drop.cropit', this.onDrop.bind(this))
    }
  }

  unbindListeners () {
    this.$fileInput.off('change.cropit')
    this.$imageContainer.off(EVENTS.PREVIEW)
    this.$imageContainer.off('dragover.cropit dragleave.cropit drop.cropit')
    this.$zoomSlider.off(EVENTS.ZOOM_INPUT)
  }

  onFileChange (e) {
    this.options.onFileChange(e)

    if (this.$fileInput.get(0).files) {
      this.loadFile(this.$fileInput.get(0).files[0])
    }
  }

  loadFile (file) {
    const fileReader = new FileReader()
    if (file && file.type.match('image')) {
      fileReader.readAsDataURL(file)
      fileReader.onload = this.onFileReaderLoaded.bind(this)
      fileReader.onerror = this.onFileReaderError.bind(this)
    } else if (file) {
      this.onFileReaderError()
    }
  }

  onFileReaderLoaded (e) {
    this.loadImage(e.target.result)
  }

  onFileReaderError () {
    this.options.onFileReaderError()
  }

  onDragOver (e) {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'copy'
    this.$preview.toggleClass(CLASS_NAMES.DRAG_HOVERED, e.type === 'dragover')
  }

  onDrop (e) {
    e.preventDefault()
    e.stopPropagation()

    const files = Array.prototype.slice.call(e.dataTransfer.files, 0)
    files.some((file) => {
      if (!file.type.match('image')) { return false }

      this.loadFile(file)
      return true
    })

    this.$preview.removeClass(CLASS_NAMES.DRAG_HOVERED)
  }

  loadImage (imageSrc) {
    if (!imageSrc) { return }

    this.options.onImageLoading()
    this.setImageLoadingClass()

    if (imageSrc.indexOf('data') === 0) {
      this.preImage.src = imageSrc
    } else {
      const xhr = new XMLHttpRequest()
      xhr.onload = (e) => {
        if (e.target.status >= 300) {
          this.onImageError.call(this, ERRORS.IMAGE_FAILED_TO_LOAD)
          return
        }

        this.loadFile(e.target.response)
      }
      xhr.open('GET', imageSrc)
      xhr.responseType = 'blob'
      xhr.send()
    }
  }

  onPreImageLoaded () {
    // if (typeof this.preImage.src === 'undefined' || this.preImage.src === null) {
    //   if (this.shouldRejectImage({
    //     imageWidth: this.preImage.width,
    //     imageHeight: this.preImage.height,
    //     previewSize: this.previewSize,
    //     maxZoom: this.options.maxZoom,
    //     exportZoom: this.options.exportZoom,
    //     smallImage: this.options.smallImage
    //   })) {
    //     this.onImageError(ERRORS.SMALL_IMAGE)
    //     if (this.image.src) { this.setImageLoadedClass() }
    //     return
    //   }
    //   this.image.src = this.preImage.src
    //   return
    // }
    if (this.options.smallImage === 'reject' &&
      (this.preImage.width * this.options.maxZoom < this.previewSize.w * this.options.exportZoom ||
        this.preImage.height * this.options.maxZoom < this.previewSize.h * this.options.exportZoom)) {
      this.onImageError(ERRORS.SMALL_IMAGE)
      if (this.image.src) { this.setImageLoadedClass() }
      return
    }

    if (this.options.allowCrossOrigin) {
      this.image.crossOrigin = this.preImage.src.indexOf('data:') === 0 ? null : 'Anonymous'
    }

    function _base64ToArrayBuffer (base64) {
      var binary_string = window.atob(base64.split(',')[1])
      var len = binary_string.length
      var bytes = new Uint8Array(len)
      for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i)
      }
      return bytes.buffer
    }
    var exif = exif_default.a.readFromBinaryFile(_base64ToArrayBuffer(this.preImage.src))
    var canvas = document.createElement('canvas')
    canvas.width = this.preImage.width
    canvas.height = this.preImage.height
    var ctx = canvas.getContext('2d')
    var x = 0
    var y = 0
    ctx.save()

    if (typeof exif.Oriendation !== 'undefined') {
      switch (exif.Orientation) {
        case 2:
          // horizontal flip
          ctx.translate(canvas.width, 0)
          ctx.scale(-1, 1)
          break
        case 3:
          // 180° rotate left
          ctx.translate(canvas.width, canvas.height)
          ctx.rotate(Math.PI)
          break
        case 4:
          // vertical flip
          ctx.translate(0, canvas.height)
          ctx.scale(1, -1)
          break
        case 5:
          // vertical flip + 90 rotate right
          ctx.rotate(0.5 * Math.PI)
          ctx.scale(1, -1)
          break
        case 6:
          // 90° rotate right
          ctx.rotate(0.5 * Math.PI)
          ctx.translate(0, -canvas.height)
          break
        case 7:
          // horizontal flip + 90 rotate right
          ctx.rotate(0.5 * Math.PI)
          ctx.translate(canvas.width, -canvas.height)
          ctx.scale(-1, 1)
          break
        case 8:
          // 90° rotate left
          ctx.rotate(-0.5 * Math.PI)
          ctx.translate(-canvas.width, 0)
          break
      }

      ctx.drawImage(this.preImage, x, y)
      ctx.restore()
      var finalImage = canvas.toDataURL('image/jpeg', 1.0)

      this.image.src = this.imageSrc = finalImage
    } else {
      this.image.src = this.imageSrc = this.preImage.src
    }
  }

  onImageLoaded () {
    this.rotation = 0
    this.setupZoomer(this.options.imageState && this.options.imageState.zoom || this._initialZoom)
    if (this.options.imageState && this.options.imageState.offset) {
      this.offset = this.options.imageState.offset
    } else {
      this.centerImage()
    }

    this.options.imageState = {}

    this.$image.attr('src', this.image.src)
    if (this.options.imageBackground) {
      this.$bg.attr('src', this.image.src)
    }

    this.setImageLoadedClass()

    this.imageLoaded = true

    this.options.onImageLoaded()
  }

  onImageError () {
    this.options.onImageError.apply(this, arguments)
    this.removeImageLoadingClass()
  }

  setImageLoadingClass () {
    this.$preview
      .removeClass(CLASS_NAMES.IMAGE_LOADED)
      .addClass(CLASS_NAMES.IMAGE_LOADING)
  }

  setImageLoadedClass () {
    this.$preview
      .removeClass(CLASS_NAMES.IMAGE_LOADING)
      .addClass(CLASS_NAMES.IMAGE_LOADED)
  }

  removeImageLoadingClass () {
    this.$preview
      .removeClass(CLASS_NAMES.IMAGE_LOADING)
  }

  getEventPosition (e) {
    if (e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0]) {
      e = e.originalEvent.touches[0]
    }
    if (e.clientX && e.clientY) {
      return { x: e.clientX, y: e.clientY }
    }
  }

  onPreviewEvent (e) {
    if (!this.imageLoaded) { return }

    this.moveContinue = false
    this.$imageContainer.off(EVENTS.PREVIEW_MOVE)

    if (e.type === 'mousedown' || e.type === 'touchstart') {
      this.origin = this.getEventPosition(e)
      this.moveContinue = true
      this.$imageContainer.on(EVENTS.PREVIEW_MOVE, this.onMove.bind(this))
    } else {
      external_jQuery_default()(document.body).focus()
    }

    e.stopPropagation()
    return false
  }

  onMove (e) {
    const eventPosition = this.getEventPosition(e)

    if (this.moveContinue && eventPosition) {
      this.offset = {
        x: this.offset.x + eventPosition.x - this.origin.x,
        y: this.offset.y + eventPosition.y - this.origin.y
      }
    }

    this.origin = eventPosition

    e.stopPropagation()
    return false
  }

  set offset (position) {
    if (!position || !exists(position.x) || !exists(position.y)) { return }

    this._offset = this.fixOffset(position)
    this.renderImage()

    this.options.onOffsetChange(position)
  }

  fixOffset (offset) {
    if (!this.imageLoaded) { return offset }

    const ret = { x: offset.x, y: offset.y }

    if (!this.options.freeMove) {
      if (this.imageWidth * this.zoom >= this.previewSize.width) {
        ret.x = Math.min(0, Math.max(ret.x,
          this.previewSize.width - this.imageWidth * this.zoom))
      } else {
        ret.x = Math.max(0, Math.min(ret.x,
          this.previewSize.width - this.imageWidth * this.zoom))
      }

      if (this.imageHeight * this.zoom >= this.previewSize.height) {
        ret.y = Math.min(0, Math.max(ret.y,
          this.previewSize.height - this.imageHeight * this.zoom))
      } else {
        ret.y = Math.max(0, Math.min(ret.y,
          this.previewSize.height - this.imageHeight * this.zoom))
      }
    }

    ret.x = round(ret.x)
    ret.y = round(ret.y)

    return ret
  }

  centerImage () {
    if (!this.image.width || !this.image.height || !this.zoom) { return }

    this.offset = {
      x: (this.previewSize.width - this.imageWidth * this.zoom) / 2,
      y: (this.previewSize.height - this.imageHeight * this.zoom) / 2
    }
  }

  onZoomSliderChange () {
    if (!this.imageLoaded) { return }

    this.zoomSliderPos = Number(this.$zoomSlider.val())
    const newZoom = this.zoomer.getZoom(this.zoomSliderPos)
    if (newZoom === this.zoom) { return }
    this.zoom = newZoom
  }

  enableZoomSlider () {
    this.$zoomSlider.removeAttr('disabled')
    this.options.onZoomEnabled()
  }

  disableZoomSlider () {
    this.$zoomSlider.attr('disabled', true)
    this.options.onZoomDisabled()
  }

  setupZoomer (zoom) {
    this.zoomer.setup({
      imageSize: this.imageSize,
      previewSize: this.previewSize,
      exportZoom: this.options.exportZoom,
      maxZoom: this.options.maxZoom,
      minZoom: this.options.minZoom,
      smallImage: this.options.smallImage
    })
    this.zoom = exists(zoom) ? zoom : this._zoom

    if (this.isZoomable()) {
      this.enableZoomSlider()
    } else {
      this.disableZoomSlider()
    }
  }

  set zoom (newZoom) {
    newZoom = this.fixZoom(newZoom)

    if (this.imageLoaded) {
      const oldZoom = this.zoom

      const newX = this.previewSize.width / 2 - (this.previewSize.width / 2 - this.offset.x) * newZoom / oldZoom
      const newY = this.previewSize.height / 2 - (this.previewSize.height / 2 - this.offset.y) * newZoom / oldZoom

      this._zoom = newZoom
      this.offset = { x: newX, y: newY } // Triggers renderImage()
    } else {
      this._zoom = newZoom
    }

    this.zoomSliderPos = this.zoomer.getSliderPos(this.zoom)
    this.$zoomSlider.val(this.zoomSliderPos)

    this.options.onZoomChange(newZoom)
  }

  fixZoom (zoom) {
    return this.zoomer.fixZoom(zoom)
  }

  isZoomable () {
    return this.zoomer.isZoomable()
  }

  get rotatedOffset () {
    return {
      x: this.offset.x +
          (this.rotation === 90 ? this.image.height * this.zoom : 0) +
          (this.rotation === 180 ? this.image.width * this.zoom : 0),
      y: this.offset.y +
          (this.rotation === 180 ? this.image.height * this.zoom : 0) +
          (this.rotation === 270 ? this.image.width * this.zoom : 0)
    }
  }

  renderImage () {
    const transformation = `
      translate(${this.rotatedOffset.x}px, ${this.rotatedOffset.y}px)
      scale(${this.zoom})
      rotate(${this.rotation}deg)`

    this.$image.css({
      transform: transformation,
      webkitTransform: transformation
    })
    if (this.options.imageBackground) {
      this.$bg.css({
        transform: transformation,
        webkitTransform: transformation
      })
    }
  }

  set rotation (newRotation) {
    this._rotation = newRotation

    if (this.imageLoaded) {
      // Change in image size may lead to change in zoom range
      this.setupZoomer()
    }
  }

  get rotation () {
    return this._rotation
  }

  rotateCW () {
    if (this.shouldRejectImage({
      imageWidth: this.image.height,
      imageHeight: this.image.width,
      previewSize: this.previewSize,
      maxZoom: this.options.maxZoom,
      exportZoom: this.options.exportZoom,
      smallImage: this.options.smallImage
    })) {
      this.rotation = (this.rotation + 180) % 360
    } else {
      this.rotation = (this.rotation + 90) % 360
    }
  }

  rotateCCW () {
    if (this.shouldRejectImage({
      imageWidth: this.image.height,
      imageHeight: this.image.width,
      previewSize: this.previewSize,
      maxZoom: this.options.maxZoom,
      exportZoom: this.options.exportZoom,
      smallImage: this.options.smallImage
    })) {
      this.rotation = (this.rotation + 180) % 360
    } else {
      this.rotation = (this.rotation + 270) % 360
    }
  }

  shouldRejectImage ({ imageWidth, imageHeight, previewSize, maxZoom, exportZoom, smallImage }) {
    if (smallImage !== 'reject') { return false }

    return imageWidth * maxZoom < previewSize.width * exportZoom ||
           imageHeight * maxZoom < previewSize.height * exportZoom
  }

  getCroppedImageData (exportOptions) {
    if (!this.image.src) { return }

    const exportDefaults = {
      type: 'image/png',
      quality: 0.75,
      originalSize: false,
      fillBg: '#fff'
    }
    exportOptions = external_jQuery_default.a.extend({}, exportDefaults, exportOptions)

    const exportZoom = exportOptions.originalSize ? 1 / this.zoom : this.options.exportZoom

    const zoomedSize = {
      width: this.zoom * exportZoom * this.image.width,
      height: this.zoom * exportZoom * this.image.height
    }

    const canvas = external_jQuery_default()('<canvas />')
      .attr({
        width: this.previewSize.width * exportZoom,
        height: this.previewSize.height * exportZoom
      })
      .get(0)
    const canvasContext = canvas.getContext('2d')

    if (exportOptions.type === 'image/jpeg') {
      canvasContext.fillStyle = exportOptions.fillBg
      canvasContext.fillRect(0, 0, canvas.width, canvas.height)
    }

    canvasContext.translate(
      this.rotatedOffset.x * exportZoom,
      this.rotatedOffset.y * exportZoom)
    canvasContext.rotate(this.rotation * Math.PI / 180)
    canvasContext.drawImage(this.image,
      0, 0,
      zoomedSize.width,
      zoomedSize.height)

    return canvas.toDataURL(exportOptions.type, exportOptions.quality)
  }

  get imageState () {
    return {
      src: this.image.src,
      offset: this.offset,
      zoom: this.zoom
    }
  }

  get imageSrc () {
    return this.image.src
  }

  set imageSrc (imageSrc) {
    this.loadImage(imageSrc)
  }

  get offset () {
    return this._offset
  }

  get zoom () {
    return this._zoom
  }

  get imageWidth () {
    return this.rotation % 180 === 0 ? this.image.width : this.image.height
  }

  get imageHeight () {
    return this.rotation % 180 === 0 ? this.image.height : this.image.width
  }

  get imageSize () {
    return {
      width: this.imageWidth,
      height: this.imageHeight
    }
  }

  get initialZoom () {
    return this.options.initialZoom
  }

  set initialZoom (initialZoomOption) {
    this.options.initialZoom = initialZoomOption
    if (initialZoomOption === 'min') {
      this._initialZoom = 0 // Will be fixed when image loads
    } else if (initialZoomOption === 'image') {
      this._initialZoom = 1
    } else {
      this._initialZoom = 0
    }
  }

  get exportZoom () {
    return this.options.exportZoom
  }

  set exportZoom (exportZoom) {
    this.options.exportZoom = exportZoom
    this.setupZoomer()
  }

  get minZoom () {
    return this.options.minZoom
  }

  set minZoom (minZoom) {
    this.options.minZoom = minZoom
    this.setupZoomer()
  }

  get maxZoom () {
    return this.options.maxZoom
  }

  set maxZoom (maxZoom) {
    this.options.maxZoom = maxZoom
    this.setupZoomer()
  }

  get previewSize () {
    return this._previewSize
  }

  set previewSize (size) {
    if (!size || size.width <= 0 || size.height <= 0) { return }

    this._previewSize = {
      width: size.width,
      height: size.height
    }
    this.$preview
      .innerWidth(this.previewSize.width)
      .innerHeight(this.previewSize.height)

    if (this.imageLoaded) {
      this.setupZoomer()
    }
  }

  disable () {
    this.unbindListeners()
    this.disableZoomSlider()
    this.$el.addClass(CLASS_NAMES.DISABLED)
  }

  reenable () {
    this.bindListeners()
    this.enableZoomSlider()
    this.$el.removeClass(CLASS_NAMES.DISABLED)
  }

  $ (selector) {
    if (!this.$el) { return null }
    return this.$el.find(selector)
  }
}

/* harmony default export */ var src_cropit = (cropit_Cropit);

// CONCATENATED MODULE: ./src/plugin.js






const applyOnEach = ($el, callback) => {
  return $el.each(function () {
    const cropit = external_jQuery_default.a.data(this, PLUGIN_KEY)

    if (!cropit) { return }
    callback(cropit)
  })
}

const callOnFirst = ($el, method, options) => {
  const cropit = $el.first().data(PLUGIN_KEY)

  if (!cropit || !external_jQuery_default.a.isFunction(cropit[method])) { return null }
  return cropit[method](options)
}

const methods = {
  init (options) {
    return this.each(function () {
      // Only instantiate once per element
      if (external_jQuery_default.a.data(this, PLUGIN_KEY)) { return }

      const cropit = new src_cropit(external_jQuery_default.a, this, options)
      external_jQuery_default.a.data(this, PLUGIN_KEY, cropit)
    })
  },

  destroy () {
    return this.each(function () {
      external_jQuery_default.a.removeData(this, PLUGIN_KEY)
    })
  },

  isZoomable () {
    return callOnFirst(this, 'isZoomable')
  },

  export (options) {
    return callOnFirst(this, 'getCroppedImageData', options)
  }
}

const delegate = ($el, fnName) => {
  return applyOnEach($el, (cropit) => {
    cropit[fnName]()
  })
}

const prop = ($el, name, value) => {
  if (exists(value)) {
    return applyOnEach($el, (cropit) => {
      cropit[name] = value
    })
  } else {
    const cropit = $el.first().data(PLUGIN_KEY)
    return cropit[name]
  }
}

external_jQuery_default.a.fn.cropit = function (method) {
  if (methods[method]) {
    return methods[method].apply(this, Array.prototype.slice.call(arguments, 1))
  } else if (['imageState', 'imageSrc', 'offset', 'previewSize', 'imageSize', 'zoom',
    'initialZoom', 'exportZoom', 'minZoom', 'maxZoom'].indexOf(method) >= 0) {
    return prop(this, ...arguments)
  } else if (['rotateCW', 'rotateCCW', 'disable', 'reenable'].indexOf(method) >= 0) {
    return delegate(this, ...arguments)
  } else {
    return methods.init.apply(this, arguments)
  }
}


/***/ })
/******/ ]);
});