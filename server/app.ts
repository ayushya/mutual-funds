import axios from 'axios';
import deepmerge from 'deepmerge';
import express from 'express';

import {
  DEFAULT_DURATION,
  GET_FUNDS,
} from './constants';
import { formatData } from './utility';

const app = express();

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
      const growth = await axios.get(GET_FUNDS('GROWTH')).then(r => r.data);
      const dividend = await axios.get(GET_FUNDS('DIVIDEND')).then(r => r.data);
      const rawData: any = deepmerge(growth, dividend);
  
      const data = await formatData(rawData, DEFAULT_DURATION);
      dataCache = data;
    }

    res.json(dataCache);
  });
  
  app.get('/healthcheck', (req, res) => {
    res.send('Looks like the server is up and running!');
  })


export default app;