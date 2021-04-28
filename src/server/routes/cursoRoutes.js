import {Router} from "express"
import { createCurso , getAllCursos , deleteCurso} from "../controllers/cursoControllers"

const router = Router()

router.get("/api/cursos",getAllCursos)
router.post("/api/curso",createCurso)
router.delete("/api/curso/:_id",deleteCurso)

export default router