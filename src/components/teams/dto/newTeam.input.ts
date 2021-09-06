import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class NewTeamInput {
    @Field()
    name: string;
}
