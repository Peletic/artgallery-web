import express, {Application} from "express"
import "@/lib/util/log";
import "@/routes"
import {decoratedRoutes} from "@/lib/routing";

const app = express()
const port = 8080

app.use(express.json())


const configureRoutes = (app: Application) => {
    const router = express.Router();
    const routes = {}
    app.use("/", (req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept'
        );
        next()
    })
    app.use('/', router)
    app.get("/", (req, res) => {
        res.send("hello")
    })

    decoratedRoutes.forEach(Route => {
        const instance = new Route(app)
        // @ts-ignore
        routes[instance["route"]] = instance
    })

    app.get("/routes", (req, res) => {
        res.send(JSON.stringify(routes, null, 4))
    })
}
configureRoutes(app)


export interface RouterConstructor {
    new(app: Application): any
}

app.listen(port, () => {
    console.log(`Prepared on port ${port} (http://${"localhost:"+port}/)`)
})
