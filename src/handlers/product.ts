import prisma from "../db";

// get all

export const getProducts = async (req, res) => {
	// query the User
	const user = await prisma.user.findUnique({
		where: {
			id: req.user.id,
		},
		include: {
			products: true,
		},
	});

	res.json({ data: user.products });
};

// get one
export const getOneProduct = async (req, res) => {
	const id = req.params.id;
	const product = prisma.product.findFirst({
		where: {
			id,
			belongsToId: req.user.id,
		},
	});
	return res.json({ data: product });
};
