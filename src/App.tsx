import React from 'react';
import './App.css';
import { AppTexts } from './App.texts';
import BasicChartComponent from './components/BasicChart/BasicChart.component';
import BasicChartDataProvider from './components/BasicChart/BasicChart.consumer';

function App(props: { aProp?: string }) {
  return (
    <>
      <h1>{AppTexts.get('titleApp')}</h1>
      <h2>{props.aProp} sdf</h2>
      <BasicChartDataProvider>
        {BasicChartComponent}
      </BasicChartDataProvider>
    </>
  );
}
export default App;
