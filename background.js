

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
