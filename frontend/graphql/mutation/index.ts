import { gql } from '@apollo/client';

export const SIGNUP_MUTATION = gql`
mutation Signup($password: String!, $email: String!, $lastName: String!, $firstName: String!) {
    signup(password: $password, email: $email, lastName: $lastName, firstName: $firstName) {
        token
    }
}
`

export const SIGNIN_MUTATION = gql`
mutation Signin($password: String!, $email: String!) {
  signin(password: $password, email: $email) {
    token
  }
}
`