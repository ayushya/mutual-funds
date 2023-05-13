import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import React from 'react';

import { AgGridReact } from 'ag-grid-react';

import { CircularProgress } from '@material-ui/core';

import {
  DEFAULT_DURATION,
  DURATION_LIST,
} from './constants';
import FilterOptions from './FilterOptions';

function App() {
  const [duration, setDuration] = React.useState(DURATION_LIST);
  const [durationSelected, setDurationSelected] = React.useState(DEFAULT_DURATION);

  const [rawFunds, setRawFunds] = React.useState(null);
  const [funds, setFunds] = React.useState(null);

  const [gridApi, setGridApi] = React.useState(null);

  const propsToPass = {
    duration, setDuration,
    durationSelected, setDurationSelected,
    rawFunds, setRawFunds,
    funds, setFunds,


    gridApi, setGridApi,
    // filterDataModel, setFilterDataModel,
  };

  const onGridReady = (params) => {
    setGridApi(params.api);
  }

  const columnDefs = [
    {
      headerName: "Fund Name",
      field: "name",
      sortable: true,
      filter: true,
      width: 400,
    },
    {
      headerName: "Category",
      field: "category",
      sortable: true,
      filter: true,
      width: 120,
    },
    {
      headerName: "Sub Category",
      field: "subCategory",
      sortable: true,
      filter: true,
      width: 180,
    },
    {
      headerName:"NAV",
      field:"details.nav.nav",
      sortable:true,
      filter:true,
      width:120,
    },
    {
      headerName: "1 week",
      field: `details.returns.week_1`,
      sortable: true,
      filter: false,
      width: 120,
    },
    {
      headerName: "1 year",
      field: `details.returns.year_1`,
      sortable: true,
      filter: false,
      width: 120,
      sort: 'desc',
    },
    {
      headerName: "3 year",
      field: `details.returns.year_3`,
      sortable: true,
      filter: false,
      width: 120,
      sort: 'desc',
    },
    {
      headerName: "5 year",
      field: `details.returns.year_5`,
      sortable: true,
      filter: false,
      width: 120,
      sort: 'desc',
    },
    {
      headerName: "Inception",
      field: `details.returns.inception`,
      sortable: true,
      filter: false,
      width: 140,
      sort: 'desc',
    },
    {
      headerName: "Expense Ratio",
      field: `details.expense_ratio`,
      sortable: true,
      filter: false,
      width: 180,
      sort: 'asc',
    },
    {
      headerName: "Volatility",
      field: `details.volatility`,
      sortable: true,
      filter: false,
      width: 150,
      sort: 'asc',
    }
  ];

  // const height = 'calc(100vh - 72px)';
  const calculatedHeight = 'calc(100vh)';


  return (
    <div>
      <FilterOptions {...propsToPass} />
      {
        funds?.length ?
          <div className="ag-theme-alpine" style={{ height: calculatedHeight, width: '100%' }}>
            <AgGridReact
              defaultColDef={{
                width: 120,
                // editable: true,
                // filter: 'agTextColumnFilter',
                floatingFilter: true,
                resizable: true,
                suppressMovable: true
              }}
              columnDefs={columnDefs}
              enableCellTextSelection={true}
              defaultColGroupDef={{ marryChildren: true }}
              animateRows={true}
              // isExternalFilterPresent={() => true}
              // doesExternalFilterPass={rowDataFilter}
              onGridReady={onGridReady}
              tooltipShowDelay={0}
              rowData={funds}>
            </AgGridReact>
          </div> :
          <div style={{ height: calculatedHeight, width: '100%', display: 'flex', justifyContent: 'center' }}>
            <CircularProgress style={{ alignSelf: 'center' }} />
          </div>
      }
    </div>
  );
}

export default App;
