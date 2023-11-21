import { Router } from "express";

const router = Router();

// PRODUCT

router.get("/product", (req, res) => {
	res.json({ message: req.shh_secret });
});
router.post("/product", () => {});

router.get("/product/:id", () => {});
router.put("/product/:id", () => {});
router.delete("/product/:id", () => {});

// UPDATES

router.get("/update", () => {});
router.post("/update", () => {});

router.get("/update/:id", () => {});
router.put("/update/:id", () => {});
router.delete("/update/:id", () => {});

// UPDATE POINTS

router.get("/updatepoint", () => {});
router.post("/updatepoint", () => {});

router.get("/updatepoint/:id", () => {});
router.put("/updatepoint/:id", () => {});
router.delete("/updatepoint/:id", () => {});

export default router;
