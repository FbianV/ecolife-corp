import { Router } from "express";
import {getComunidad, postComunidad, putComunidad, deleteComunidad } from '../controllers/comunidad';

const router=Router();
router.get('/',getComunidad);
router.post('/',postComunidad);
router.put('/:idProyecto',putComunidad);
router.delete('/:idProyecto',deleteComunidad);

export default router;