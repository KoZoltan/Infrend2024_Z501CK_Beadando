import express = require('express');
import { PatientController } from './controller/patient.controller';
import { RecordsController } from './controller/records.controller';
import { VisitController } from './controller/visit.controller';

export function getRoutes(){
    const router = express.Router();

    const patientController = new PatientController();
    const slicerController = new RecordsController();
    const visitController = new VisitController();

    router.get('/patient', patientController.getAll);
   // router.get('/patient/:taj', patientController.getOne);
    router.post('/patient', patientController.create);
    router.put('/patient/:taj', patientController.update);
    router.delete('/patient/:taj', patientController.delete);
    router.get('/patient/', patientController.getOneTaj);

    /*router.get('/slicer', slicerController.getAll);
    //router.get('/slicer/:taj', slicerController.getOne);
    router.post('/slicer', slicerController.create);
    router.put('/slicer/:taj', slicerController.update);
    router.delete('/slicer/:taj', slicerController.delete);
    router.get('/slicer/', slicerController.getOneTaj);*/

    router.get('/medrec', visitController.getAll);
    //router.get('/medrec/:taj', medrecController.getOne);
    router.post('/medrec', visitController.create);
    router.put('/medrec/:taj', visitController.update);
    router.delete('/medrec/:taj', visitController.delete);
    router.get('/medrec/', visitController.getOneTaj);
    
    return router;
}