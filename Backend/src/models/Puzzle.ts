import { Field, ObjectType, ID } from "type-graphql";

@ObjectType()
export class Puzzle {
    @Field(() => ID)
    id!: string;

    @Field()
    type!: string;

    @Field()
    question!: string;

    @Field()
    answer!: string;

    @Field({nullable: true})
    hint?: string;
}