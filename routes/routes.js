import express from 'express'
import getcatelog1 from '../controller/catelog1-controller.js'
import getcatelog2 from '../controller/catelog2-controller.js'
import getcatelog3 from '../controller/catelog3-controller.js'
import bookOrder from '../controller/order-booking-controller.js'
import getbookingDetails from '../controller/booking-details-controller.js'

const route=express.Router();

route.get('/browseCatelog1',getcatelog1);

route.get('/browseCatelog2',getcatelog2);

route.get('/browseCatelog3',getcatelog3);

route.post('/bookOrder',bookOrder);

route.get('/showBookingDetails',getbookingDetails);

export default route;
