import express, { NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import Database from './infra/db';

// controllers
import PermissionController from './controllers/PermissionController';
import UserController from './controllers/UserController';
import ClientController from './controllers/ClientController';
import ProductController from './controllers/ProductController';
import OrderController from './controllers/OrderController';
class StartUp {
    public app: express.Application;
    private _db: Database = new Database();
    constructor() {
        this.app = express();
        this.middleware();
        this._db.createConnection();
        this.routes();

    }
    middleware(): void {
        this.app.use(bodyParser.json());
        this.app.use((req: Request, res: Response, next: NextFunction) => {
            delete req.body.id;
            next();
        });
    }

    routes() {
        this.app.route('/').get((req: Request, res: Response) => {
            res.send({ version: '0.0.1' });
        });  

        // Permissions
        this.app.route('/api/v1/permission/:id').get((req: Request, res: Response) => {
            return PermissionController.getById(req, res);
        });
        this.app.route('/api/v1/permission').post((req: Request, res: Response)=> {
            return PermissionController.create(req, res);
        });  

        // users
        this.app.route('/api/v1/user').post((req: Request, res: Response) => {
            return UserController.create(req, res);
        });

        // clients
        this.app.route('/api/v1/client').post((req: Request, res: Response) => {
            return ClientController.create(req, res);
        });


        // Products
        this.app.route('/api/v1/product').post((req: Request, res: Response) => {
            return ProductController.create(req, res);
        });


        // order
        this.app.route('/api/v1/order').post((req: Request, res: Response) => {
            return OrderController.create(req, res);
        });
    }
}

export default new StartUp();