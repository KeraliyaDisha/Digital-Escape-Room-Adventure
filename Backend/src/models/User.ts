import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class User {
    @Field(() => ID)
    id!: string;

    @Field()
    firstName!: string;

    @Field()
    lastName!: string;

    @Field()
    email!: string;

    @Field()
    password!: string;
}

@ObjectType()
export class Token{
    @Field()
    token!: string;
}
