import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"

// uriは接続したいプロジェクトのSettingsのContent APIのurlを貼り付ける
// cacheはここにデータを保存してCMSへ毎回リクエストをしない役割
const client = new ApolloClient({
  uri: "https://api-ap-northeast-1.hygraph.com/v2/cl61y4uct5efn01t38md4fryj/master",
  cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
)
