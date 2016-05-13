console.log('hello, I got execute');




// Content script in parent frame
// Assuming you have saved the reference to the frame in iFrame
function messageEmbed(message) {
  iFrame.contentWindow.postMessage(
    message,
    chrome.runtime.getURL("") // Origin of embedded page
  );
}


function b(response){
    console.log('calling b');
    if ($('#text2').length > 0){
        console.log('exist !');
    } else {
        console.log(' not exist!');
    }

    $('#watch-header').after(getFrameHtml("/template.html"));
    $('#sumup-image')[0].src = chrome.extension.getURL('128.png');
    // $('#text2').text(response);

    if(response){

    } else {
        $('#text2').text("No one summarize this yet, wanna be first one?");
        $('#chrome-ext-summarize').css('cursor','pointer');
        $('#chrome-ext-summarize').click(function(){
            console.log('got click');
        })
    }
}

// function z(){
//     console.log('calling z');
//     setTimeout(b, 8500);
// }



/*
    How do we detect Youtube loading a new page??

    on Youtube video play page, for example: https://www.youtube.com/watch?v=CW2hl9se8BM

    <body> got an attr call data-spf-name
    <body data-spf-name='watch' ...>

    when it is video play page, data-spf-name = 'watch'
    when it is not video play page, for example: www.youtube.com, data-spf-name = 'other'
    so we use this to detect should we inject html into page
 */


// select the target node
var target = document.querySelector('body');

// create an observer instance
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {

    var a = target.getAttribute('data-spf-name');

    if(a == 'watch'){
        console.log('of course i working');
        if ($('#chrome-ext-summarize').length > 0){

        } else {
            console.log('false branch');

            // $.get(chrome.extension.getURL('/template.html'), function(data) {
            //     $('#watch-header').after($.parseHTML(data));
            // });



            // function getFrameHtml(htmlFileName) {
            // var xmlhttp = new XMLHttpRequest();
            // xmlhttp.open("GET", chrome.extension.getURL(htmlFileName), false);
            // xmlhttp.send(); return xmlhttp.responseText;
            // }

            // var iframe = document.createElement('iframe');
            // $('#watch-header').after(iframe);
            // iframe.contentDocument.write(getFrameHtml("/template.html"));



            // var iFrame  = document.createElement ("iframe");
            // iFrame.src  = chrome.extension.getURL("/template.html");
            // iFrame.id = "chrome-ext-summarize";
            // iFrame.className = "yt-card";
            // iFrame.style.cssText = 'width:100%; height: 60px;';
            // $('#watch-header').after(iFrame);
            //             iFrame.onload = function() {
            //     $('#text2').text('999999999999999999999999');
            // }


            // get v
            var v = getParameterByName('v', window.location.href);
            console.log('youtube V:', v);


            // console.log(window);
            // console.log(window.frames[0]);


            // if

            //... must https
            // $.get('https://www.reddit.com/v=123123', function(data) {
            //     // $('#watch-header').after($.parseHTML(data));
            // });



            // chrome.runtime.sendMessage({greeting: "您好"}, function(response) {
            //   console.log(response.farewell);
            // });

            chrome.runtime.sendMessage({cmd: "getV", video_id: v}, function(response){
                console.log(response);
                    b(response);
                if(response){
                    console.log('got back');
                } else {

                    console.log('nothig!!');
                      // $('#chrome-ext-summarize').contentWindow.postMessage(
                      //   3,
                      //   chrome.runtime.getURL("") // Origin of embedded page
                      // );
                    // $('#text2').text('asdasdasdafaefaefafaefaef');
                    // console.log('a2 work');
                    // $("#chrome-ext-summarize").contents()[0].execCommand( ... );

                    // console.log(iFrame);

                    // $('#text2').text('nO one');
                    // $('#chrome-ext-summarize').text('nO one');

                    // var innerDoc = iFrame.contentDocument || iFrame.contentWindow.document;
                    // $(innerDoc).find('#chrome-ext-summarize #text').text('nO one');
                    //

                     // chrome.runtime.sendMessage({cmd: "asd"}, function(html){});//nothing happend
                     // a(); // nothing happend
                     // $('#chrome-ext-summarize').contents().find('body').html('Hey, i`ve changed content of <body>! Yay!!!');
                     //
                     //
                     // chrome.tabs.sendMessage({cmd: "asd"}, function(html){});



                    // window.postMessage({ type: "FROM_PAGE", text: "Hello from the webpage!" }, "*");
                    // tell('aha', {'1':'2'});
                    // chrome.tabs.sendMessage
                }
            });



        }
    }
  });
});

// configuration of the observer:
var config = { attributes: true };

// pass in the target node, as well as the observer options
observer.observe(target, config);

// later, you can stop observing
// observer.disconnect();


// function insertAfter(newNode, referenceNode) {
//     referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
// }



// http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}




function getFrameHtml(htmlFileName) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", chrome.extension.getURL(htmlFileName), false);
    xmlhttp.send();

    return xmlhttp.responseText;
}





// TELL
function tell (message, data){

    var data = data || {};

    // send a message to "background.js"

    chrome.extension.sendRequest({

        message : message,

        data : data

    });

};


// LISTEN
// messages coming from iframes and the current webpage

function dom_onMessage (event){

    if (!event.data.message) return;

    // tell another iframe a message
    if (event.data.view){
        tell(event.data);

    }else{

        processMessage(event.data);

    }

};

// messages coming from "background.js"

function background_onMessage (request, sender, sendResponse){

    if (request.data.view) return;

    processMessage(request);

};