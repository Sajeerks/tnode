import express, {Router} from  'express'
import { getUsers } from '../controllers/userController.ts'


const router:Router = express.Router()

router.get("/all", getUsers)


export default router