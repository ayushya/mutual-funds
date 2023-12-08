import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';

import app from './app';

app.use(cors());
// Configure body-parser to handle JSON data
app.use(bodyParser.json());
app.use(helmet()); // set well-known security-related HTTP headers
app.use(compression());

app.disable("x-powered-by");

const port = 4000;

const server = app.listen(port, () =>
    console.log("Starting ExpressJS server on Port " + port));

export default server;