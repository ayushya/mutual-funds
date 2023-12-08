import axios from 'axios';

import { GET_FUNDS_DETAILS } from './constants';

export const formatData = async (data, duration) => {
    let fundList: any = [];

    data.data.funds.forEach(fund => {
        const {name, sub_category: subCategory, category, unique_fund_code: code, one_day_return } = fund;
        fundList.push({
            name,
            code,
            category,
            subCategory,
            one_day_return,
        });
    });

    // const categoryList = Object.keys(data);
    // categoryList?.forEach((category) => {
    //     const subCategoryList = Object.keys(data[category]);
    //     subCategoryList.forEach((subCategory) => {
    //         const fundHouseList = Object.keys(data[category][subCategory]);
    //         fundHouseList.forEach((fundHouse) => {
    //             data[category][subCategory][fundHouse].forEach((fund) => {
    //                 const {
    //                     c,
    //                     kc,
    //                     n,
    //                     r,
    //                     // re,
    //                     v,
    //                 } = fund;
    //                 fundList.push({
    //                     name: n,
    //                     code: c,
    //                     returns: r,
    //                     volatility: v,
    //                     categoryMentioned: kc,
    //                     category,
    //                     subCategory,
    //                 });
    //             });
    //         });
    //     });
    // });

    const DATA_BATCH_SIZE = 50;
    const NUMBER_OF_API_CALLS = Math.ceil(fundList.length / DATA_BATCH_SIZE);

    const promiseList: any = [];
    for (let i = 0; i < NUMBER_OF_API_CALLS; i++) {
        const fundCodeListString = fundList
            .slice(i * DATA_BATCH_SIZE, i * DATA_BATCH_SIZE + DATA_BATCH_SIZE)
            .reduce(
                (prev, curr) => (prev ? `${prev}|${curr.code}` : curr.code),
                ""
            );
        const apiPromise = axios
            .get(GET_FUNDS_DETAILS(fundCodeListString))
            .then((response) => {
                const { data } = response;
                data.forEach((details, index) => {
                    fundList[i * DATA_BATCH_SIZE + index].details = details;
                });
            });
        promiseList.push(apiPromise);
    }
    await Promise.all(promiseList);

    // Filter all the funds which are unavailable
    const filteredFunds = fundList.filter(
        (fund) =>
            !(
                fund?.details?.sip_available === "N" &&
                fund?.details?.lump_available === "N" &&
                fund?.details?.redemption_allowed === "N"
            )
    );

    // Reduce the transmitted data footprint by over 90%
    return filteredFunds.map((fund) => {
        return {
            name: fund.name,
            category: fund.category,
            subCategory: fund.subCategory,
            details: {
                nav: {
                    nav: fund.details?.nav?.nav,
                },
                returns: {
                    week_1: fund.details?.returns?.week_1,
                    year_1: fund.details?.returns?.year_1,
                    year_3: fund.details?.returns?.year_3,
                    year_5: fund.details?.returns?.year_5,
                    inception: fund.details?.returns?.inception,
                },
                expense_ratio: fund.details?.expense_ratio,
                volatility: fund.details?.volatility,
                slug: fund.details?.slug,
            },
            one_day_return: fund.one_day_return,
        }
    });
};
