var exec = require('child_process').exec;

var aapt = require('path').join(__dirname, './lib/aapt_' + process.platform);

var get = function(path, callback) {
    if (process.platform != 'darwin' && process.platform != 'linux') {
        return callback({
            message: 'only support Mac OS X and linux'
        });
    }
    var cmd = [aapt, 'd', 'badging', path].join(' ');
    exec(cmd, function(e, stdout, stderr) {
        if (e) {
            return callback(e);
        }
        if (stderr.trim() != '') {
            return callback(stderr);
        }
        if (stdout) {
            var packageName = stdout.match(/name='([^']+)'/)[1];
            var versionCode = stdout.match(/versionCode='(\d+)'/)[1];
            var versionName = stdout.match(/versionName='([^']+)'/)[1];
            var appName = stdout.match(/application: label='([^']+)'/)[1];
            callback(null, {
                appName: appName,
                packageName: packageName,
                versionName: versionName,
                versionCode: versionCode
            });
        }
    });
};

module.exports.get = get;