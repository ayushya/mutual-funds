import moment from 'moment';

export const SERVER_API_URL = 'https://api.kuvera.in';

export const GET_FUNDS = `${SERVER_API_URL}/insight/api/v1/mutual_fund_search.json?limit=10000&order_by=desc&v=${moment().dayOfYear()}`;

export const GET_FUNDS_DETAILS = (fundCodeListString) => `${SERVER_API_URL}/mf/api/v5/fund_schemes/${fundCodeListString}.json?v=${moment().dayOfYear()}`;

export const DEFAULT_DURATION = 1;

export const DURATION_LIST = [1, 3, 5];