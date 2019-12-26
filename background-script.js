var ws;
var connected = false;
var connection_url = '192.168.0.161';
var connection_port = 1337;

console.log("Creepy Started");

browser.runtime.onMessage.addListener((m) => {
	
	console.log(m);
	var msg = m.split(' ');

	if (msg[0] == 'creepy')
		switch (msg[1]) {
			case 'connect':
				if (!connected)
					console.log('trying connect ', msg[2],parseInt(msg[3]));
					connect(msg[2],parseInt(msg[3]));
				break;

			case 'command':
				console.log(msg[1], msg[2]);
				if (connected)
					send(m.split('creepy command ')[1]);
				break;

			case 'browser':
				console.log(msg[1], msg[2]);
				browser.tabs.query({
					currentWindow:true,
					active:true
				}).then((t) => {
					console.log(t)
					if (connected)
						send(msg[1] + ' ' + t[0].url);
				}, console.log);

				
				break;

			default:
				console.log('uk cmd');
				break;
		}
})

function connect(url,port) {
	console.log('connecting')
	ws = new WebSocket(`ws://${url}:${port}`, 'mine');

	ws.onopen = function () {
		connected = true;
		console.log("connected");
		//ws.send('beast')
	};

	ws.onclose = function () {
		connected = false;
	};
}

function send(cmd) {
	ws.send(cmd);
	console.log("Sending " + cmd);

}

browser.runtime.onMessage.addListener(notify);

function notify(message) {
	console.log(message + ' from runtime')
}