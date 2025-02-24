import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { prisma } from "../../../../config/db";
import { Puzzle } from "../../../../models/Puzzle";

@Resolver()
export default class PuzzleResolver {
    
  @Mutation(() => Puzzle)
  async createPuzzle(

    @Arg("type") type: string,
    @Arg("question") question: string,
    @Arg("answer") answer: string,
    @Arg("hint", {nullable: true}) hint?: string

  ): Promise<Puzzle> {
    const puzzle = await prisma.puzzle.create({
        data: {type, question, answer, hint}
    })
    return {
      ...puzzle,
      hint: puzzle.hint ?? undefined,
    };
  }
}
