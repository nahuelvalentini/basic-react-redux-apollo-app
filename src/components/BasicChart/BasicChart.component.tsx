import React, { useEffect, useState } from 'react'
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import moment from 'moment'
import { QueryTestQuery } from '../../__generated__/graphql';
import { initialStateBasicChart } from './BasicChart.localData';

const returnArrayDatesFormated = (sale: (NonNullable<QueryTestQuery['sales']>[0])) => {
  return moment(new Date(sale?.date)).format('DD-MM-YYYY');
};

const BasicChartComponent = (
  { data, ...props}: HighchartsReact.Props & { data?: QueryTestQuery }) => {

  const chartComponentRef = React.useRef<HighchartsReact.RefObject>(null);
  const [optionsHichart, setOptionsHichart] = useState(initialStateBasicChart);

  useEffect(() => {
    const salesDates = data?.sales?.map(returnArrayDatesFormated);
    const xAxis = { categories: salesDates }
    setOptionsHichart({...optionsHichart, xAxis })
  }, [data]);
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={optionsHichart}
      ref={chartComponentRef}
      {...props}/>
    );
};

export default BasicChartComponent;
