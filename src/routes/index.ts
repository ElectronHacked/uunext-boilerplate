import routes from './routes.json'
import { IRoute } from 'models/route.js'

export const APP_ROUTES = (routes as unknown) as IRoute[]

export default APP_ROUTES
