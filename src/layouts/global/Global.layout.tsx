import React, { useEffect } from 'react';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import { client } from '../../apollo/client';
import { AppTexts } from '../../App.texts';
import { store } from '../../app/store';


const Global: (props: { children: React.JSXElementConstructor<any> }) => JSX.Element = ({ children: Children }) => {
  useEffect(() => {
    document.title = AppTexts.get('pageTitle');
    return () => {};
  }, [])
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Children aProp='MyProp'/>
      </ApolloProvider>
    </Provider>
  )
}

export default Global;