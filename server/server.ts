import compression from 'compression';
import express, { RequestHandler } from 'express';
import helmet from 'helmet';

import app from './app';

app.use(express.json());
app.use(helmet()); // set well-known security-related HTTP headers
app.use(compression() as unknown as RequestHandler);

app.disable("x-powered-by");

const port = 4000;

const server = app.listen(port, () =>
    console.log("Starting ExpressJS server on Port " + port));

export default server;
