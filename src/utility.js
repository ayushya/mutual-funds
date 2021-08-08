import axios from 'axios';

import { GET_FUNDS_DETAILS } from './constants';

export const formatData = async (data, duration) => {
    let fundList = [];
    const categoryList = Object.keys(data);
    categoryList?.forEach((category) => {
        const subCategoryList = Object.keys(data[category]);
        subCategoryList.forEach((subCategory) => {
            const fundHouseList = Object.keys(data[category][subCategory]);
            fundHouseList.forEach((fundHouse) => {
                data[category][subCategory][fundHouse].forEach((fund) => {
                    const { c, kc, n, r, re, v } = fund;
                    fundList.push({
                        name: n,
                        code: c,
                        returns: r,
                        volatility: v,
                        categoryMentioned: kc,
                        category,
                        subCategory,
                    });
                });
            })
        });
    });

    const DATA_BATCH_SIZE = 50;
    const NUMBER_OF_API_CALLS = Math.ceil(fundList.length / DATA_BATCH_SIZE);

    const promiseList = [];
    for (let i = 0; i < NUMBER_OF_API_CALLS; i++) {
        const fundCodeListString = fundList.slice(i * DATA_BATCH_SIZE, (i * DATA_BATCH_SIZE) + DATA_BATCH_SIZE).reduce((prev, curr) => prev ? `${prev}|${curr.code}` : curr.code, '');
        const apiPromise = axios.get(GET_FUNDS_DETAILS(fundCodeListString))
            .then((response) => {
                const { data } = response;
                data.forEach((details, index) => {
                    fundList[(i * DATA_BATCH_SIZE) + index].details = details;
                });
            });
        promiseList.push(apiPromise);
    }
    await Promise.all(promiseList);
    return fundList;
}