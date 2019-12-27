var sendVal = document.getElementById('sendIp');
var cmdVal = document.getElementById('cmdIp');
var sendBtn = document.getElementById('sendBtn');
var tabBtn = document.getElementById('tabBtn');
var upBtn = document.getElementById('upBtn');
var downBtn = document.getElementById('downBtn');
var connectBtn = document.getElementById('connectBtn');
var urlVal = document.getElementById('urlIp');
var portVal = document.getElementById('portIp');

urlVal.value = localStorage.getItem("creepyurl");
portVal.value = localStorage.getItem("creepyport");
cmdVal.value = localStorage.getItem("creepycommand");
sendVal.value = localStorage.getItem("creepyraw");

message = {}

connectBtn.onclick = function() {
	connectBtn.style.color="red";
	console.log('Trying connect');
	message.meta = 'connect';
	message.url = urlVal.value;
	message.port = portVal.value;
	browser.runtime.sendMessage(JSON.stringify(message));
}

sendBtn.onclick = function() {
	message.meta = 'raw'
	message.cmd = cmdVal.value;
	message.string = sendVal.value;
	localStorage.setItem("creepycommand", message.cmd);
	localStorage.setItem("creepyraw", message.string);
	browser.runtime.sendMessage(JSON.stringify(message));
	console.log('Trying send');
}

tabBtn.onclick = function() {
	message.cmd = 'browser';
	message.meta = 'browser';
	browser.runtime.sendMessage(JSON.stringify(message));
	console.log('Trying send');
}

upBtn.onclick = function() {
	message.cmd = 'control';
	message.meta = 'raw';
	message.string = 'up';
	browser.runtime.sendMessage(JSON.stringify(message));
	browser.runtime.sendMessage(JSON.stringify(message));
	browser.runtime.sendMessage(JSON.stringify(message));
	console.log('Trying send');
}

downBtn.onclick = function() {
	message.cmd = 'control';
	message.meta = 'raw';
	message.string = 'down';
	browser.runtime.sendMessage(JSON.stringify(message));
	browser.runtime.sendMessage(JSON.stringify(message));
	browser.runtime.sendMessage(JSON.stringify(message));
	console.log('Trying send');
}

browser.runtime.onMessage.addListener((m, sender) => {

	console.log(m);
	var msg = JSON.parse(m);

	if (typeof msg.info != 'undefined') {
		switch (msg.info) {
			case 'connected':
				console.log(msg.info)
				connectBtn.style.color="green";
				break;
		
			default:
				break;
		}
	}
});