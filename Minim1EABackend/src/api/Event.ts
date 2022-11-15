import eventController from '../controller/eventController';
import { Router } from 'express';

const router = Router();

router.get('/', eventController.getall);
router.get('/:id_denuncia', eventController.getone);
router.post('/', eventController.setone);
router.put('/:id_denuncia', eventController.update);
router.delete('/:id_denuncia', eventController.deleteEvent);

router.get('/:id_denuncia/comments', eventController.getComments);
router.get('/:id_event/comments/:id_comment', eventController.getComment);
router.post('/:id_denuncia/comments', eventController.addComment);
router.put('/:id_event/comments/:id_comment', eventController.updateComment);
router.delete('/:id_event/comments/:id_comment', eventController.deleteComment);
router.post('/', eventController.addEvent);

export default router;