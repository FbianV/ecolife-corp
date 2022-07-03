import { Router } from "express";
import {getCuenta, postCuenta} from '../controllers/cuenta';

const router=Router();
router.post('/signIn',getCuenta);
router.post('/signUp',postCuenta);


export default router;