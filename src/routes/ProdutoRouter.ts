import { Router } from "express";
import {ProdutoController}

const router = Router();

const controller = new ProdutoController();

router.post("/login", controller.login);

router.post("/signup", controller.signup);

export default router;