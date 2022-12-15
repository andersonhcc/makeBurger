import { Router } from 'express';
import multer from 'multer';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailsUserController } from './controllers/user/DetailsUserController';

import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';

import { CreateProductController } from './controllers/product/CreateProductController';
import { ListByCategoryController } from './controllers/product/ListByCategoryController';

import { CreateOrderController } from './controllers/order/CreateOrderController';
import { RemoveOrderController } from './controllers/order/RemoveOrderController';

import { isAuthenticated } from './middlewares/isAuthenticated';

import uploadConfig from './config/multer';

const router = Router();
const upload = multer(uploadConfig.upload("tmp"));

// -- routes user --

router.post('/users', new CreateUserController().handle);

router.post('/session', new AuthUserController().handle);

router.get('/me', isAuthenticated, new DetailsUserController().handle);

// -- routes category --

router.post('/category', isAuthenticated, new CreateCategoryController().handle);

router.get('/category', isAuthenticated, new ListCategoryController().getAll);

// -- routes products --

router.post('/product', isAuthenticated, upload.single('file'),  new CreateProductController().handle);

router.get('/category/product', isAuthenticated, new ListByCategoryController().handle);


// -- routes order --

router.post('/order', isAuthenticated, new CreateOrderController().handle);

router.delete('/order', isAuthenticated, new RemoveOrderController().handle);



export { router };  