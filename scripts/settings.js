'use strict';

chrome.storage.sync.get(['stay_hydrate_interval'], function (result) {
    if (result.stay_hydrate_interval) {
        document.getElementById('intervalInMinute').value = result.stay_hydrate_interval;
    }
});

var save = function () {
    if (document.getElementById('intervalInMinute').value && Number(document.getElementById('intervalInMinute').value > 0)) {
        chrome.storage.sync.set({ stay_hydrate_interval: document.getElementById('intervalInMinute').value }, function () {
            M.toast({ html: 'Time inerval saved!', classes: 'rounded' })
        });
        setTimeout(function () { window.close(); }, 1000);
    } else {
        M.toast({ html: 'interval can not be less than 1 minute!', classes: 'rounded' })
    }
};

document.getElementById('save').addEventListener('click', save);

$(document).on("input", "#intervalInMinute", function () {
    this.value = this.value.replace(/\D/g, '');
});