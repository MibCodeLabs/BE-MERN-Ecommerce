import { Router } from "express";
import testRouter from "./test.router.js";
import { customerAccountRouter } from "./customer-account.router.js";
import { internalAccountRouter } from "./internal-account.router.js";
import { orderRouter } from "./order.router.js";
import { productCategoryRouter } from "./product-category.router.js";
import { productRouter } from "./product.router.js";
import { shopAccountRouter } from "./shop-account.router.js";
import { shopAffiliationRouter } from "./shop-affiliation.router.js";
import { shopRouter } from "./shop.router.js";
import authRouter from "./auth.router.js";


const router = Router();
router.use('/',testRouter)
router.use('/auth',authRouter)
router.use('/customer-account',customerAccountRouter)
router.use('/internal-account',internalAccountRouter)
router.use('/order',orderRouter)
router.use('/product-category',productCategoryRouter)
router.use('/product',productRouter)
router.use('/shop-account',shopAccountRouter)
router.use('/shop-affiliation',shopAffiliationRouter)
router.use('/shop',shopRouter)

export default router;