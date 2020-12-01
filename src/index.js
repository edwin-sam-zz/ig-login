import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import appSyncConfig from './appsync';
import { gql } from '@apollo/client';
import AWSAppSyncClient from "aws-appsync";
import { Rehydrated } from 'aws-appsync-react';
import { ApolloProvider } from 'react-apollo';

// A
const client = new AWSAppSyncClient({
  url: appSyncConfig.AppSync.Default.ApiUrl,
  region: appSyncConfig.AppSync.Default.Region,
  auth: {
    type: appSyncConfig.AppSync.Default.AuthMode,
    apiKey: appSyncConfig.AppSync.Default.ApiKey,
  }
});

// B
const WithProvider = () => {  
  return (
    <ApolloProvider client={client}>
        <Rehydrated 
            render={({ rehydrated }) => (
                rehydrated ? <App /> : <strong>Your custom UI component here...</strong>
            )}
        />
    </ApolloProvider>
  )
}

ReactDOM.render(<WithProvider />, document.getElementById('root'));