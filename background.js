

console.log('Summarize working like charm');

chrome.tabs.onActivated.addListener(function a(){

    chrome.tabs.getSelected(null,function(tab) {
        var url = tab.url;

        //http://stackoverflow.com/questions/736513/how-do-i-parse-a-url-into-hostname-and-path-in-javascript
        var parser = document.createElement('a');
        parser.href = url;
        if(parser.hostname == 'www.youtube.com'){
        // if(parser.hostname == 'www.youtube.com' && parser.pathname == '/watch'){
            chrome.browserAction.setIcon({path: '19-white.png'});
        } else {
            chrome.browserAction.setIcon({path: '19-gray.png'});
        }
   });

})


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request.cmd == "getV") {
        // $.ajax({
        //     url: chrome.extension.getURL("/template.html"),
        //     dataType: "html",
        //     success: sendResponse
        // });
        // sendResponse("ahhahahauosdhauhfeouhaf");
        sendResponse(false);
        return true;
        $.get('http://192.168.164.161:3000/sum/ZM8ECpBuQYE2222', function(data) {
        // $.get('http://192.168.164.161:3000/sum/' + request.video_id, function(data) {
            // console.log("data: " ,  data);
            if (data){
                sendResponse({'data':data});
            } else {
                sendResponse(false);

//                 chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//     chrome.tabs.sendMessage(tabs[0].id, {action: "open_dialog_box"}, function(response) {});
//     console.log('send tabs');
// });
                // chrome.tabs.sendMessage(tabs[0].id, {greeting: "您好"}, function(response) {
                //   // console.log(response.farewell);
                //   console.log('background response');
                // });
            }
        });

    }

    return true; // must have this, because asy
    // http://stackoverflow.com/questions/20077487/chrome-extension-message-passing-response-not-sent
})


/*function yesIcon(){
    chrome.browserAction.setBadgeBackgroundColor({color:[190, 190, 190, 230]});
    chrome.browserAction.setBadgeText({text:"√"});
}

chrome.extension.onRequest.addListener(function(request) {
    chrome.browserAction.setIcon({path: '19.png'});
})

function noIcon(){
    chrome.browserAction.setBadgeText({text:""});
}
*/





function a(){
    console.log('a work');
    $('#text2').text('asdasdasdafaefaefafaefaef');
    console.log('a2 work');
}






// TELL
// _this.tell = function (message, data){

//     var data = data || {};

//     chrome.tabs.getSelected(null, function (tab){

//         if (!tab) return;

//         chrome.tabs.sendMessage(tab.id, {

//             message   : message,

//             data : data

//         });

//     });

// };


// LISTEN
function onPostMessage (request, sender, sendResponse){

    if (!request.message) return;

    if (request.data.view){

        _this.tell(request.message, request.data);

        return;

    }

    processMessage(request);

};






onPostMessage (function(request, sender, sendResponse) {
    if(request.cmd == "getV") {
        // $.ajax({
        //     url: chrome.extension.getURL("/template.html"),
        //     dataType: "html",
        //     success: sendResponse
        // });

        $.get('http://192.168.164.161:3000/sum/ZM8ECpBuQYE2222', function(data) {
        // $.get('http://192.168.164.161:3000/sum/' + request.video_id, function(data) {
            // console.log("data: " ,  data);
            if (data){
                sendResponse({'data':data});
            } else {
                sendResponse(false);
                // console.log('send rep false');
            }
        });

    }

    return true; // must have this, because asy
    // http://stackoverflow.com/questions/20077487/chrome-extension-message-passing-response-not-sent
})