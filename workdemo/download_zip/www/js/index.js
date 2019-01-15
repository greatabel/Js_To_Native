document.addEventListener("deviceready", init, false);

function init() {

    //listen for button clicks
    // https://www.npmjs.com/package/cordova-plugin-file-downloader
    document.querySelector("#downloadTest").addEventListener("touchend", 
        function() {
            var tank0_url = "https://lumistatic.blob.core.chinacloudapi.cn/rinnegandemo/tank0.zip";
            downloader.init({folder: "testApp", unzip: true, delete: false});
            downloader.get(tank0_url);

            document.addEventListener("DOWNLOADER_downloadSuccess", function(event){
                  var data = event.data;
                  navigator.notification.alert(
                // cordova.file.cacheDirectory + "/testApp/" + data,  null, "Alert Test", "OK!");
                cordova.file.cacheDirectory + "/testApp/" + "tank0" + JSON.stringify(data),  null, "Alert Test", "OK!");
            });
            // navigator.notification.alert(
            //     "下载中...", null, "Alert Test", "OK!");

    }, false);



}