"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userControllers_1 = require("../controllers/userControllers");
const router = (0, express_1.Router)();
router.post("/singup", userControllers_1.singUp);
router.post("/singin", userControllers_1.signIn);
exports.default = router;
