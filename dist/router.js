"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// PRODUCT
router.get("/product", () => { });
router.post("/product", () => { });
router.get("/product/:id", () => { });
router.put("/product/:id", () => { });
router.delete("/product/:id", () => { });
// UPDATES
router.get("/update", () => { });
router.post("/update", () => { });
router.get("/update/:id", () => { });
router.put("/update/:id", () => { });
router.delete("/update/:id", () => { });
// UPDATE POINTS
router.get("/updatepoint", () => { });
router.post("/updatepoint", () => { });
router.get("/updatepoint/:id", () => { });
router.put("/updatepoint/:id", () => { });
router.delete("/updatepoint/:id", () => { });
exports.default = router;
//# sourceMappingURL=router.js.map