import { Field, ObjectType, ID } from "type-graphql";

@ObjectType()
export class Game{
    @Field(() => ID)
    id!: string;

    @Field()
    puzzleIds!: string;

    @Field()
    players!: string;
}