import { Router } from "express";
import {getProyectos, getProyecto, postProyecto, putProyecto, deleteProyecto } from '../controllers/misProyectos';

const router=Router();
router.get('/:idUser',getProyectos);
router.get('/:idProyecto',getProyecto);
router.post('/',postProyecto);
router.put('/:idProyecto',putProyecto);
router.delete('/:idProyecto',deleteProyecto);

export default router;