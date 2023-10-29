const express = require("express");
// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();
app.get("/", (req, res) => {
	const response = {
		node_name: process.env.MY_NODE_NAME,
		pod_name: process.env.MY_POD_NAME,
	};

	res.send(response);
});

app.listen(PORT, HOST, () => {
	console.log(`Running on http://${HOST}:${PORT}`);
});
