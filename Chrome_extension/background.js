console.log("i am bg");

chrome.browserAction.onClicked.addListener(function(){
    console.log('you clicked me');
    chrome.tabs.executeScript({
        file:"content.js"
    });
});