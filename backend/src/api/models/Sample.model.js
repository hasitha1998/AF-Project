const mongoose = require("mongoose");

const SampleSchema = new mongoose.Schema({
	// TODO: Add more fields
});

module.exports = mongoose.model("Sample", SampleSchema);
