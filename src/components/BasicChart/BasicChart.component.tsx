import React from 'react'
import { gql } from '../../__generated__';
import { BasicChartTexts } from './BasicChart.texts';

const QUERY_TEST_GENERATED_TYPES = gql(`
  query queryTest {
    sales {
      date
      price
      productId
    } 
  }
`);

const BasicChartComponent = () => {
  return (
    <h2>{BasicChartTexts.get('firstTitle')}</h2>
  );
}

export default BasicChartComponent;