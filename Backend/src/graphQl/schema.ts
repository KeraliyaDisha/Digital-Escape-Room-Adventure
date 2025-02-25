import "reflect-metadata";
import { buildSchema } from "type-graphql";
import SignupResolver from "./resolvers/user/mutations/signUp";
import SigninResolver from "./resolvers/user/mutations/signIn";
import PuzzleResolver from "./resolvers/puzzle/mutations/createPuzzle";
import UserResolver from "./resolvers/user/queries/getUser";
import UsersResolver from "./resolvers/user/queries/getAllUser";

export const createSchema = async () => {
  return await buildSchema({
    resolvers: [SignupResolver, SigninResolver, PuzzleResolver, UserResolver, UsersResolver],
  });
};
