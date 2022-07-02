import { Router } from "express";
import {getCuenta, postCuenta} from '../controllers/cuenta';

const router=Router();
router.get('/signIn',getCuenta);
router.post('/signUp',postCuenta);


export default router;