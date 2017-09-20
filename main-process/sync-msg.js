const ipc = require('electron').ipcMain
const readline = require('readline')
const fs = require('fs')
const path = require('path')

const _dir = '/Users/loyiso/Downloads/RAW_BAS_FILES/'

ipc.on('load-files', function(event, arg) {
    readFiles(_dir,function (error) {
        console.log(error);
    });
    event.sender.send('files-loaded', 'files done loading');
})

var readFiles = function(dirname, onError) {
    fs.readdir(dirname, function(err, filenames) {
        if (err) {
            onError(err);
            return;
        }
        filenames.forEach(function(filename) {
            console.log(path.resolve(dirname, filename));
            readLines(path.resolve(dirname, filename));
        });
    });
};

var readLines = function (filename) {
    var rl = readline.createInterface({
        input : fs.createReadStream(filename),
        output: process.stdout,
        terminal: false
    })
    rl.on('line',function(line){
        console.log(line) //or parse line
        //save to DB
    })
};

