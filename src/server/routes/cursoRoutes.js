import {Router} from "express"
import { createCurso , getAllCursos , deleteCurso , addConceptToTotal , getTotal , replaceTotal } from "../controllers/cursoControllers"

const router = Router()

router.get("/api/cursos",getAllCursos)
router.get("/api/total",getTotal)

router.post("/api/total",addConceptToTotal)
router.post("/api/curso",createCurso)

router.put("/api/total",replaceTotal)

router.delete("/api/curso/:_id",deleteCurso)

export default router