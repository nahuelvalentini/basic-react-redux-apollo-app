import { ApolloProvider } from '@apollo/client';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { client } from '../../apollo/client';
import { AppTexts } from '../../App.texts';
import { store } from '../../app/store';

const Global: (props: React.PropsWithChildren) => JSX.Element = ({ children }) => {
  useEffect(() => {
    document.title = AppTexts.get('pageTitle')
  }, [])
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        {children}
      </ApolloProvider>
    </Provider>
  )
}

export default Global;