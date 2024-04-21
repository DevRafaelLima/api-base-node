import express, { NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';

class StartUp {
    public app: express.Application;
    constructor() {
        this.app = express();
        this.middleware();
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
    }
}

export default new StartUp();