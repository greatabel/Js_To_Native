document.addEventListener("deviceready", init, false);

function init() {

    //listen for button clicks
    document.querySelector("#downloadTest").addEventListener("touchend", 
        function() {

            navigator.notification.alert(
                "This is a test...", null, "Alert Test", "OK!");

    }, false);



}