import "reflect-metadata";
import { buildSchema } from "type-graphql";
import SignupResolver from "./resolvers/user/mutations/signUp";
import SigninResolver from "./resolvers/user/mutations/signIn";
import PuzzleResolver from "./resolvers/puzzle/mutations/createPuzzle";

export const createSchema = async () => {
  return await buildSchema({
    resolvers: [SignupResolver, SigninResolver, PuzzleResolver],
  });
};
