import { Router } from 'express';
import { getmaterialList ,createMaterial } from '../controllers/material.controller.js'


const router = Router();

router.route("/getMaterials").get(getmaterialList);

router.route("/createMaterial").post(createMaterial);

export default router;