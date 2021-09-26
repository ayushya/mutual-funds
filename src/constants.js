import moment from 'moment';

export const SERVER_API_URL = 'https://api.kuvera.in/mf/api/v4';

export const GET_FUNDS = `${SERVER_API_URL}/fund_schemes/list.json?v=${moment().dayOfYear()}`;

export const GET_FUNDS_DETAILS = (fundCodeListString) => `${SERVER_API_URL}/fund_schemes/${fundCodeListString}.json?v=${moment().dayOfYear()}`;

export const DEFAULT_DURATION = 1;

export const DURATION_LIST = [1, 3, 5];