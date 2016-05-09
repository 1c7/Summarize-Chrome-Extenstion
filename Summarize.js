// alert('asda');
console.log('hello, I got execute');


//http://stackoverflow.com/questions/8894461/updating-an-extension-button-dynamically-inspiration-required
//
// data = {} // collect something from page
// chrome.extension.sendRequest(data);




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
    console.log(mutation.type);
    var a = target.getAttribute('data-spf-name');
    console.log(a);
    if(a == 'watch'){
        console.log('of course i working');
        // console.log($('#watch-header').length);

        if ($('#chrome-ext-summarize').length > 0){

        } else {
            $.get(chrome.extension.getURL('/template.html'), function(data) {
                $('#watch-header').after(data);
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














