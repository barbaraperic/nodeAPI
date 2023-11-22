import { Router } from "express";
import { body, oneOf, validationResult } from "express-validator";
import { handleInputErrors } from "./modules/middleware";

const router = Router();

// PRODUCT

router.get("/product", (req, res) => {
	res.json({ message: req.shh_secret });
});
router.post(
	"/product",
	body("name").isString(),
	handleInputErrors,
	(req, res) => {}
);

router.get("/product/:id", () => {});

router.put(
	"/product/:id",
	body("name").isString(),
	handleInputErrors,
	(req, res) => {}
);

router.delete("/product/:id", () => {});

// UPDATES

router.get("/update", () => {});
router.post(
	"/update",
	body("title").exists(),
	body("body").exists(),
	handleInputErrors,
	(req, res) => {}
);

router.get("/update/:id", () => {});
router.put(
	"/update/:id",
	body("title").exists(),
	body("body").exists(),
	body("version").optional(),
	body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]).optional(),
	handleInputErrors,
	(req, res) => {}
);
router.delete("/update/:id", () => {});

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
