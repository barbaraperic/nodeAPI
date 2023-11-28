setTimeout(() => {
	throw new Error("ooup");
}, 300);

process.on("unhandledRejection", () => {});

process.on("unhandledException", () => {});
