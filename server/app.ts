import axios from 'axios';
import deepmerge from 'deepmerge';
import express from 'express';

import { GET_FUNDS } from './constants';

const app = express()


app.get('/', (req, res) => {
        res.redirect('/healthcheck');
    });
  
  app.get('/getFunds', async (req, res) => {
    // const data = await fetch("https://api.kuvera.in/insight/api/v1/mutual_fund_search.json?limit=10000&scheme_plan=GROWTH&order_by=desc&v=342", {
    //   "headers": {
    //     "accept": "application/json, text/plain, */*",
    //     "accept-language": "en-IN,en-US;q=0.9,en-GB;q=0.8,en;q=0.7",
    //     "cache-control": "no-cache",
    //     "pragma": "no-cache",
    //     "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
    //     "sec-ch-ua-mobile": "?0",
    //     "sec-ch-ua-platform": "\"macOS\"",
    //     "sec-fetch-dest": "empty",
    //     "sec-fetch-mode": "cors",
    //     "sec-fetch-site": "cross-site",
    //     "Referer": "https://ayushya.github.io/",
    //     "Referrer-Policy": "strict-origin-when-cross-origin"
    //   },
    //   "body": null,
    //   "method": "GET"
    // });
  
  
    const growth = await axios.get(GET_FUNDS('GROWTH')).then(r => r.data);
    const dividend = await axios.get(GET_FUNDS('DIVIDEND')).then(r => r.data);
    const data: any = deepmerge(growth, dividend);
  
  
    // console.log(data.data);
    res.json(data.data);
  });
  
  app.get('/healthcheck', (req, res) => {
    res.send('Looks like the server is up and running!');
  })


export default app;