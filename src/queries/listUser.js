import gql from 'graphql-tag'

const LIST_USER = gql`
    query listUsers {
        listUsers {
            items {
                id
                mobileOrEmail
                fullname
                username
                password
            }
        }
    }
`;

export default LIST_USER;