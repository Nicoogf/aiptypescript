import { Router } from "express";
import { signIn, singUp } from "../controllers/userControllers";

const router = Router() ;

router.post ("/singup" , singUp )
router.post ("/singin" , signIn )

export default router ;