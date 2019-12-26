var sendVal = document.getElementById('sendIp');
var sendBtn = document.getElementById('sendBtn');
var tabBtn = document.getElementById('tabBtn');
var upBtn = document.getElementById('upBtn');
var downBtn = document.getElementById('downBtn');
var connectBtn = document.getElementById('connectBtn');
var urlVal = document.getElementById('urlIp');
var portVal = document.getElementById('portIp');

connectBtn.onclick = function() {
	console.log('Trying connect');
	browser.runtime.sendMessage('creepy connect ' + urlVal.value + ' ' + portVal.value);
}

sendBtn.onclick = function() {
	browser.runtime.sendMessage('creepy command ' + sendVal.value);
	console.log('Trying send');
}

tabBtn.onclick = function() {
	browser.runtime.sendMessage('creepy browser ');
	console.log('Trying send');
}

upBtn.onclick = function() {
	browser.runtime.sendMessage('creepy command control up');
	browser.runtime.sendMessage('creepy command control up');
	browser.runtime.sendMessage('creepy command control up');
	console.log('Trying send');
}

downBtn.onclick = function() {
	browser.runtime.sendMessage('creepy command control down');
	browser.runtime.sendMessage('creepy command control down');
	browser.runtime.sendMessage('creepy command control down');
	console.log('Trying send');
}
