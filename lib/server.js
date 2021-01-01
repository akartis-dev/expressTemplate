/**
 * @author <akartis-dev>
 *
 * Do it with love
 */
import app from "./config/App"
import {env} from "./environment";

app.listen(env.port, () => console.log("Server start at port" + env.port))
