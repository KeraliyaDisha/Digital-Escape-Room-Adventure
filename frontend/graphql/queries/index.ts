import { gql } from "@apollo/client"

export const get_User = gql`
query Query {
  user {
    id
    firstName
    lastName
    email
  }
}
`