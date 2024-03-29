import { Router } from 'express';
import multer from 'multer';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailsUserController } from './controllers/user/DetailsUserController';

import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';

import { CreateProductController } from './controllers/product/CreateProductController';
import { ListByCategoryController } from './controllers/product/ListByCategoryController';
import { DeleteProductContoller } from './controllers/product/DeleteProductController';

import { CreateOrderController } from './controllers/order/CreateOrderController';
import { RemoveOrderController } from './controllers/order/RemoveOrderController';
import { AddItemController } from './controllers/order/AddItemController';
import { RemoveItemController } from './controllers/order/RemoveItemController';
import { SendOrderController } from './controllers/order/SendOrderController';
import { ListOrderController } from './controllers/order/ListOrderController';
import { DetailsOrderController } from './controllers/order/DetailsOrderController';
import { FinishOrderController } from './controllers/order/FinishOrderController';
import { EditItemController } from './controllers/order/EditItemController';
import { DeleAllItemsController } from './controllers/order/DeleteAllItemsDController';

import { isAuthenticated } from './middlewares/isAuthenticated';

import uploadConfig from './config/multer';

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));

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

router.delete('/product', isAuthenticated, new DeleteProductContoller().handle);




// -- routes order --

router.post('/order', isAuthenticated, new CreateOrderController().handle);

router.delete('/order', isAuthenticated, new RemoveOrderController().handle);

router.post('/order/add', isAuthenticated, new AddItemController().handle);

router.delete('/order/remove', isAuthenticated, new RemoveItemController().handle);

router.put('/order/send', isAuthenticated, new SendOrderController().handle);

router.get('/orders', isAuthenticated, new ListOrderController().handle);

router.get('/orders/details', isAuthenticated, new DetailsOrderController().handle);

router.put('/orders/finish', isAuthenticated, new FinishOrderController().handle);

router.put('/order/item', isAuthenticated, new EditItemController().handle);

router.delete('/order/item', isAuthenticated, new DeleAllItemsController().handle);




export { router };  