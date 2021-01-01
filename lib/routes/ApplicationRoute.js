/**
 * @author <akartis-dev>
 *
 * Do it with love
 */
import {env} from "../environment";

class ApplicationRoute {

    appRoute(app) {
        app.get(env.serverPrefix + "api/", (req, res) => {
            res.send("Hello api")
        })
    }

}

export default new ApplicationRoute()
