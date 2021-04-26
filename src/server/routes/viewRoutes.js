import {Router} from "express"
import {renderStaticHtml} from "../controllers/viewControllers"

const router = Router()

router.get("*",renderStaticHtml)

export default router