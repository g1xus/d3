import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core'
import App from './App.vue'

const cache = new InMemoryCache()

const link = new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/chimpytuts/darkpools-main-arbitrum',
    headers: {
        'Content-Type': "application/json; charset=utf-8"
    }
})

const apolloClient = new ApolloClient({
    cache,
    link
})

const app = createApp({
    setup () {
        provide(DefaultApolloClient, apolloClient)
    },

    render: () => h(App),
})

app.mount('#app');
