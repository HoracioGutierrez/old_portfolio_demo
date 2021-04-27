import {Router} from "express"
import {getDemoList,getDemo} from "../controllers/demoControllers"

const router = Router()

router.get("/api/demos",getDemoList)
router.get("/api/demo/:slug",getDemo)

export default router