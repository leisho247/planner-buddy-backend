import { Router } from 'express'
import { eventController } from '../controllers/eventController.js'
// import { validateToken } from '../middlewares/validateToken.js'

const eventRouter = Router()
const { createEvent, getEventById, joinEvent, updateEvent, deleteEvent, listEvents, addUserToEvent, removeUserFromEvent } = eventController()

eventRouter.route('/createEvent')
    .get(listEvents)
    .post(/*validateToken,*/ createEvent)
    
eventRouter.route('/joinEvent')
    .post(joinEvent)

eventRouter.route('/events/:id')
    .get(getEventById)
    .put(/*validateToken,*/ updateEvent)
    .delete(/*validateToken,*/ deleteEvent)

eventRouter.route('/events/:eventId/roomDecisions'/*, validateToken*/)

eventRouter.route('/events/:eventId/users')
    .post(addUserToEvent)

eventRouter.route('/events/:eventId/users/:userId')
    .delete(removeUserFromEvent)

export default eventRouter;