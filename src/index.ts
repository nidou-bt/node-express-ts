import express, { Express } from "express";
import helmet from "helmet";
import cors from "cors";
import bodyParser from "body-parser";
import router from './routes';

const PORT = process.env.PORT || 3001;

const app: Express = express();

// set security HTTP headers
app.use(helmet());

// enable cors
app.use(cors());
app.options("*", cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

// v1 api routes
app.use('/api', router);

app.listen(PORT, ()=> console.log('server run in port 3000'))