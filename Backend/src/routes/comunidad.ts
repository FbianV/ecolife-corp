import { Router } from "express";
import {getProyectosComunidad, postProyectoComunidad, putProyectoComunidad, deleteProyectoComunidad } from '../controllers/comunidad';

const router=Router();
router.get('/',getProyectosComunidad);
router.post('/',postProyectoComunidad);
router.put('/:idProyecto',putProyectoComunidad);
router.delete('/:idProyecto',deleteProyectoComunidad);

export default router;