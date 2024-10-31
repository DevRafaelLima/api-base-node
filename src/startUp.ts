import express, { NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import Database from './infra/db';
import * as DBMySQL from './infra/dbMysql';

// controllers
import PaymentMethodController from './controllers/PaymentMethodController';
import CityController from './controllers/CityController';
import AddressController from './controllers/AddressController';
import CustomerController from './controllers/CustomerController';
class StartUp {
    public app: express.Application;
    private _db: Database = new Database();
    constructor() {
        this.app = express();
        this.middleware();
        this._db.createConnection();
        this.routes();
        DBMySQL.authenticate();
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

        // PaymentMethod
        this.app.route('/api/v1/paymentMethod').get((req: Request, res: Response) => {
            return PaymentMethodController.selectAll(req, res);
        });
        this.app.route('/api/v1/paymentMethod').post((req: Request, res: Response) => {
            return PaymentMethodController.create(req, res);
        });
        this.app.route('/api/v1/paymentMethod/:id').delete((req: Request, res: Response) => {
            return PaymentMethodController.delete(req, res);
        });

        // City
        this.app.route('/api/v1/city').get((req: Request, res: Response) => {
            return CityController.index(req, res);
        });

        // address
        this.app.route('/api/v1/address').get((req: Request, res: Response) => {
            return AddressController.index(req, res);
        });

        // customer
        this.app.route('/api/v1/customer').get((req: Request, res: Response) => {
            return CustomerController.index(req, res);
        });
    }
}

export default new StartUp();