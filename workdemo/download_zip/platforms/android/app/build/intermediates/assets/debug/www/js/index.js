document.addEventListener("deviceready", init, false);

function init() {
    downloader.init({folder: "testApp", fileSystem: cordova.file.cacheDirectory, unzip: true, delete: false});
    //listen for button clicks
    // https://www.npmjs.com/package/cordova-plugin-file-downloader
    document.querySelector("#downloadTest").addEventListener("touchend", 
        function() {
            var tank0_url = "https://lumistatic.blob.core.chinacloudapi.cn/rinnegandemo/tank0.zip";
            // folder 为 . 是当前目录，不再创建一个子文件夹
            // downloader.init({folder: "testApp", fileSystem: cordova.file.cacheDirectory, unzip: true, delete: false});
            downloader.get(tank0_url);
            var  handler = function (event){
                 document.removeEventListener("DOWNLOADER_downloadSuccess", handler);
                  var data = event.data;
                  navigator.notification.alert(
                // cordova.file.cacheDirectory + "/testApp/" + data,  null, "Alert Test", "OK!");
                // cordova.file.cacheDirectory + "/testApp/" + "tank0" + JSON.stringify(data),  null, "Alert Test", "OK!");
                cordova.file.cacheDirectory + "/testApp/" + "tank0 data=" + JSON.stringify(data),  null, "Alert Test", "OK!");
  
            };
            document.addEventListener("DOWNLOADER_downloadSuccess", handler);

            document.addEventListener("DOWNLOADER_error", function(event){
                  var data = event.data;
                  navigator.notification.alert(
                // cordova.file.cacheDirectory + "/testApp/" + data,  null, "Alert Test", "OK!");
                // cordova.file.cacheDirectory + "/testApp/" + "tank0" + JSON.stringify(data),  null, "Alert Test", "OK!");
                cordova.file.cacheDirectory + "error =" , data,  null, "Alert Test", "OK!");  
            });
            // navigator.notification.alert(
            //     "下载中...", null, "Alert Test", "OK!");

    }, false);



}