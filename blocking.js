// blocking
const fs = require("fs/promises");
const path = require("path");

const read = async () => {
	const result = fs.readFile(path.join(__dirname, "package.json"));
	return result;
};

read().then((data) => console.log(data));
console.log("=== HI ===");
