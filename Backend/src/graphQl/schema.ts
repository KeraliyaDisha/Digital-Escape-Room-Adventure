import "reflect-metadata";
import { buildSchema } from "type-graphql";
import SignupResolver from "./resolvers/user/mutations/signUp";
import SigninResolver from "./resolvers/user/mutations/signIn";


export const createSchema = async () => {
  return await buildSchema({
    resolvers: [SignupResolver, SigninResolver],
  });
};
