chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        "id": "contxMenu",
        "title": "Stay Hydrated",
        "contexts": ["page"],
        "type": "normal"
    });
});

chrome.contextMenus.onClicked.addListener(function () {
    alert('do something!');
});

chrome.omnibox.setDefaultSuggestion({ description: "stay hydrated" });

chrome.alarms.onAlarm.addListener(function () {
    chrome.notifications.create({
        type: 'basic',
        iconUrl: 'images/water_icon.png',
        title: 'Time to drink water',
        message: 'Have a nice day!',
    });
});
