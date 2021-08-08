import { useEffect } from 'react';

import axios from 'axios';

import { makeStyles } from '@material-ui/core';

import { GET_FUNDS } from './constants';
import { formatData } from './utility';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const FilterOptions = (props) => {
  const classes = useStyles();
  
  const {
    duration,
    durationSelected, setDurationSelected,
    rawFunds, setRawFunds,
    setFunds,
  } = props;

  // const [timeRemaining, setTimeRemaining] = React.useState(getRefreshInterval());
  // const [shouldNotify, setShouldNotify] = React.useState(false);

  // const propsToPass = {
  //   ...props,
  //   shouldNotify, setShouldNotify,
  // };

  useEffect(() => {
    axios.get(GET_FUNDS)
      .then(async (response) => {
        const {data} = response; 
        setRawFunds(data);
        setFunds(await formatData(data, durationSelected));
      });
    // if (districtsSelected.length) {
    //   loadDistrictData(stateSelected);
    //   loadFreshData();
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useInterval(() => {
  //   const newTimeRemaining = timeRemaining - 1;
  //   if (newTimeRemaining === 0) {
  //     if (districtsSelected.length) {
  //       loadFreshData(true);
  //     }
  //   }
  //   if (newTimeRemaining >= 0) {
  //     setTimeRemaining(newTimeRemaining);
  //   }
  // }, 1000);

  // const saveFilterModel = () => {
  //   const currentFilterModel = gridApi?.getFilterModel() || {};
  //   setFilterDataModel(currentFilterModel);
  // }

  // const resetValuesOnStateChange = () => {
  //   setDistricts(null);
  //   setDistrictsSelected([]);
  //   resetValuesOnDistrictChange(true);
  // }

  // const resetValuesOnDistrictChange = (resetVaccineAndAge) => {
  //   saveFilterModel();
  //   setRawCenters(null);
  //   setCenters(null);
  //   if (resetVaccineAndAge) {
  //     setVaccines(null);
  //     setVaccineSelected(DEFAULT_VACCINE);
  //     setAgeGroup(null);
  //     setAgeGroupSelected(DEFAULT_AGE);
  //   }
  // }

  // const handleStateChange = (event) => {
  //   const newStateSelectedValue = event.target.value;
  //   setStateSelected(newStateSelectedValue);
  //   resetValuesOnStateChange();
  //   loadDistrictData(newStateSelectedValue);
  // };

  // const loadDistrictData = (newStateSelectedValue) => {
  //   axios.get(`${GET_DISTRICTS}/${newStateSelectedValue}`)
  //     .then((response) => {
  //       setDistricts(response.data.districts);
  //     });
  // }

  // const loadFreshData = (
  //   shouldNotifyIfSlotsAvailable = false,
  //   resetVaccineAndAge = false,
  //   districtsList = districtsSelected,
  //   dose = doseSelected,
  //   duration = durationSelected,
  // ) => {
  //   resetValuesOnDistrictChange(resetVaccineAndAge);
  //   new Promise(async (resolve) => {
  //     const [rawCenterData, newVaccines, newAgeGroups, modifiedCenters] = await fetchCenters(districtsList, duration, dose);
  //     setRawCenters(rawCenterData);
  //     setCenters(modifiedCenters);
  //     setVaccines(newVaccines);
  //     setAgeGroup(newAgeGroups);
  //     setTimeRemaining(getRefreshInterval());
  //     if (shouldNotifyIfSlotsAvailable) {
  //       setShouldNotify(true);
  //     }
  //     resolve();
  //   })
  // }

  // const handleDistrictChange = (event) => {
  //   const newDistrictsSelectedValue = event.target.value;
  //   setDistrictsSelected(newDistrictsSelectedValue);
  //   loadFreshData(false, true, newDistrictsSelectedValue);
  // };

  // const handleVaccineChange = (event) => {
  //   saveFilterModel();
  //   const value = event.target.value;
  //   setVaccineSelected(value);
  //   const centersCopy = centers;
  //   setCenters(null);
  //   setTimeout(() => {
  //     setCenters(centersCopy);
  //   }, 0);
  // };

  // const handleAgeGroupChange = (event) => {
  //   saveFilterModel();
  //   const value = event.target.value;
  //   setAgeGroupSelected(value);
  //   const centersCopy = centers;
  //   setCenters(null);
  //   setTimeout(() => {
  //     setCenters(centersCopy);
  //   }, 0);
  // }

  // const handleDoseChange = (event) => {
  //   const value = event.target.value;
  //   setDoseSelected(value);
  //   loadFreshData(false, false, districtsSelected, value);
  // }

  const handleDurationChange = async (event) => {
    const value = event.target.value;
    setDurationSelected(value);
    setFunds(await formatData(rawFunds, value));
    // loadFreshData(false, false, districtsSelected, doseSelected, value);
  }

  // const ageGroupMenuText = (value) => {
  //   switch (value) {
  //     case 18: {
  //       return '18-44';
  //     }
  //     case 45: {
  //       return '45+';
  //     }
  //     default: {
  //       return value;
  //      }
  //   }
  // }

  // const getTimeRemainingText = () => {
  //   switch (timeRemaining) {
  //     case 0: {
  //       return 'Refreshing'
  //     }
  //     default: {
  //       return `in ${timeRemaining} s`;
  //     }
  //   }
  // }

  return (
      <>
      </>
  )

  // return (
  //   <div style={{display: 'flex', overflowX: 'auto', marginRight: '8px'}}>
  //     <FormControl variant="outlined" className={classes.formControl}>
  //       <InputLabel id="demo-simple-select-outlined-label">Sort by</InputLabel>
  //       <Select
  //         labelId="demo-simple-select-outlined-label"
  //         id="demo-simple-select-outlined"
  //         value={durationSelected}
  //         onChange={handleDurationChange}
  //         label="Sort by"
  //       >
  //         {
  //           duration.map((d, index) => <MenuItem value={d} key={index}>{d} Year</MenuItem>)
  //         }
  //       </Select>
  //     </FormControl>
  //   </div>
  // )
}

export default FilterOptions;