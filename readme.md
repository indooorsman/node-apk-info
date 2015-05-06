# node-apk-info
get basic info of an apk file by nodejs. **only support Mac OS X and linux**

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
    
## for 64-bit Linux
you must install some other stuff first on 64-bit linux. 

please check [http://stackoverflow.com/questions/2710499/android-sdk-on-a-64-bit-linux-machine](http://stackoverflow.com/questions/2710499/android-sdk-on-a-64-bit-linux-machine)