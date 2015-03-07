var async = require("async");
module.exports = {
	"setup": function(nemo, callback) {
		//console.log(config);
		nemo.autoRegPlugin = {};
		nemo.autoRegPlugin.isDriverSetup = (nemo.driver.get !== undefined);

		//array for waterfall methods
		var sampleCalls = [
			function(cbk) {
				setTimeout(function() {
					cbk(null, {
						"fine": "good"
					})
				}, 2000)
			}
		];

		sampleCalls.push(function(res, cbk) {
			cbk(null, {
				"result": "good"
			});
		});


		async.waterfall(sampleCalls, function(err, result) {
			callback(err, nemo);
		});

	}
};