import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


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

ReactDOM.render(<App />, document.getElementById('root'));