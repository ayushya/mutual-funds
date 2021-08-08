import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import React from 'react';

import {
  AgGridColumn,
  AgGridReact,
} from 'ag-grid-react';

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
              enableCellTextSelection={true}
              defaultColGroupDef={{ marryChildren: true }}
              animateRows={true}
              // isExternalFilterPresent={() => true}
              // doesExternalFilterPass={rowDataFilter}
              onGridReady={onGridReady}
              tooltipShowDelay={0}
              rowData={funds}>
              {/* <AgGridColumn
                field="pincode"
                sortable={true}
                filter={true}
                cellRenderer={dataWithMapLinkWrapperRenderer}
                tooltipValueGetter={() => 'Open in Google Maps'}
              /> */}
              <AgGridColumn
                headerName="Fund Name"
                field="name"
                // tooltipValueGetter={({ value }) => `Where is ${value} ?`}
                sortable={true}
                filter={true}
                width={400}
                // cellRenderer={dataWithMapLinkWrapperRenderer}
              />
              <AgGridColumn
                headerName="Category"
                field="category"
                // tooltipValueGetter={({ value }) => `Where is ${value} ?`}
                sortable={true}
                filter={true}
                width={120}
              // cellRenderer={dataWithMapLinkWrapperRenderer}
              />
              <AgGridColumn
                headerName="Sub Category"
                field="subCategory"
                // tooltipValueGetter={({ value }) => `Where is ${value} ?`}
                sortable={true}
                filter={true}
                width={180}
              // cellRenderer={dataWithMapLinkWrapperRenderer}
              />
              <AgGridColumn
                headerName="NAV"
                field="details.nav.nav"
                // tooltipValueGetter={({ value }) => `Where is ${value} ?`}
                sortable={true}
                filter={true}
                width={120}
              // cellRenderer={dataWithMapLinkWrapperRenderer}
              />
              <AgGridColumn
                headerName="1 year"
                field={`returns.1`}
                sortable={true}
                filter={false}
                width={120}
                sort={'desc'}
              />
              <AgGridColumn
                headerName="3 year"
                field={`returns.3`}
                sortable={true}
                filter={false}
                width={120}
                sort={'desc'}
              />
              <AgGridColumn
                headerName="5 year"
                field={`returns.5`}
                sortable={true}
                filter={false}
                width={120}
                sort={'desc'}
              />
              <AgGridColumn
                headerName="Expense Ratio"
                field={`details.expense_ratio`}
                sortable={true}
                filter={false}
                width={180}
                sort={'asc'}
              />
              <AgGridColumn
                headerName="Volatility"
                field={`volatility`}
                sortable={true}
                filter={false}
                width={150}
                sort={'asc'}
              />
              {/* <AgGridColumn
                headerName="Fee"
                field="fee_type"
                valueGetter={({ data: { fee_type, vaccine_fees } }) => vaccine_fees?.[0].fee || fee_type}
                valueFormatter={({ data: { fee_type, vaccine_fees } }) => vaccine_fees ? `₹ ${vaccine_fees?.[0].fee}` : fee_type}
                sortable={true}
                filter={true}
                cellStyle={feeStyle}
              />
              <AgGridColumn
                headerName="# Total"
                field={`availability.${ageGroupSelected}.${vaccineSelected}_total`}
                sortable={true}
                filter={false}
                width={120}
                cellStyle={quantityStyle}
                sort={'desc'}
                cellRenderer={quantityRenderer}
              />
              {
                dateMap?.map((dateItem, index) =>
                  <AgGridColumn
                    key={index}
                    headerName={dateItem}
                    field={`availability.${ageGroupSelected}.${vaccineSelected}.${dateItem}`}
                    sortable={true}
                    filter={false}
                    width={130}
                    cellStyle={quantityStyle}
                    cellRenderer={quantityRenderer}
                    onCellClicked={({ event, value }) => {
                      if (value > 0) {
                        event.target.querySelector('a')?.click();
                      }
                    }}
                  />
                )
              } */}
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
