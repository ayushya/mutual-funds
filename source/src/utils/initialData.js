const fetchData = async (url) => {
  return await fetch(url)
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    }
  })
  .then((response) => response)
  .catch((error) => {
    console.error(error);
  })
}

export const getAllFunds = async (setData) => {
  const data = await fetchData('https://api.kuvera.in/api/v3/funds.json');
  setData('allFunds', data);
}

export const getFundDetails = async (code, setData) => {
  const data = await fetchData(`https://api.kuvera.in/api/v3/funds/${code}.json`);
  setData('fundDetails', data);
}
