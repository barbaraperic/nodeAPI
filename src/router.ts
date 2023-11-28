import { Router } from "express";
import { body, oneOf, validationResult } from "express-validator";
import { handleInputErrors } from "./modules/middleware";
import {
	createProduct,
	deleteProduct,
	getOneProduct,
	getProducts,
	updateProduct,
} from "./handlers/product";
import {
	createUpdate,
	deleteUpdate,
	getOneUpdate,
	getUpdates,
	updateUpdate,
} from "./handlers/update";

const router = Router();

// PRODUCT

router.get("/product", getProducts);
router.post(
	"/product",
	body("name").isString(),
	handleInputErrors,
	createProduct
);

router.get("/product/:id", getOneProduct);

router.put(
	"/product/:id",
	body("name").isString(),
	handleInputErrors,
	updateProduct
);

router.delete("/product/:id", deleteProduct);

// UPDATES

router.get("/update", getUpdates);
router.get("/update/:id", getOneUpdate);

router.put(
	"/update/:id",
	body("title").exists(),
	body("body").exists(),
	body("version").optional(),
	body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]).optional(),
	handleInputErrors,
	updateUpdate
);

router.post(
	"/update",
	body("title").exists().isString(),
	body("body").exists().isString(),
	body("productId").exists().isString(),
	handleInputErrors,
	createUpdate
);

router.delete("/update/:id", deleteUpdate);

// UPDATE POINTS

router.get("/updatepoint", () => {});
router.post(
	"/updatepoint",
	body("name").optional().isString(),
	body("description").optional().isString(),
	body("updateId").exists().isString(),
	() => {}
);

router.get("/updatepoint/:id", () => {});
router.put(
	"/updatepoint/:id",
	body("name").optional().isString(),
	body("description").optional().isString(),
	() => {}
);
router.delete("/updatepoint/:id", () => {});

export default router;
