import {Router} from "express"
import { createCurso , getAllCursos } from "../controllers/cursoControllers"

const router = Router()

router.get("/api/cursos",getAllCursos)
router.post("/api/curso",createCurso)

export default router