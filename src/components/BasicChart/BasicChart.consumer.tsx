import React from 'react'
import { gql } from '../../__generated__';
import { useQuery } from '@apollo/client';


const QUERY_TEST_GENERATED_TYPES = gql(`
  query queryTest {
    sales {
      date
      price
      productId
    } 
  }
`);

const BasicChartDataProvider = ({ children: Children }: { children: React.JSXElementConstructor<any> }) => {
  const { data, loading } = useQuery(QUERY_TEST_GENERATED_TYPES);

  return (
    <Children data={data} loading={loading}/>
  );
};

export default BasicChartDataProvider;

