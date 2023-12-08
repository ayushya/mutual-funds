import axios from 'axios';
import deepmerge from 'deepmerge';
import express from 'express';

import {
  DEFAULT_DURATION,
  GET_FUNDS,
} from './constants';
import { formatData } from './utility';

const app = express();
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
  });
// app.use(cors());

export const CACHE_EXPIRY = 60 * 60 * 1000; // 60 Mins

let dataCache = null;

// Reset dataCache with every CACHE_EXPIRY time
setInterval(() => {
  dataCache = null;
}, CACHE_EXPIRY);

app.get('/', (req, res) => {
        res.redirect('/healthcheck');
    });
  
  app.get('/getFunds', async (req, res) => {  
    if (!dataCache) {
      console.log('Fetching data from API')
      const growth = await axios.get(GET_FUNDS('GROWTH')).then(r => r.data);
      const dividend = await axios.get(GET_FUNDS('DIVIDEND')).then(r => r.data);
      const rawData: any = deepmerge(growth, dividend);
  
      const data = await formatData(rawData, DEFAULT_DURATION);
      dataCache = data;
    } else {
      console.log('Serving from cache')
    }

    res.json(dataCache);
  });
  
  app.get('/healthcheck', (req, res) => {
    res.send('Looks like the server is up and running!');
  })


export default app;