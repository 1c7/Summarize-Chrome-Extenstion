



// $.get('http://192.168.164.161:3000/sum/ZM8ECpBuQYE2222', function(data) {
//     console.log(data);
// });





// Script in embedded HTML page
// function messagePage(message) {
//   window.parent.postMessage(
//     message,
//     "*" // The expected origin of embedding page
//                           // Can use "*" if not known in advance
//   );
// }



// // Listener in both
// window.addEventListener("message", function(event) {
//   console.log('got message!!');
// });










// Background page
// chrome.tabs.onMessage.addListener(function(request, sender, sendResponse) {
//     console.log('please work');
// });

// chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {

//   if (msg.action == 'open_dialog_box') {
//     alert("Message recieved!");
//   }
// });

// chrome.tabs.onMessage.addListener(function(request, sender, sendResponse) {
//     console.log(sender.tab ?
//                 "来自内容脚本：" + sender.tab.url :
//                 "来自应用");
//     if (request.greeting == "您好")
//       sendResponse({farewell: "再见"});
// });
console.log('somescript heh?');




chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
    console.log('2222222222222222222222222222222');

  if (msg.action == 'open_dialog_box') {
    alert("Message recieved!");
    console.log('asdasdasdasfaaefaefaefaefaefa');
  }
});





/*chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request.cmd == "asd") {
        console.log('as work?');
    }
})*/

// chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
//     if(request.cmd == "asd") {
//         console.log('as work?');
//     }
// })


// var port = chrome.runtime.connect();

// window.addEventListener("message", function(event) {
//     console.log('any thing?????');
//   // We only accept messages from ourselves
//   if (event.source != window)
//     return;

//   if (event.data.type && (event.data.type == "FROM_PAGE")) {
//     console.log("Content script received: " + event.data.text);
//     port.postMessage(event.data.text);
//   }
// }, false);



// TELL
// _this.tell = function (message, data){

// var data = data || {};

// data.source = _view;

// window.parent.postMessage({

//         message   : message,

//         data : data

//     }, '*');

// };


// LISTEN
function background_onMessage (request, sender, sendResponse){

    // make sure the message was for this view (you can use the "*" wildcard to target all views)

    if (

        !request.message ||

        !request.data.view ||

        (request.data.view != _view && request.data.view != '*')

    ) return;

    // call the listener callback

    if (_listener) _listener(request);

};


console.log('bottom of somescript');