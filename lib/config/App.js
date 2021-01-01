/**
 * @author <akartis-dev>
 *
 * Do it with love
 */
const express = require("express")
const bodyParser = require('body-parser')
import appRoute from "../routes/ApplicationRoute"

class App{
    constructor() {
        this.app = express()
        this.setMiddleware()
        this.setApplicationRoute()
    }

    setMiddleware(){
        this.app.use(bodyParser.json())
    }

    setApplicationRoute(){
        appRoute.appRoute(this.app)
    }

    getServer(){
        return this.app
    }
}

export default new App().getServer()
