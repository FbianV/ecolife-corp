import { Router } from "express";
import {getCuenta, postCuenta , updateCuenta , isLogCuenta} from '../controllers/cuenta';

const router=Router();
router.get('/signIn',getCuenta);
router.get('/loggin',getCuenta);
router.post('/signUp',postCuenta);
router.put('/update',updateCuenta);


export default router;