const appSyncConfig = {
    UserAgent: "aws-amplify-cli/0.1.0",
    Version: "1.0",
    IdentityManager: {
        Default: {}
    },
    AppSync: {
        Default: {
            ApiUrl: "https://onquqd42qneuhm7zfbxjxwgz4a.appsync-api.us-west-2.amazonaws.com/graphql",
            Region: "us-west-2",
            AuthMode: "API_KEY",
            ApiKey: "da2-birvuqbaovct5fsxz3usie7k7y",
            ClientDatabasePrefix: "igusers_API_KEY"
        }
    }
}

export default appSyncConfig;