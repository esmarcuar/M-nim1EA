import denunciasController from '../controller/denunciasController';
import { Router } from 'express';

const router = Router();

router.get('/', denunciasController.getall);
router.get('/:id_denuncia', denunciasController.getone);
router.post('/', denunciasController.setone);
router.delete('/:id_denuncia', denunciasController.deleteDenuncia);

router.get('/:id_denuncia/comments', denunciasController.getComments);
router.get('/:id_denuncia/comments/:id_comment', denunciasController.getComment);
router.post('/:id_denuncia/comments', denunciasController.addComment);
router.delete('/:id_denuncia/comments/:id_comment', denunciasController.deleteComment);
router.post('/', denunciasController.addDenuncia);

export default router;