import { Request, Response } from 'express';
import { SaleforceService } from '../service/salesforceapiService';
import { CustomLogger } from '../config/Logger'
let saleforceService = new SaleforceService();

export class SaleforceController {

    constructor() { }

    public GpSearch(req: Request, res: Response) {
        new CustomLogger().guidLog(req);

        saleforceService.GpSearch(req, (response) => {
            new CustomLogger().showLogger('info', 'Enter into testsaleforcepathapiController.ts: GpSearch');
            res.status(200);
            res.json(response);
            new CustomLogger().showLogger('info', 'Exit from testsaleforcepathapiController.ts: GpSearch');
        })
    }
    public GpDelete(req: Request, res: Response) {
        new CustomLogger().guidLog(req);

        saleforceService.GpDelete(req, (response) => {
            new CustomLogger().showLogger('info', 'Enter into ticketsController.ts: GpDelete');
            res.status(200);
            res.json(response);
            new CustomLogger().showLogger('info', 'Exit from ticketsController.ts: GpDelete');
        })
    }
    public GpSearchForUpdate(req: Request, res: Response) {
        new CustomLogger().guidLog(req);

        saleforceService.GpSearchForUpdate(req, (response) => {
            new CustomLogger().showLogger('info', 'Enter into ticketsController.ts: GpSearchForUpdate');
            res.status(200);
            res.json(response);
            new CustomLogger().showLogger('info', 'Exit from ticketsController.ts: GpSearchForUpdate');
        })
    }
    public GpUpdate(req: Request, res: Response) {
        new CustomLogger().guidLog(req);

        saleforceService.GpUpdate(req, (response) => {
            new CustomLogger().showLogger('info', 'Enter into ticketsController.ts: GpUpdate');
            res.status(200);
            res.json(response);
            new CustomLogger().showLogger('info', 'Exit from ticketsController.ts: GpUpdate');
        })
    }
    public GpGetNounById(req: Request, res: Response) {
        new CustomLogger().guidLog(req);

        saleforceService.GpGetNounById(req, (response) => {
            new CustomLogger().showLogger('info', 'Enter into ticketsController.ts: GpGetNounById');
            res.status(200);
            res.json(response);
            new CustomLogger().showLogger('info', 'Exit from ticketsController.ts: GpGetNounById');
        })
    }
    public GpGetAllValues(req: Request, res: Response) {
        new CustomLogger().guidLog(req);

        saleforceService.GpGetAllValues(req, (response) => {
            new CustomLogger().showLogger('info', 'Enter into ticketsController.ts: GpGetAllValues');
            res.status(200);
            res.json(response);
            new CustomLogger().showLogger('info', 'Exit from ticketsController.ts: GpGetAllValues');
        })
    }
    public GpCreate(req: Request, res: Response) {
        new CustomLogger().guidLog(req);

        saleforceService.GpCreate(req, (response) => {
            new CustomLogger().showLogger('info', 'Enter into ticketsController.ts: GpCreate');
            res.status(200);
            res.json(response);
            new CustomLogger().showLogger('info', 'Exit from ticketsController.ts: GpCreate');
        })
    }
    public GpGetNounCreatedBy(req: Request, res: Response) {
        new CustomLogger().guidLog(req);

        saleforceService.GpGetNounCreatedBy(req, (response) => {
            new CustomLogger().showLogger('info', 'Enter into testsaleforcepathapiController.ts: GpGetNounCreatedBy');
            res.status(200);
            res.json(response);
            new CustomLogger().showLogger('info', 'Exit from testsaleforcepathapiController.ts: GpGetNounCreatedBy');
        })
    }

    public salesforcelogin(req: Request, res: Response) {
        new CustomLogger().guidLog(req);

        saleforceService.salesforcelogin(req, (response) => {
            new CustomLogger().showLogger('info', 'Enter into ticketsController.ts: GpCreate');
            res.status(200);
            res.json(response);
            new CustomLogger().showLogger('info', 'Exit from ticketsController.ts: GpCreate');
        })
    }


}