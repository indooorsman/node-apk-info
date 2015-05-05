# node-apk-info
get basic info of an apk file by nodejs

## installation
    npm install apkinfo

## useage
    var apkinfo = require('apkinfo');
    apkinfo.get('/absolute/path/to/the/file.apk', function(error, info) {
        if (error) {
            return console.log(error);
        }
        console.log(info);
        //e.g.
        /*
            {
                appName: 'My app',
                packageName: 'com.google.android',
                versionName: '1.1.0',
                versionCode: '1'
            } 
        */
    });