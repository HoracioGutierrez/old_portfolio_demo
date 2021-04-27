import {Router} from "express"
import { createCurso } from "../controllers/cursoControllers"

const router = Router()

router.post("/api/curso",createCurso)

export default router