import { Resolver, Query, Ctx } from "type-graphql";
import { prisma } from "../../../../config/db";
import { MyContext } from "../../../../types";
import { User } from "../../../../models/User";

@Resolver(User)
export default class UsersResolver {
  @Query(() => [User])
  async users(): Promise<User[]> {
    return await prisma.user.findMany()
  }
}
