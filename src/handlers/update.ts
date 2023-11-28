import prisma from "../db";

// get all updatess
export const getUpdates = async (req, res) => {
	const products = await prisma.product.findMany({
		where: {
			belongsTo: req.user.id,
		},
		include: {
			updates: true,
		},
	});

	const updates = products.reduce((allUpdates, product) => {
		return [...allUpdates, product.updates];
	}, []);

	res.json({ data: updates });
};

// get one update /update/:id
export const getOneUpdate = async (req, res) => {
	const id = req.params.id;
	const update = await prisma.update.findUnique({
		where: {
			id,
		},
	});

	res.json({ data: update });
};

// create update
export const createUpdate = async (req, res) => {
	// 1. does product belong to you
	const product = await prisma.product.findUnique({
		where: {
			id: req.body.productId,
		},
	});

	if (product) {
		// does not belong to the user
		res.json({ message: "nope" });
	}

	const update = await prisma.update.create({
		data: req.body,
	});

	res.json({ data: update });
};

// update an update

export const updateUpdate = async (req, res) => {
	// does product belong to you
	const products = await prisma.product.findMany({
		where: {
			belongsToId: req.user.id,
		},
		include: {
			updates: true,
		},
	});

	const updates = products.reduce((allUpdates, product) => {
		return [...allUpdates, product.updates];
	}, []);

	const match = updates.find((update) => update.id === req.params.id);

	if (!match) {
		return res.json({ message: "Nope" });
	}

	const updatedUpdate = await prisma.update.update({
		where: {
			id: req.params.id,
		},
		data: req.body,
	});

	res.json({ data: updatedUpdate });
};

// delete an update

export const deleteUpdate = async (req, res) => {
	// does product belong to you
	const products = await prisma.product.findMany({
		where: {
			belongsToId: req.user.id,
		},
		include: {
			updates: true,
		},
	});

	const updates = products.reduce((allUpdates, product) => {
		return [...allUpdates, product.updates];
	}, []);

	const match = updates.find((update) => update.id === req.params.id);

	if (!match) {
		return res.json({ message: "Nope" });
	}

	const deletedUpdate = await prisma.update.delete({
		where: {
			id: req.params.id,
		},
	});

	res.json({ data: deletedUpdate });
};
