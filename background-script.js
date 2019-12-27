var ws;
var connected = false;
var connection_url = '192.168.0.161';
var connection_port = 1337;

localStorage.setItem("creepyurl", "localhost");
localStorage.setItem("creepyport", "1337");
localStorage.setItem("creepycommand", "control");
localStorage.setItem("creepyraw", "up");

var message = {}
var cmd = {}

console.log("Creepy Started");

browser.runtime.onMessage.addListener((m) => {
	
	var cmd;

	console.log(m);
	var msg = JSON.parse(m);

	if (typeof msg.meta != 'undefined')
		switch (msg.meta) {
			case 'connect':
				if (!connected) {
					connect(msg.url,msg.port);
				} else {
					message.info = connected;
					console.log("connected");
					browser.tabs.sendMessage(JSON.stringify(message))
				}
				break;

			case 'raw':
				console.log(msg);
				if (connected)
					send(msg);
				break;

			case 'browser':
				console.log(msg);
				browser.tabs.query({
					currentWindow:true,
					active:true
				}).then((t) => {
					console.log(t)
					if (connected)
						send(msg);
				}, console.log);
				break;

			default:
				console.log('uk cmd');
				break;
		}
})

function connect(url,port) {
	ws = new WebSocket(`ws://${url}:${port}`, 'mine');

	ws.onopen = function () {
		localStorage.setItem("creepyport", port);
		localStorage.setItem("creepyurl", url);
		message.info = 'connected';
		connected = true;
		console.log("connected");
		browser.tabs.sendMessage(JSON.stringify(message))
		//ws.send('beast')
	};

	ws.onclose = function () {
		connected = false;
	};
}

function send(cmd) {
	ws.send(JSON.stringify(cmd));
	console.log("Sending " + cmd);
}