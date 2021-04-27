import {Router} from "express"
import {getDemoList} from "../controllers/demoControllers"

const router = Router()

router.get("/api/demos",getDemoList)

export default router