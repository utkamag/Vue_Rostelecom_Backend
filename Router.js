import Router from "express"
import PostController_C from "../../../../Vue_Rostelecom_Backend/PostController_C.js";
import PostController_D from "../../../../Vue_Rostelecom_Backend/PostController_D.js";
import PostController_E from "../../../../Vue_Rostelecom_Backend/PostController_E.js";
import PostController_F from "../../../../Vue_Rostelecom_Backend/PostController_F.js";

const router = new Router()

router.post('/c', PostController_C.create)
router.get('/c', PostController_C.getAll)
router.get('/c/:id', PostController_C.getOne)
router.put('/c', PostController_C.update)
router.delete('/c/:id', PostController_C.delete)

router.post('/d', PostController_D.create)
router.get('/d', PostController_D.getAll)
router.get('/d/:id', PostController_D.getOne)
router.put('/d', PostController_D.update)
router.delete('/d/:id', PostController_D.delete)

router.post('/e', PostController_E.create)
router.get('/e', PostController_E.getAll)
router.get('/e/:id', PostController_E.getOne)
router.put('/e', PostController_E.update)
router.delete('/e/:id', PostController_E.delete)

router.post('/f', PostController_F.create)
router.get('/f', PostController_F.getAll)
router.get('/f/:id', PostController_F.getOne)
router.put('/f', PostController_F.update)
router.delete('/f/:id', PostController_F.delete)



export default router;

