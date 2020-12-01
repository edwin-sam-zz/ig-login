import gql from 'graphql-tag'


const CREATE_USER = gql` 
  mutation createUser ($mobileOrEmail: String!, $fullname: String!, $username: String!, $password: String!) 
  {
      createUser(input: {mobileOrEmail: $mobileOrEmail, fullname: $fullname, username: $username, password: $password}) {
          id
          mobileOrEmail
          fullname
          username
          password
      }
  }
`;
export default CREATE_USER;
